import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IBankAccount } from '../bank-account.model';
import { BankAccountService } from '../service/bank-account.service';
import { BankAccountDeleteDialogComponent } from '../delete/bank-account-delete-dialog.component';

@Component({
  selector: 'jhi-bank-account',
  templateUrl: './bank-account.component.html',
})
export class BankAccountComponent implements OnInit {
  bankAccounts?: IBankAccount[];
  isLoading = false;
  currentSearch: string;

  constructor(
    protected bankAccountService: BankAccountService,
    protected modalService: NgbModal,
    protected activatedRoute: ActivatedRoute
  ) {
    this.currentSearch = this.activatedRoute.snapshot.queryParams['search'] ?? '';
  }

  loadAll(): void {
    this.isLoading = true;
    if (this.currentSearch) {
      this.bankAccountService
        .search({
          query: this.currentSearch,
        })
        .subscribe(
          (res: HttpResponse<IBankAccount[]>) => {
            this.isLoading = false;
            this.bankAccounts = res.body ?? [];
          },
          () => {
            this.isLoading = false;
          }
        );
      return;
    }

    this.bankAccountService.query().subscribe(
      (res: HttpResponse<IBankAccount[]>) => {
        this.isLoading = false;
        this.bankAccounts = res.body ?? [];
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  search(query: string): void {
    this.currentSearch = query;
    this.loadAll();
  }

  ngOnInit(): void {
    this.loadAll();
  }

  trackId(index: number, item: IBankAccount): number {
    return item.id!;
  }

  delete(bankAccount: IBankAccount): void {
    const modalRef = this.modalService.open(BankAccountDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.bankAccount = bankAccount;
    // unsubscribe not needed because closed completes on modal close
    modalRef.closed.subscribe(reason => {
      if (reason === 'deleted') {
        this.loadAll();
      }
    });
  }
}
