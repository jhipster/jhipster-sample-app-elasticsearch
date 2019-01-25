import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IBankAccount } from 'app/shared/model/bank-account.model';
import { AccountService } from 'app/core';
import { BankAccountService } from './bank-account.service';

@Component({
    selector: 'jhi-bank-account',
    templateUrl: './bank-account.component.html'
})
export class BankAccountComponent implements OnInit, OnDestroy {
    bankAccounts: IBankAccount[];
    currentAccount: any;
    eventSubscriber: Subscription;
    currentSearch: string;

    constructor(
        protected bankAccountService: BankAccountService,
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
            this.bankAccountService
                .search({
                    query: this.currentSearch
                })
                .pipe(
                    filter((res: HttpResponse<IBankAccount[]>) => res.ok),
                    map((res: HttpResponse<IBankAccount[]>) => res.body)
                )
                .subscribe((res: IBankAccount[]) => (this.bankAccounts = res), (res: HttpErrorResponse) => this.onError(res.message));
            return;
        }
        this.bankAccountService
            .query()
            .pipe(
                filter((res: HttpResponse<IBankAccount[]>) => res.ok),
                map((res: HttpResponse<IBankAccount[]>) => res.body)
            )
            .subscribe(
                (res: IBankAccount[]) => {
                    this.bankAccounts = res;
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
        this.registerChangeInBankAccounts();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IBankAccount) {
        return item.id;
    }

    registerChangeInBankAccounts() {
        this.eventSubscriber = this.eventManager.subscribe('bankAccountListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
