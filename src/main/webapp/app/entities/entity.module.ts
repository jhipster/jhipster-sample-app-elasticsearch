import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'bank-account',
                loadChildren: './bank-account/bank-account.module#JhipsterElasticsearchSampleApplicationBankAccountModule'
            },
            {
                path: 'label',
                loadChildren: './label/label.module#JhipsterElasticsearchSampleApplicationLabelModule'
            },
            {
                path: 'operation',
                loadChildren: './operation/operation.module#JhipsterElasticsearchSampleApplicationOperationModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterElasticsearchSampleApplicationEntityModule {}
