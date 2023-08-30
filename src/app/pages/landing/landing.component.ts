import { Component, OnInit } from "@angular/core";
import * as Rellax from "rellax";
import emailjs from "@emailjs/browser";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {
  data: Date = new Date();
  focus;
  focus1;
  emailForm: FormGroup = this.fb.group({
    from_name: "",
    to_name: "AmlSmartSolution team",
    from_email: "",
    message: "",
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    var rellaxHeader = new Rellax(".rellax-header");

    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.add("navbar-transparent");
  }

  async sendEmail() {
    emailjs.init("lTCy8XCrS0k7xQ-nk");
    let response = await emailjs.send("service_hx0ym7s", "template_odq8yl1", {
      from_name: this.emailForm.value.from_name,
      to_name: this.emailForm.value.to_name,
      from_email: this.emailForm.value.from_email,
      message: this.emailForm.value.message,
    });

    alert("Messae has been sent!");
    this.emailForm.reset();
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.remove("navbar-transparent");
  }
}
