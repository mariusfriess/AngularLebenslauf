import { Component } from "@angular/core";
import {
  trigger,
  transition,
  style,
  animate,
  query
} from "@angular/animations";

@Component({
  selector: "mf-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("myAnimation", [
      transition("* => *", [
        query(":enter", [style({ opacity: 0 })], { optional: true }),
        query(
          ":leave",
          [style({ opacity: 1 }), animate("0.3s", style({ opacity: 0 }))],
          { optional: true }
        ),
        query(
          ":enter",
          [style({ opacity: 0 }), animate("0.3s", style({ opacity: 1 }))],
          { optional: true }
        )
      ])
    ])
  ]
})
export class AppComponent {
  title = "AngularLebenslauf";
}
