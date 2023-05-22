import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserWizardStepOneComponent } from './create-user-wizard-step-one/create-user-wizard-step-one.component';

const routes: Routes = [
  {path: '', redirectTo: 'user-list', pathMatch:'full'},
  {path: 'user-list', component: UserListComponent},
  {path: 'user-form', component: CreateUserWizardStepOneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
