import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ILabel } from '../label.model';
import { LabelService } from '../service/label.service';
import { LabelDeleteDialogComponent } from '../delete/label-delete-dialog.component';

@Component({
  selector: 'jhi-label',
  templateUrl: './label.component.html',
})
export class LabelComponent implements OnInit {
  labels?: ILabel[];
  isLoading = false;
  currentSearch: string;

  constructor(protected labelService: LabelService, protected modalService: NgbModal, protected activatedRoute: ActivatedRoute) {
    this.currentSearch = this.activatedRoute.snapshot.queryParams['search'] ?? '';
  }

  loadAll(): void {
    this.isLoading = true;
    if (this.currentSearch) {
      this.labelService
        .search({
          query: this.currentSearch,
        })
        .subscribe({
          next: (res: HttpResponse<ILabel[]>) => {
            this.isLoading = false;
            this.labels = res.body ?? [];
          },
          error: () => {
            this.isLoading = false;
          },
        });
      return;
    }

    this.labelService.query().subscribe({
      next: (res: HttpResponse<ILabel[]>) => {
        this.isLoading = false;
        this.labels = res.body ?? [];
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  search(query: string): void {
    this.currentSearch = query;
    this.loadAll();
  }

  ngOnInit(): void {
    this.loadAll();
  }

  trackId(index: number, item: ILabel): number {
    return item.id!;
  }

  delete(label: ILabel): void {
    const modalRef = this.modalService.open(LabelDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.label = label;
    // unsubscribe not needed because closed completes on modal close
    modalRef.closed.subscribe(reason => {
      if (reason === 'deleted') {
        this.loadAll();
      }
    });
  }
}
