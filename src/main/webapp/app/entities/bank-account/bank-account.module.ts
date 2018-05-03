import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterElasticsearchSampleApplicationSharedModule } from 'app/shared';
import { JhipsterElasticsearchSampleApplicationAdminModule } from 'app/admin/admin.module';
import {
    BankAccountService,
    BankAccountComponent,
    BankAccountDetailComponent,
    BankAccountUpdateComponent,
    BankAccountDeletePopupComponent,
    BankAccountDeleteDialogComponent,
    bankAccountRoute,
    bankAccountPopupRoute,
    BankAccountResolve
} from './';

const ENTITY_STATES = [...bankAccountRoute, ...bankAccountPopupRoute];

@NgModule({
    imports: [
        JhipsterElasticsearchSampleApplicationSharedModule,
        JhipsterElasticsearchSampleApplicationAdminModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        BankAccountComponent,
        BankAccountDetailComponent,
        BankAccountUpdateComponent,
        BankAccountDeleteDialogComponent,
        BankAccountDeletePopupComponent
    ],
    entryComponents: [BankAccountComponent, BankAccountUpdateComponent, BankAccountDeleteDialogComponent, BankAccountDeletePopupComponent],
    providers: [BankAccountService, BankAccountResolve],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterElasticsearchSampleApplicationBankAccountModule {}
