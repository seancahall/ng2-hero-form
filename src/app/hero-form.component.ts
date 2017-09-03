import { Component } from "@angular/core";
import { Hero } from "./hero";

@Component({
  selector: "hero-form",
  templateUrl: "./hero-form.component.html"
})
export class HeroFormComponent {
  powers = [
    "Really Smart",
    "Great Catcher",
    "Super Flexible",
    "Super Fast",
    "Atomic Bark"
  ];

  model = new Hero(42, "SkyDog", this.powers[2], "Ajax");
  // "My hero is called SkyDog"

  newHero() {
    this.model = new Hero(43, "", "");
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
  // TODO: remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
