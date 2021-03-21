jest.mock('@angular/router');

import { TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of } from 'rxjs';

import { IOperation, Operation } from '../operation.model';
import { OperationService } from '../service/operation.service';

import { OperationRoutingResolveService } from './operation-routing-resolve.service';

describe('Service Tests', () => {
  describe('Operation routing resolve service', () => {
    let mockRouter: Router;
    let mockActivatedRouteSnapshot: ActivatedRouteSnapshot;
    let routingResolveService: OperationRoutingResolveService;
    let service: OperationService;
    let resultOperation: IOperation | undefined;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [Router, ActivatedRouteSnapshot],
      });
      mockRouter = TestBed.inject(Router);
      mockActivatedRouteSnapshot = TestBed.inject(ActivatedRouteSnapshot);
      routingResolveService = TestBed.inject(OperationRoutingResolveService);
      service = TestBed.inject(OperationService);
      resultOperation = undefined;
    });

    describe('resolve', () => {
      it('should return IOperation returned by find', () => {
        // GIVEN
        service.find = jest.fn(id => of(new HttpResponse({ body: { id } })));
        mockActivatedRouteSnapshot.params = { id: 123 };

        // WHEN
        routingResolveService.resolve(mockActivatedRouteSnapshot).subscribe(result => {
          resultOperation = result;
        });

        // THEN
        expect(service.find).toBeCalledWith(123);
        expect(resultOperation).toEqual({ id: 123 });
      });

      it('should return new IOperation if id is not provided', () => {
        // GIVEN
        service.find = jest.fn();
        mockActivatedRouteSnapshot.params = {};

        // WHEN
        routingResolveService.resolve(mockActivatedRouteSnapshot).subscribe(result => {
          resultOperation = result;
        });

        // THEN
        expect(service.find).not.toBeCalled();
        expect(resultOperation).toEqual(new Operation());
      });

      it('should route to 404 page if data not found in server', () => {
        // GIVEN
        spyOn(service, 'find').and.returnValue(of(new HttpResponse({ body: null })));
        mockActivatedRouteSnapshot.params = { id: 123 };

        // WHEN
        routingResolveService.resolve(mockActivatedRouteSnapshot).subscribe(result => {
          resultOperation = result;
        });

        // THEN
        expect(service.find).toBeCalledWith(123);
        expect(resultOperation).toEqual(undefined);
        expect(mockRouter.navigate).toHaveBeenCalledWith(['404']);
      });
    });
  });
});
