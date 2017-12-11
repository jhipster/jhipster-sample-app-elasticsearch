import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhipsterElasticsearchSampleApplicationSharedModule, UserRouteAccessService } from './shared';
import { JhipsterElasticsearchSampleApplicationAppRoutingModule} from './app-routing.module';
import { JhipsterElasticsearchSampleApplicationHomeModule } from './home/home.module';
import { JhipsterElasticsearchSampleApplicationAdminModule } from './admin/admin.module';
import { JhipsterElasticsearchSampleApplicationAccountModule } from './account/account.module';
import { JhipsterElasticsearchSampleApplicationEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterElasticsearchSampleApplicationAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterElasticsearchSampleApplicationSharedModule,
        JhipsterElasticsearchSampleApplicationHomeModule,
        JhipsterElasticsearchSampleApplicationAdminModule,
        JhipsterElasticsearchSampleApplicationAccountModule,
        JhipsterElasticsearchSampleApplicationEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterElasticsearchSampleApplicationAppModule {}
