import { Route } from '@angular/router';
import { guestGuard } from './guest.guard';
import { MainComponent } from './contents/main/main.component';
import { AccommodationComponent } from './contents/accommodation/accommodation.component';

export const routes: Route[] = [
  {
    path: 'home',
    component: AccommodationComponent,
  },
  {
    path: 'wedding',
    component: MainComponent,
    canActivate: [guestGuard],
    children: [
      {
        path: 'accommodation',
        component: AccommodationComponent,
      },
    ],
  },
];
