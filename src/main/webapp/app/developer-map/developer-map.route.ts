import { Route } from '@angular/router';
import { FrontEndMapComponent } from 'app/developer-map/front-end/front-end.component';

export const DEVELOP_ROAD_MAP_ROUTE: Route = {
  path: '',
  component: FrontEndMapComponent,
  data: {
    authorities: [],
    pageTitle: 'Developer Road-map'
  }
};
