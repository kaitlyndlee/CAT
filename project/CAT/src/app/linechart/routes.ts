import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinechartComponent } from './linechart.component';

const appRoutes: Routes = [

  // Default Page
  { path: '', redirectTo:'Bar',pathMatch:'full' },
  { path: 'Line', component: LinechartComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
