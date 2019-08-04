import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";

@Component({
  selector: "mf-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  @ViewChild("navIndicator", { static: true }) navIndicator: ElementRef<
    HTMLElement
  >;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationStart) {
        switch (val.url) {
          case "/":
            this.navIndicator.nativeElement.style.top = "-6px";
            break;
          case "/schulbildung":
            this.navIndicator.nativeElement.style.top = "calc(33.3% - 6px)";
            break;
          case "/schulpraktika":
            this.navIndicator.nativeElement.style.top = "calc(66.6% - 6px)";
            break;
          case "/interessen":
            this.navIndicator.nativeElement.style.top = "calc(100% - 6px)";
            break;
        }
      }
    });
  }
}
