import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NouisliderModule } from "ng2-nouislider";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";

import { LandingComponent } from "./landing/landing.component";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module,
    ReactiveFormsModule,
  ],
  declarations: [LandingComponent],
})
export class PagesModule {}
