import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { JhipsterElasticsearchSampleApplicationTestModule } from '../../../test.module';
import { BankAccountDetailComponent } from 'app/entities/bank-account/bank-account-detail.component';
import { BankAccount } from 'app/shared/model/bank-account.model';

describe('Component Tests', () => {
  describe('BankAccount Management Detail Component', () => {
    let comp: BankAccountDetailComponent;
    let fixture: ComponentFixture<BankAccountDetailComponent>;
    const route = ({ data: of({ bankAccount: new BankAccount(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [JhipsterElasticsearchSampleApplicationTestModule],
        declarations: [BankAccountDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(BankAccountDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(BankAccountDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load bankAccount on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.bankAccount).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
