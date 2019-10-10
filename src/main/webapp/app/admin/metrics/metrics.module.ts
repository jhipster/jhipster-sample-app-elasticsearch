import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhipsterElasticsearchSampleApplicationSharedModule } from 'app/shared/shared.module';

import { JhiMetricsMonitoringComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [JhipsterElasticsearchSampleApplicationSharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [JhiMetricsMonitoringComponent]
})
export class MetricsModule {}
