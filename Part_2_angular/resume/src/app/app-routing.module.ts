import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { InterestsComponent } from './interests/interests.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:"index", component:IndexComponent},
  {path:"", component:IndexComponent},
  {path:"projects", component:ProjectsComponent},
  {path:"interests", component:InterestsComponent},
  {path:"education", component:EducationComponent},
  {path:"experience", component:ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
