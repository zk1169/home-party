import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@src/app/shared';

export const routes: Routes = [
  { path: '', redirectTo: 'sign', pathMatch: 'full'},
  { path: 'sign', loadChildren: '../sign/sign.module#SignModule' },
  { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule', canLoad: [AuthGuard] },
  { path: '**', redirectTo: 'sign', pathMatch: 'full'}
];

//export const AppRoute: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true,preloadingStrategy: PreloadAllModules });
export const AppRoute: ModuleWithProviders = RouterModule.forRoot(
    routes,
    { enableTracing: false } // <-- debugging purposes only
);