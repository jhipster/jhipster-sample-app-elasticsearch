import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { BankAccountService } from '../service/bank-account.service';

import { BankAccountComponent } from './bank-account.component';

describe('BankAccount Management Component', () => {
  let comp: BankAccountComponent;
  let fixture: ComponentFixture<BankAccountComponent>;
  let service: BankAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([{ path: 'bank-account', component: BankAccountComponent }]), HttpClientTestingModule],
      declarations: [BankAccountComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({
              defaultSort: 'id,asc',
            }),
            queryParamMap: of(
              jest.requireActual('@angular/router').convertToParamMap({
                page: '1',
                size: '1',
                sort: 'id,desc',
              })
            ),
            snapshot: { queryParams: {} },
          },
        },
      ],
    })
      .overrideTemplate(BankAccountComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(BankAccountComponent);
    comp = fixture.componentInstance;
    service = TestBed.inject(BankAccountService);

    const headers = new HttpHeaders();
    jest.spyOn(service, 'query').mockReturnValue(
      of(
        new HttpResponse({
          body: [{ id: 123 }],
          headers,
        })
      )
    );
  });

  it('Should call load all on init', () => {
    // WHEN
    comp.ngOnInit();

    // THEN
    expect(service.query).toHaveBeenCalled();
    expect(comp.bankAccounts?.[0]).toEqual(expect.objectContaining({ id: 123 }));
  });

  describe('trackId', () => {
    it('Should forward to bankAccountService', () => {
      const entity = { id: 123 };
      jest.spyOn(service, 'getBankAccountIdentifier');
      const id = comp.trackId(0, entity);
      expect(service.getBankAccountIdentifier).toHaveBeenCalledWith(entity);
      expect(id).toBe(entity.id);
    });
  });
});
