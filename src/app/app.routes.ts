import { Route } from '@angular/router';
import { guestGuard } from './guest.guard';
import { MainComponent } from './contents/main/main.component';
import { TwoComponent } from './contents/two/two.component';
import { OneComponent } from './contents/one/one.component';

export const routes: Route[] = [
  {
    path: 'one',
    component: OneComponent,
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [guestGuard],
    children: [
      {
        path: 'two',
        component: TwoComponent,
      },
    ],
  },
];
