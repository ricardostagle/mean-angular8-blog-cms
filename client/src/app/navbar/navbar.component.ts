import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;

  constructor( ) {

  }

  ngOnInit() {

  }

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      let element = document.querySelector('.navbar');
      element.style.display = "none";
      if(windowScroll >= (this.elementPosition + 150)){
        this.sticky = true;
        /*element.style.display = "flex";*/
      } else {
        this.sticky = false;
        
      }
    }

    onWindowScroll(e) {
 
    }

}