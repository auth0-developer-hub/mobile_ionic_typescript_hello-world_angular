import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent, HomeComponent, NotFoundComponent, ProfileComponent, ProtectedComponent, PublicComponent } from './features';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'public',
    component: PublicComponent
  },
  {
    path: 'protected',
    component: ProtectedComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}