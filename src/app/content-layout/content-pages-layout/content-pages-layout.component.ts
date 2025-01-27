import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * components
 */
import { HeaderComponent } from "@coreModule/header/header.component";
import { SidebarComponent } from "@coreModule/sidebar/sidebar.component";

@Component({
  selector: 'app-content-pages-layout',
  templateUrl: './content-pages-layout.component.html',
  styleUrl: './content-pages-layout.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    /**
     * directives
     */
    RouterOutlet,
    /**
     * components
     */
    HeaderComponent,
    SidebarComponent
  ],
})
export class ContentPagesLayoutComponent {

}
