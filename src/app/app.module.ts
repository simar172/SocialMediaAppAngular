import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { Routes } from '@angular/router';
import { AllPostComponent } from './Pages/all-post/all-post.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './LoginSignUp/login/login.component';
import { SignupComponent } from './LoginSignUp/signup/signup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import {
  AuthInterceptor,
  authInterceptorProvider,
} from './Services/LoginService/AuthInterceptor/Intereceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddPostComponent } from './Pages/add-post/add-post.component';
import { UserGuardGuard } from './Guards/UserGuard/user-guard.guard';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { ParticularpostComponent } from './Pages/particularpost/particularpost.component';
import { DefInterceptorProvider } from './Services/LoginService/AuthInterceptor/DefaultIntercept';
import { UserPostComponent } from './Pages/UserPost/user-post/user-post.component';
import { UpdatePostComponent } from './Pages/update-post/update-post.component';
import { UserProfileComponent } from './Pages/user-profile/user-profile.component';
import {
  NgxUiLoaderConfig,
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
} from 'ngx-ui-loader';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ForgotPassComponent } from './Pages/forgot-pass/forgot-pass.component';
import { EnterOTPComponent } from './Pages/enter-otp/enter-otp.component';
import { SendOTPComponent } from './Pages/send-otp/send-otp.component';
import { PasswordChangeComponent } from './Pages/password-change/password-change.component';
import { ChangePassGuardGuard } from './Guards/PasswordGuard/change-pass-guard.guard';
import { CategorywisePostComponent } from './Pages/categorywise-post/categorywise-post.component';
const routes: Routes = [
  {
    path: '',
    component: AllPostComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'full/:pid',
    component: ParticularpostComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'user',
    component: AddPostComponent,
    canActivate: [UserGuardGuard],
  },
  {
    path: 'user/home/:uid',
    component: UserPostComponent,
  },
  {
    path: 'update/:pid',
    component: UpdatePostComponent,
  },
  {
    path: 'user/profile/:uid',
    component: UserProfileComponent,
  },
  {
    path: 'forgot',
    component: ForgotPassComponent,
    children: [
      {
        path: 'sendOTP',
        component: SendOTPComponent,
      },
      {
        path: 'enterOTP',
        component: EnterOTPComponent,
        canActivate: [ChangePassGuardGuard],
      },
      {
        path: 'setPass',
        component: PasswordChangeComponent,
      },
    ],
  },
  {
    path: 'category/:cid',
    component: CategorywisePostComponent,
  },
];
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
};
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllPostComponent,
    CategoriesComponent,
    LoginComponent,
    SignupComponent,
    AddPostComponent,
    ParticularpostComponent,
    UserPostComponent,
    UpdatePostComponent,
    UserProfileComponent,
    ForgotPassComponent,
    EnterOTPComponent,
    SendOTPComponent,
    PasswordChangeComponent,
    CategorywisePostComponent,
  ],
  imports: [
    MatTooltipModule,
    MatTreeModule,
    MatSidenavModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
      exclude: ['http://localhost:8080/like/', 'http://localhost:8080/'],
    }),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    MatListModule,
    MatChipsModule,
    EditorModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
  ],
  providers: [authInterceptorProvider, DefInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
