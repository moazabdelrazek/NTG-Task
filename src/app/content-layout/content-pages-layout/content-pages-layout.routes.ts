import { Routes } from '@angular/router';

/**
 * resolvers
 */
import { serviceByIdResolver } from '@app/modules/system/service-management/resolvers/service-by-id.resolver';

/**
 * components
 */
import { ContentPagesLayoutComponent } from './content-pages-layout.component';

export const ContentPagesLayoutRoutes: Routes = [
    { path: '', redirectTo: 'task-details', pathMatch: 'full' },
    {
        path: '', component: ContentPagesLayoutComponent, children: [
            { 
                path: 'task-details',
                title: "Task Details",
                loadComponent: () => import("@app/modules/system/task-details/task-details.component")
                .then(c => c.TaskDetailsComponent)
            },
            { 
                path: 'service-management',
                title: "Service management",
                loadComponent: () => import("@app/modules/system/service-management/service-management.component")
                .then(c => c.ServiceManagementComponent)
            },
            { 
                path: 'service-management/:id',
                resolve: {
                    service: serviceByIdResolver
                },
                loadComponent: () => import("@app/modules/system/service-management/components/service-details/service-details.component")
                .then(c => c.ServiceDetailsComponent)
            },            
            { 
                path: 'invoice-management',
                title: "Invoice Management",
                loadComponent: () => import("@app/modules/system/invoice-management/invoice-management.component")
                .then(c => c.InvoiceManagementComponent)
            }            
        ]
    }
]