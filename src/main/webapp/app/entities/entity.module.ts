import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterElasticsearchSampleApplicationBankAccountModule } from './bank-account/bank-account.module';
import { JhipsterElasticsearchSampleApplicationLabelModule } from './label/label.module';
import { JhipsterElasticsearchSampleApplicationOperationModule } from './operation/operation.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
  // prettier-ignore
  imports: [
        JhipsterElasticsearchSampleApplicationBankAccountModule,
        JhipsterElasticsearchSampleApplicationLabelModule,
        JhipsterElasticsearchSampleApplicationOperationModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterElasticsearchSampleApplicationEntityModule {}
