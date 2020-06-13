import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public href: string = "";
  route: string;
  currentURL='';
  constructor(private router: Router) { 
    this.currentURL = window.location.href; 
    if(this.currentURL.indexOf("#") !== -1){
      var strArray = this.currentURL.split("#");
      this.currentURL = strArray[0];
      
    console.log(this.currentURL);
    }
  }

  ngOnInit(): void {
    this.href = this.router.url;
  }
}

