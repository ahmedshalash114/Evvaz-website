import { SchoolService } from './../../services/school.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserIdleService } from '../../../../../node_modules/angular-user-idle';
import { ProfileServiceDashboard } from '../../services/profile.service.dashboard';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  user = {
    "user_email": "",
    "user_password": "",
    "login_role": "school"
  }

  constructor(private router: Router, private authService: AuthService,private schoolService:SchoolService,private profileService: ProfileServiceDashboard) {window.scrollTo(0, 0); }

  loginId:number;
  currentUser;
  schoolProfile;
  companyProfile;

  ngOnInit() {

    



    this.currentUser = localStorage.getItem("@MYUSER");
    let userData = JSON.parse(this.currentUser);
    this.loginId = userData['login_id'];
    // if (this.currentUser) {
    //   this.router.navigate(['/home-page']);
    // }
  }



  DoLogin(): void {
    this.authService.signIn(this.user).subscribe(
      data => {

        if(data['state'] === 201 ){
            
        this.authService.setUser(data);
        console.log(data);
        if(this.user.login_role ==="company"){

          this.profileService.getProfile(data['login_id']).subscribe(
            (response) => { 
              this.companyProfile = response;
              if(this.companyProfile){
                this.router.navigate(['/home-page'])
              }else {
                this.router.navigate(['/company','profile'])
              }
              console.log("company profile");
              console.log(this.companyProfile)
            },err => {
              this.router.navigate(['/company','profile'])
              console.log(err)
              // this.router.navigate(['/company','profile' ]);
            }
          )

       

        

        }else if (this.user.login_role === "school"){
          // this.router.navigate(['/school','profile' ]);

          this.schoolService.getProfile(data['login_id']).subscribe(
            (response) => { 
              
              console.log(response);
              this.schoolProfile = response;
             
              if(this.schoolProfile){
                this.router.navigate(['/home-page'])
              }else {
                this.router.navigate(['/school','profile'])
              }
             },err => {
               console.log("Error");
               this.router.navigate(['/school','profile'])
             console.log(err);
             }
          )

          
        }else if (this.user.login_role === "admin"){
          this.router.navigate(['/admin'])
        }
        }
        else {
          console.log("Error");
          this.router.navigate(['/login']);

        }
       }
       //, error => {
      //   console.log(error);
      // }
    );
  }






  

  
}
