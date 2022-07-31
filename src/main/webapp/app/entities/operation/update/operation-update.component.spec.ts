import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject, from } from 'rxjs';

import { OperationFormService } from './operation-form.service';
import { OperationService } from '../service/operation.service';
import { IOperation } from '../operation.model';
import { IBankAccount } from 'app/entities/bank-account/bank-account.model';
import { BankAccountService } from 'app/entities/bank-account/service/bank-account.service';
import { ILabel } from 'app/entities/label/label.model';
import { LabelService } from 'app/entities/label/service/label.service';

import { OperationUpdateComponent } from './operation-update.component';

describe('Operation Management Update Component', () => {
  let comp: OperationUpdateComponent;
  let fixture: ComponentFixture<OperationUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let operationFormService: OperationFormService;
  let operationService: OperationService;
  let bankAccountService: BankAccountService;
  let labelService: LabelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [OperationUpdateComponent],
      providers: [
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{}]),
          },
        },
      ],
    })
      .overrideTemplate(OperationUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(OperationUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    operationFormService = TestBed.inject(OperationFormService);
    operationService = TestBed.inject(OperationService);
    bankAccountService = TestBed.inject(BankAccountService);
    labelService = TestBed.inject(LabelService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call BankAccount query and add missing value', () => {
      const operation: IOperation = { id: 456 };
      const bankAccount: IBankAccount = { id: 65249 };
      operation.bankAccount = bankAccount;

      const bankAccountCollection: IBankAccount[] = [{ id: 39284 }];
      jest.spyOn(bankAccountService, 'query').mockReturnValue(of(new HttpResponse({ body: bankAccountCollection })));
      const additionalBankAccounts = [bankAccount];
      const expectedCollection: IBankAccount[] = [...additionalBankAccounts, ...bankAccountCollection];
      jest.spyOn(bankAccountService, 'addBankAccountToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ operation });
      comp.ngOnInit();

      expect(bankAccountService.query).toHaveBeenCalled();
      expect(bankAccountService.addBankAccountToCollectionIfMissing).toHaveBeenCalledWith(
        bankAccountCollection,
        ...additionalBankAccounts.map(expect.objectContaining)
      );
      expect(comp.bankAccountsSharedCollection).toEqual(expectedCollection);
    });

    it('Should call Label query and add missing value', () => {
      const operation: IOperation = { id: 456 };
      const labels: ILabel[] = [{ id: 647 }];
      operation.labels = labels;

      const labelCollection: ILabel[] = [{ id: 16623 }];
      jest.spyOn(labelService, 'query').mockReturnValue(of(new HttpResponse({ body: labelCollection })));
      const additionalLabels = [...labels];
      const expectedCollection: ILabel[] = [...additionalLabels, ...labelCollection];
      jest.spyOn(labelService, 'addLabelToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ operation });
      comp.ngOnInit();

      expect(labelService.query).toHaveBeenCalled();
      expect(labelService.addLabelToCollectionIfMissing).toHaveBeenCalledWith(
        labelCollection,
        ...additionalLabels.map(expect.objectContaining)
      );
      expect(comp.labelsSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const operation: IOperation = { id: 456 };
      const bankAccount: IBankAccount = { id: 53557 };
      operation.bankAccount = bankAccount;
      const label: ILabel = { id: 2284 };
      operation.labels = [label];

      activatedRoute.data = of({ operation });
      comp.ngOnInit();

      expect(comp.bankAccountsSharedCollection).toContain(bankAccount);
      expect(comp.labelsSharedCollection).toContain(label);
      expect(comp.operation).toEqual(operation);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IOperation>>();
      const operation = { id: 123 };
      jest.spyOn(operationFormService, 'getOperation').mockReturnValue(operation);
      jest.spyOn(operationService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ operation });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: operation }));
      saveSubject.complete();

      // THEN
      expect(operationFormService.getOperation).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(operationService.update).toHaveBeenCalledWith(expect.objectContaining(operation));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IOperation>>();
      const operation = { id: 123 };
      jest.spyOn(operationFormService, 'getOperation').mockReturnValue({ id: null });
      jest.spyOn(operationService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ operation: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: operation }));
      saveSubject.complete();

      // THEN
      expect(operationFormService.getOperation).toHaveBeenCalled();
      expect(operationService.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IOperation>>();
      const operation = { id: 123 };
      jest.spyOn(operationService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ operation });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(operationService.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });

  describe('Compare relationships', () => {
    describe('compareBankAccount', () => {
      it('Should forward to bankAccountService', () => {
        const entity = { id: 123 };
        const entity2 = { id: 456 };
        jest.spyOn(bankAccountService, 'compareBankAccount');
        comp.compareBankAccount(entity, entity2);
        expect(bankAccountService.compareBankAccount).toHaveBeenCalledWith(entity, entity2);
      });
    });

    describe('compareLabel', () => {
      it('Should forward to labelService', () => {
        const entity = { id: 123 };
        const entity2 = { id: 456 };
        jest.spyOn(labelService, 'compareLabel');
        comp.compareLabel(entity, entity2);
        expect(labelService.compareLabel).toHaveBeenCalledWith(entity, entity2);
      });
    });
  });
});
