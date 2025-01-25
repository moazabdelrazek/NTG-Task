import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: "",
        loadChildren: () => import('./content-layout/content-layout.routes').then(r => r.ContentLayoutRoutes)
    },
    { path: "**", redirectTo: '', pathMatch: 'full' }
];
