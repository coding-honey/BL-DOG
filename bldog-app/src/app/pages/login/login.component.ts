import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { EnvironmentService } from '../../environment.service'
import { NULL_INJECTOR } from '@angular/core/src/render3/component';

declare var $: any;

@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;

    redirectTo: string;
    loginForm: FormGroup;


    //폼으로 부터 날라온 데이터
    private user; //userId + userPassword
    private userId : string;
    private userPassword : string;
    private shelterId : string;

    id = new FormControl('',Validators.required);
    password = new FormControl('',Validators.required);
   
    



    // formErrors={
    //     'id':'',
    //     'password':'',
    // }; 
    // formErrorMessages={
    //     'id':{
    //         'required': 'Shelter Id is required!',

    //     },
    //     'password':{
    //         'required': 'Password is required',
    //     },
    // };
   
    

    constructor(private element: ElementRef ,public envService: EnvironmentService, private router: Router, fb:FormBuilder) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;

        this.loginForm = fb.group({
            id:this.id,
            password:this.password
        });


    }

    ngOnInit() {
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        const card = document.getElementsByClassName('card')[0];
        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
    }
    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function() {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
    ngOnDestroy(){
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('login-page');
      body.classList.remove('off-canvas-sidebar');
    }



    //이용자가 작성한 id와 password 받아서
    // 로그인 확인하는 service로 form 넘기고
    // service함수 리턴값 성공하면 environment의 전역변수에 shelterId값 저쟝, 페이지 네비게이트
    // service함수 실패시 에러처리.

    login(form: any){
        // console.log("login 버튼 눌림");
        this.user= {
            'id': this.id.value,
            'password': this.password.value
        };

        console.log("this id : "+this.userId+" password : "+this.password.value);
        
        //폼채로 넘겨 shelterId값을 return 받는다.
        // this.shelterId = this.loginService.checkLogin(this.user)
        // if(this.shelterId == null){
        //     console.log("login error");
        //     //로그인 안됏다고 브라우저에 팝업창 띄우기
        // }else{
        //     this.envService.setShelterId(this.shelterId);
        //     //페이지 dashboard로 넘어가기.
        //     //넘어간 dashboard에서 넘어온 사용자 id를 envService로 받아서 출력해보기
        // }
        
        // return this.loginService.checkLogin(this.user)
        // .toPromise()
        // .then(()=>{
        //     console.log("loginSErvice send the error : ");
        // })
        // .catch((error)=>{
        //     console.log("loginSErvice send the error : "+error);
        // });
        

        // this.loginService.login(this.loginForm.value.id,this.loginForm.value.password)
        // .then(data =>{
        //     this.router.navigate([this.redirectTo?this.redirectTo:'/dashboard'])
        // })
        // .catch(response =>{
        //     console.log("direct error 입니다.");
        //     //pop up 으로 에러 알리기
        // })

        
    }



}
