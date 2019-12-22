import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ILabel } from 'app/shared/model/label.model';
import { LabelService } from './label.service';
import { LabelDeleteDialogComponent } from './label-delete-dialog.component';

@Component({
  selector: 'jhi-label',
  templateUrl: './label.component.html'
})
export class LabelComponent implements OnInit, OnDestroy {
  labels?: ILabel[];
  eventSubscriber?: Subscription;
  currentSearch: string;

  constructor(
    protected labelService: LabelService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal,
    protected activatedRoute: ActivatedRoute
  ) {
    this.currentSearch =
      this.activatedRoute.snapshot && this.activatedRoute.snapshot.queryParams['search']
        ? this.activatedRoute.snapshot.queryParams['search']
        : '';
  }

  loadAll(): void {
    if (this.currentSearch) {
      this.labelService
        .search({
          query: this.currentSearch
        })
        .subscribe((res: HttpResponse<ILabel[]>) => (this.labels = res.body ? res.body : []));
      return;
    }
    this.labelService.query().subscribe((res: HttpResponse<ILabel[]>) => {
      this.labels = res.body ? res.body : [];
      this.currentSearch = '';
    });
  }

  search(query: string): void {
    this.currentSearch = query;
    this.loadAll();
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInLabels();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: ILabel): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInLabels(): void {
    this.eventSubscriber = this.eventManager.subscribe('labelListModification', () => this.loadAll());
  }

  delete(label: ILabel): void {
    const modalRef = this.modalService.open(LabelDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.label = label;
  }
}
