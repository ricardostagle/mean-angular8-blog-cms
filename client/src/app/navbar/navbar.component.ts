import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;
  pagesflag = 0;
  currentURL='';
  hostname='';
  epos=0;
    
  constructor(private router: Router) { 
    var url = window.location.href;
    var arr = url.split("/");
    this.hostname = arr[0] + "//" + arr[2]; 
    this.currentURL = window.location.href; 
    if(this.currentURL.indexOf("/home") !== -1 
        || this.currentURL.indexOf("/es-es") !== -1
        || this.hostname == this.currentURL){
          this.hostname = this.currentURL;
    }
  }

  ngOnInit() {

  }

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){

      this.pagesflag = 0;
      this.currentURL = window.location.href; 

      if(this.currentURL.indexOf("/home") !== -1 
        || this.currentURL.indexOf("/es-es") !== -1){
          this.pagesflag = 1;
      }

      const windowScroll = window.pageYOffset;
      let element = document.querySelector('.navbar');

      if(this.pagesflag == 1){
        this.epos = (this.pagesflag) ? this.elementPosition + 70 : this.elementPosition;
        if (element instanceof HTMLElement) {
          if(windowScroll >= this.epos){
            this.sticky = true;
            element.style.marginTop = "0";
          } else {
            this.sticky = false;
            element.style.marginTop = "-62px";
          }
        } else {
          throw new Error("element #test not in document")
        }
      }else{
        this.sticky = false;
      }
    }

    onWindowScroll(e) {
 
    }

}