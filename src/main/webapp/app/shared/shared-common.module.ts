import { NgModule } from '@angular/core';

import {
  JhipsterElasticsearchSampleApplicationSharedLibsModule,
  FindLanguageFromKeyPipe,
  JhiAlertComponent,
  JhiAlertErrorComponent
} from './';

@NgModule({
  imports: [JhipsterElasticsearchSampleApplicationSharedLibsModule],
  declarations: [FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent],
  providers: [],
  exports: [JhipsterElasticsearchSampleApplicationSharedLibsModule, FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterElasticsearchSampleApplicationSharedCommonModule {}
