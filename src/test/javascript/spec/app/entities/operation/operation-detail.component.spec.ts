import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { JhipsterElasticsearchSampleApplicationTestModule } from '../../../test.module';
import { OperationDetailComponent } from 'app/entities/operation/operation-detail.component';
import { Operation } from 'app/shared/model/operation.model';

describe('Component Tests', () => {
  describe('Operation Management Detail Component', () => {
    let comp: OperationDetailComponent;
    let fixture: ComponentFixture<OperationDetailComponent>;
    const route = ({ data: of({ operation: new Operation(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [JhipsterElasticsearchSampleApplicationTestModule],
        declarations: [OperationDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(OperationDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(OperationDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load operation on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.operation).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
