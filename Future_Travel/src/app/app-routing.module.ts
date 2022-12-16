import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test } from './components/test/test.component';

const routes: Routes = [{
  path: 'test',  component: Test
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
