// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-front-header',
//   templateUrl: './front-header.component.html',
//   styleUrls: ['./front-header.component.scss']
// })
// export class FrontHeaderComponent {

// }


import { ConfigService } from '../config/config.service';
import { DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  ElementRef,
  OnInit,
  Renderer2,
  AfterViewInit,
} from '@angular/core';
//import { AuthService } from 'src/app/core/service/auth.service';
import { Router } from '@angular/router';
//import { RightSidebarService } from 'src/app/core/service/rightsidebar.service';
//import { Role } from 'src/app/core/models/role';
//import { LanguageService } from 'src/app/core/service/language.service';
//import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
//const document: any = window.document;

@Component({
  selector: 'app-front-header',
  templateUrl: './front-header.component.html',
  styleUrls: ['./front-header.component.scss']
})
export class FrontHeaderComponent
  implements OnInit, AfterViewInit
{
  public config: any = {};
  userImg: string;
  homePage: string;
  isNavbarCollapsed = true;
  flagvalue;
  countryName;
  langStoreValue: string;
  defaultFlag: string;
  isOpenSidebar: boolean;
  userFullName: string;

  constructor(
    //@Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public elementRef: ElementRef,
    //private rightSidebarService: RightSidebarService,
    private configService: ConfigService,
    //private authService: AuthService,
    private router: Router,
    //public languageService: LanguageService
  ) {
    //super();
  }
  listLang = [
    { text: 'English', flag: 'assets/images/flags/us.svg', lang: 'en' },
    { text: 'Spanish', flag: 'assets/images/flags/spain.svg', lang: 'es' },
    { text: 'German', flag: 'assets/images/flags/germany.svg', lang: 'de' },
  ];
  notifications: any[] = [
    {
      message: 'Please check your mail',
      time: '14 mins ago',
      icon: 'mail',
      color: 'nfc-green',
      status: 'msg-unread',
    },
    {
      message: 'New Patient Added..',
      time: '22 mins ago',
      icon: 'person_add',
      color: 'nfc-blue',
      status: 'msg-read',
    },
    {
      message: 'Your leave is approved!! ',
      time: '3 hours ago',
      icon: 'event_available',
      color: 'nfc-orange',
      status: 'msg-read',
    },
    {
      message: 'Lets break for lunch...',
      time: '5 hours ago',
      icon: 'lunch_dining',
      color: 'nfc-blue',
      status: 'msg-read',
    },
    {
      message: 'Patient report generated',
      time: '14 mins ago',
      icon: 'description',
      color: 'nfc-green',
      status: 'msg-read',
    },
    {
      message: 'Please check your mail',
      time: '22 mins ago',
      icon: 'mail',
      color: 'nfc-red',
      status: 'msg-read',
    },
    {
      message: 'Salary credited...',
      time: '3 hours ago',
      icon: 'paid',
      color: 'nfc-purple',
      status: 'msg-read',
    },
  ];
  ngOnInit() {
    this.config = this.configService.configData;
    // this.userFullName = this.authService.currentUserValue.firstName +' ' +this.authService.currentUserValue.lastName;
    // const userRole = this.authService.currentUserValue.role;
    // this.userImg = this.authService.currentUserValue.img;

    // if (userRole === Role.Admin) {
    //   this.homePage = 'admin/dashboard/main';
    // } else if (userRole === Role.Teacher) {
    //   this.homePage = 'teacher/dashboard';
    // } else if (userRole === Role.Student) {
    //   this.homePage = 'student/dashboard';
    // } else {
    //   this.homePage = 'admin/dashboard/main';
    // }

    // this.langStoreValue = localStorage.getItem('lang');
    // const val = this.listLang.filter((x) => x.lang === this.langStoreValue);
    // this.countryName = val.map((element) => element.text);
    // if (val.length === 0) {
    //   if (this.flagvalue === undefined) {
    //     this.defaultFlag = 'assets/images/flags/us.svg';
    //   }
    // } else {
    //   this.flagvalue = val.map((element) => element.flag);
    // }
  }
  ngAfterViewInit() {
    // set theme on startup
    // if (localStorage.getItem('theme')) {
    //   this.renderer.removeClass(this.document.body, this.config.layout.variant);
    //   this.renderer.addClass(this.document.body, 'light');
    // } else {
    //   this.renderer.addClass(this.document.body, this.config.layout.variant);
    // }

    //if (localStorage.getItem('menuOption')) {
    //  this.renderer.addClass(
        //this.document.body,'menu_light');
    // } else {
    //   this.renderer.addClass(
    //     this.document.body,
    //     'menu_' + this.config.layout.sidebar.backgroundColor
    //   );
    // }

   // if (localStorage.getItem('choose_logoheader')) {
      //this.renderer.addClass(this.document.body,'logo-white');
    // } else {
    //   this.renderer.addClass(
    //     this.document.body,
    //     'logo-' + this.config.layout.logo_bg_color
    //   );
    // }

    // if (localStorage.getItem('sidebar_status')) {
    //   if (localStorage.getItem('sidebar_status') === 'close') {
    //     this.renderer.addClass(this.document.body, 'side-closed');
    //     this.renderer.addClass(this.document.body, 'submenu-closed');
    //   } else {
    //     this.renderer.removeClass(this.document.body, 'side-closed');
    //     this.renderer.removeClass(this.document.body, 'submenu-closed');
    //   }
    // } else {
    //   if (this.config.layout.sidebar.collapsed === true) {
    //     this.renderer.addClass(this.document.body, 'side-closed');
    //     this.renderer.addClass(this.document.body, 'submenu-closed');
    //   }
    // }
  }
  // callFullscreen() {
  //   if (
  //     !document.fullscreenElement &&
  //     !document.mozFullScreenElement &&
  //     !document.webkitFullscreenElement &&
  //     !document.msFullscreenElement
  //   ) {
  //     if (document.documentElement.requestFullscreen) {
  //       document.documentElement.requestFullscreen();
  //     } else if (document.documentElement.msRequestFullscreen) {
  //       document.documentElement.msRequestFullscreen();
  //     } else if (document.documentElement.mozRequestFullScreen) {
  //       document.documentElement.mozRequestFullScreen();
  //     } else if (document.documentElement.webkitRequestFullscreen) {
  //       document.documentElement.webkitRequestFullscreen();
  //     }
  //   } else {
  //     if (document.exitFullscreen) {
  //       document.exitFullscreen();
  //     } else if (document.msExitFullscreen) {
  //       document.msExitFullscreen();
  //     } else if (document.mozCancelFullScreen) {
  //       document.mozCancelFullScreen();
  //     } else if (document.webkitExitFullscreen) {
  //       document.webkitExitFullscreen();
  //     }
  //   }
  // }
  setLanguage(text: string, lang: string, flag: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.langStoreValue = lang;
    //this.languageService.setLanguage(lang);
  }
  mobileMenuSidebarOpen(event: any, className: string) {
    // const hasClass = event.target.classList.contains(className);
    // if (hasClass) {
    //   this.renderer.removeClass(this.document.body, className);
    // } else {
    //   this.renderer.addClass(this.document.body, className);
    // }
  }
  callSidemenuCollapse() {
    // const hasClass = this.document.body.classList.contains('side-closed');
    // if (hasClass) {
    //   this.renderer.removeClass(this.document.body, 'side-closed');
    //   this.renderer.removeClass(this.document.body, 'submenu-closed');
    // } else {
    //   this.renderer.addClass(this.document.body, 'side-closed');
    //   this.renderer.addClass(this.document.body, 'submenu-closed');
    // }
  }
  logout() {
    //this.authService.logout();
  }
}
