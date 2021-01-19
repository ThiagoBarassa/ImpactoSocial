import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ForumComponent } from './forum/forum.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {path:'',redirectTo: 'corpo', pathMatch: 'full'},

  {path:'corpo', component:BodyComponent},
  {path:'midia',component:VideoComponent},
  {path:'forum',component:ForumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
