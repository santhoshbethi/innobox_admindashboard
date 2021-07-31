import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  public userName;
  constructor(
      private router: Router
  ) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: [ 'class' ]
    });
  }
  ngOnInit(){
    this.userName = sessionStorage.getItem("UserId");
    console.log(this.userName);
    if(sessionStorage.getItem("UserId") == undefined)
    {    
      this.logout();
    }
    else
    this.router.navigate(["home"]);
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }

  logout()
  {
    sessionStorage.removeItem('UserId');
    sessionStorage.removeItem('token');
    this.userName = sessionStorage.getItem("UserId");
  
    this.router.navigate(['']);
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
