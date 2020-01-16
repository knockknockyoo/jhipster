import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppSharedModule } from 'app/shared/shared.module';
import { FrontEndMapComponent } from 'app/developer-map/front-end/front-end.component';
import { DEVELOP_ROAD_MAP_ROUTE } from 'app/developer-map/developer-map.route';

@NgModule({
  imports: [AppSharedModule, RouterModule.forChild([DEVELOP_ROAD_MAP_ROUTE])],
  declarations: [FrontEndMapComponent]
})
export class DeveloperMapModule {}
