import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ILabel } from 'app/shared/model/label.model';
import { AccountService } from 'app/core';
import { LabelService } from './label.service';

@Component({
    selector: 'jhi-label',
    templateUrl: './label.component.html'
})
export class LabelComponent implements OnInit, OnDestroy {
    labels: ILabel[];
    currentAccount: any;
    eventSubscriber: Subscription;
    currentSearch: string;

    constructor(
        protected labelService: LabelService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected activatedRoute: ActivatedRoute,
        protected accountService: AccountService
    ) {
        this.currentSearch =
            this.activatedRoute.snapshot && this.activatedRoute.snapshot.params['search']
                ? this.activatedRoute.snapshot.params['search']
                : '';
    }

    loadAll() {
        if (this.currentSearch) {
            this.labelService
                .search({
                    query: this.currentSearch
                })
                .pipe(
                    filter((res: HttpResponse<ILabel[]>) => res.ok),
                    map((res: HttpResponse<ILabel[]>) => res.body)
                )
                .subscribe((res: ILabel[]) => (this.labels = res), (res: HttpErrorResponse) => this.onError(res.message));
            return;
        }
        this.labelService
            .query()
            .pipe(
                filter((res: HttpResponse<ILabel[]>) => res.ok),
                map((res: HttpResponse<ILabel[]>) => res.body)
            )
            .subscribe(
                (res: ILabel[]) => {
                    this.labels = res;
                    this.currentSearch = '';
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    search(query) {
        if (!query) {
            return this.clear();
        }
        this.currentSearch = query;
        this.loadAll();
    }

    clear() {
        this.currentSearch = '';
        this.loadAll();
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInLabels();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ILabel) {
        return item.id;
    }

    registerChangeInLabels() {
        this.eventSubscriber = this.eventManager.subscribe('labelListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
