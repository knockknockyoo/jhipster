import { NgModule } from '@angular/core';
import { AppSharedLibsModule } from './shared-libs.module';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { LoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';
import { NgxEchartsModule } from 'ngx-echarts';
import { ScatterChartComponent } from 'app/common/chart/chart.scatter.component';
@NgModule({
  imports: [AppSharedLibsModule, NgxEchartsModule, ScatterChartComponent],
  declarations: [AlertComponent, AlertErrorComponent, LoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [LoginModalComponent],
  exports: [AppSharedLibsModule, AlertComponent, AlertErrorComponent, LoginModalComponent, HasAnyAuthorityDirective]
})
export class AppSharedModule {}
