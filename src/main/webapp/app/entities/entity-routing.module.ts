import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'bank-account',
        data: { pageTitle: 'jhipsterElasticsearchSampleApplicationApp.bankAccount.home.title' },
        loadChildren: () => import('./bank-account/bank-account.routes'),
      },
      {
        path: 'label',
        data: { pageTitle: 'jhipsterElasticsearchSampleApplicationApp.label.home.title' },
        loadChildren: () => import('./label/label.routes'),
      },
      {
        path: 'operation',
        data: { pageTitle: 'jhipsterElasticsearchSampleApplicationApp.operation.home.title' },
        loadChildren: () => import('./operation/operation.routes'),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
