import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeComplexityComponent } from './time-complexity/time-complexity.component';

const routes: Routes = [
  /*  { path: 'blog', component: TimeComplexityComponent },
  { path: '**', redirectTo: '/blog', pathMatch: 'full' }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
