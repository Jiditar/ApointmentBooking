import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoadingController,NavController,AlertController,ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})



export class LoginPage implements OnInit {

  customer={
    "0011223344":{"lname":"Abiola","fname":"Babajide","pword":"0987654321","email":"abiolababajide@gmail.com"},
    "0490810399":{"lname":"Tukur","fname":"Anwal","pword":"Tukur.Anwal22","email":"anwal@gmail.com"},
    "0228452015":{"lname":"Olukayode","fname":"Pelumi","pword":"Well@sumtin","email":"abiolababajide@gmail.com"},
    "0048799488":{"lname":"Beckley","fname":"Tony","pword":"freshnigga","email":"tonygee@gmail.com"},
    "0011223345": me
  }
  
 user:any={}
  
  
  constructor(private navctlr:NavController,
  private loadctrl:LoadingController,
  private toastcontr:ToastController) { }

  ngOnInit() {
  }
  
  
  async login(){

    console.log(this.customer["0011223345"].email)
    console.log(typeof("0011223345"));
    
    let loading = await this.loadctrl.create({
      message : "loading..."
    });
    loading.present();
    setTimeout(()=>{
      loading.dismiss();
      // let varr:string=this.user.userid;
      // if (this.user.userid in this.customer && this.customer[varr].password ) {

        
      // } else { 
        
      // }
       if (this.user["userid"]=="0490810399" && this.user["password"]=="1") {
        
        
        this.navctlr.navigateForward("/home");
      //   // console.log(typeof(this.user["userid"]));
      //   // console.log(this.user["userid"]);
      //   // console.log("0011223345")
      //   // console.log(this.customer[`${varr}`].password);


      }
      else{
        this.showtoast();
      }   
    },3000)
  }

  

  async showtoast(){
    let toast = await this.toastcontr.create({
      message: "Incorrect Details",
      duration:2500,
      color:"light",
    });
    toast.present();
    
  }
}

// class nuser{
//   user:any={}
//   constructor(){}
// }

class identity{
  fname:string;
  lname:string;
  email:string;
  accountNo:string;
  password:string;
  phoneNo:string;

  constructor(fname:string,phoneNo:string,lname:string,email:string,accountNo:string,password:string){
    this.fname=fname;
    this.lname=lname;
    this.email=email;
    this.accountNo=accountNo;
    this.password=password;
    this.phoneNo=phoneNo;

  }



}
let me =new identity("Babajide","0815533421","Abiola","abiolababajide98@gmail.com","66","123456787")