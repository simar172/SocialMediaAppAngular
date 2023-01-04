import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignUpService } from 'src/app/Services/SignUpService/sign-up.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private signupService: SignUpService,
    private snack: MatSnackBar
  ) {}
  src = '';
  img = '';
  userDetails: any = {
    name: '',
    email: '',
    password: '',
    about: '',
    imagename: '',
  };
  ngOnInit(): void {}
  onSubmit() {
    Swal.fire({
      title: 'Are you sure?',

      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No, ',
    }).then((result) => {
      if (result.value) {
        this.signupService.signUp(this.userDetails).subscribe((res: any) => {
          
          this.signupService
            .uploadProfile(this.img, res.id, res.email)
            .subscribe((data) => {
              console.log(data);
            });
          this.snack.open('Account created Successfully!!', 'Ok', {
            duration: 1000,
          });
        }),
          (err: any) => {
            this.snack.open('Error occured', 'Ok', {
              duration: 1000,
            });
            console.log(err);
          };
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }
  handleFile(event: any) {
    if (event.target.files) {
      var filer = new FileReader();
      this.img = event.target.files[0];
      filer.readAsDataURL(event.target.files[0]);
      this.userDetails.imagename = event.target.files[0].name;
      filer.onload = (event: any) => {
        this.src = event.target.result;
      };
    }
  }
}
