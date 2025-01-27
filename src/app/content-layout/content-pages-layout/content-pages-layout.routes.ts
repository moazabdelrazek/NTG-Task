import { Routes } from '@angular/router';

/**
 * resolvers
 */
import { trackPathResolver } from '@app/core/resolves/track-path.resolver';
import { serviceByIdResolver } from '@app/modules/system/service-management/resolvers/service-by-id.resolver';

/**
 * components
 */
import { ContentPagesLayoutComponent } from './content-pages-layout.component';

export const ContentPagesLayoutRoutes: Routes = [
    { path: '', redirectTo: 'task-details', pathMatch: 'full' },
    {
        path: '', component: ContentPagesLayoutComponent,
        canActivateChild: [trackPathResolver],
        children: [
            { 
                path: 'task-details',
                title: "Task Details",
                data: {
                    path: ["Task Management", "Task Details"]
                },
                loadComponent: () => import("@app/modules/system/task-details/task-details.component")
                .then(c => c.TaskDetailsComponent)
            },
            { 
                path: 'service-management',
                title: "Service List",
                data: {
                    path: ["service management", "Service List"]
                },
                loadComponent: () => import("@app/modules/system/service-management/service-management.component")
                .then(c => c.ServiceManagementComponent)
            },
            { 
                path: 'service-management/:id',
                title: "View Service Details",
                data: {
                    path: ["service management", "Service List", "View Service Details"]
                },
                resolve: {
                    service: serviceByIdResolver
                },
                loadComponent: () => import("@app/modules/system/service-management/components/service-details/service-details.component")
                .then(c => c.ServiceDetailsComponent)
            },            
            { 
                path: 'invoice-management',
                title: "Invoice Management",
                data: {
                    path: ["Invoice Management", "Under Construction"]
                },
                loadComponent: () => import("@app/modules/system/invoice-management/invoice-management.component")
                .then(c => c.InvoiceManagementComponent)
            }            
        ]
    }
]