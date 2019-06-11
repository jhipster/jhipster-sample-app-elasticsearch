import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JhipsterElasticsearchSampleApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JhipsterElasticsearchSampleApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipsterElasticsearchSampleApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterElasticsearchSampleApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterElasticsearchSampleApplicationSharedModule
    };
  }
}
