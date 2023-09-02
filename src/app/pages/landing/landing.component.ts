import { Component, OnInit, ViewChild } from "@angular/core";
import * as Rellax from "rellax";
import emailjs from "@emailjs/browser";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {
  @ViewChild("conformationModal") conformationModal: any;
  data: Date = new Date();
  focus;
  focus1;
  emailForm: FormGroup = this.fb.group({
    from_name: ["", [Validators.required, Validators.minLength(4)]],
    to_name: "AmlSmartSolution team",
    from_email: ["", [Validators.required, Validators.email]],
    message: ["", [Validators.required, Validators.minLength(10)]],
  });
  isLoading: boolean = false;
  closeResult: string;

  constructor(private fb: FormBuilder, private modalService: NgbModal) {}

  ngOnInit() {
    let rellaxHeader = new Rellax(".rellax-header");

    let body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");
    let navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.add("navbar-transparent");
  }

  get from_name() {
    return this.emailForm.get("from_name");
  }
  get from_email() {
    return this.emailForm.get("from_email");
  }
  get message() {
    return this.emailForm.get("message");
  }

  async sendEmail() {
    if (this.emailForm.invalid) {
      return;
    } else {
      emailjs.init("lTCy8XCrS0k7xQ-nk");
      this.isLoading = true;
      let response = await emailjs.send("service_hx0ym7s", "template_odq8yl1", {
        from_name: this.emailForm.value.from_name,
        to_name: this.emailForm.value.to_name,
        from_email: this.emailForm.value.from_email,
        message: this.emailForm.value.message,
      });
      this.isLoading = false;
      this.openModal(this.conformationModal);
      this.emailForm.reset();
    }
  }

  openModal(content) {
    this.modalService.open(content).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnDestroy() {
    let body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
    let navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.remove("navbar-transparent");
  }
}
