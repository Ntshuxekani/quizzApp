import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

   //politics
   politicsA1="Ajay, Atul and Rajesh";
   politicsQ1:string;
   politicsPointQ1=0;
   politicsA2="John Moodey";
   politicsQ2:string;
   politicsPointQ2=0;
   politicsA3="Ernest Mboweni";
   politicsQ3:string;
   politicsPointQ3=0;
   politicsA4="30";
   politicsQ4:string;
   politicsPointQ4=0;
   politicsA5="Samora Machel";
   politicsQ5:string;
   politicsPointQ5=0;


   totalPoliticsPoints=0;

   checkPoliticQ1():void{
     if(this.politicsQ1===this.politicsA1){
       this.politicsPointQ1=5;
     }
   }
   checkPoliticQ2():void{
    if(this.politicsQ2===this.politicsA2){
      this.politicsPointQ2=5;
    }
  }
  checkPoliticQ3():void{
    if(this.politicsQ3===this.politicsA3){
      this.politicsPointQ3=5;
    }
  }
  checkPoliticQ4():void{
    if(this.politicsQ4===this.politicsA4){
      this.politicsPointQ4=5;
    }
  } checkPoliticQ5():void{
    if(this.politicsQ5===this.politicsA5){
      this.politicsPointQ5=5;
    }
  }

   checkTotalPoliticsPoints():void{
    this.checkPoliticQ1();
    this.checkPoliticQ2();
    this.checkPoliticQ3();
    this.checkPoliticQ4();
    this.checkPoliticQ5();
    this.totalPoliticsPoints=this.politicsPointQ1+this.politicsPointQ2+this.politicsPointQ3+this.politicsPointQ4+this.politicsPointQ5;

    this.politicsResults()
   }

 //technology
 technologyA1="John Blankenbaker";
 technologyQ1:string;
 technologyPointQ1=0;
 technologyA2="1971";
 technologyQ2:string;
 technologyPointQ2=0;
 technologyA3="1968";
 technologyQ3:string;
 technologyPointQ3=0;
 technologyA4="neon and xenon";
 technologyQ4:string;
 technologyPointQ4=0;
 technologyA5="1989";
 technologyQ5:string;
 technologyPointQ5=0;


 totalTechnologyPoints=0;

 checkTechnologyQ1():void{
   if(this.technologyQ1===this.technologyA1){
     this.technologyPointQ1=5;
   }
 }
 checkTechnologyQ2():void{
  if(this.technologyQ2===this.technologyA2){
    this.technologyPointQ2=5;
  }
}
checkTechnologyQ3():void{
  if(this.technologyQ3===this.technologyA3){
    this.technologyPointQ3=5;
  }
}
checkTechnologyQ4():void{
  if(this.technologyQ4===this.technologyA4){
    this.technologyPointQ4=5;
  }
} checkTechnologyQ5():void{
  if(this.technologyQ5===this.technologyA5){
    this.technologyPointQ5=5;
  }
}

 checkTotalTechnologyPoints():void{
  this.checkTechnologyQ1();
  this.checkTechnologyQ2();
  this.checkTechnologyQ3();
  this.checkTechnologyQ4();
  this.checkTechnologyQ5();
  this.totalTechnologyPoints=this.technologyPointQ1+this.technologyPointQ2+this.technologyPointQ3+this.technologyPointQ4+this.technologyPointQ5;

  this.technologyResults() 
 }

  //sports
 sportsA1="His hair";
 sportsQ1:string;
 sportsPointQ1=0;
 sportsA2="Collins Mbesuma";
 sportsQ2:string;
 sportsPointQ2=0;
 sportsA3="2010";
 sportsQ3:string;
 sportsPointQ3=0;
 sportsA4="Oscarine Masuluke";
 sportsQ4:string;
 sportsPointQ4=0;
 sportsA5="Itumeleng Khune";
 sportsQ5:string;
 sportsPointQ5=0;


 totalSportsPoints=0;

 checkSportsQ1():void{
   if(this.sportsQ1===this.sportsA1){
     this.sportsPointQ1=5;
   }
 }
 checkSportsQ2():void{
  if(this.sportsQ2===this.sportsA2){
    this.sportsPointQ2=5;
  }
}
checkSportsQ3():void{
  if(this.sportsQ3===this. sportsA3){
    this.sportsPointQ3=5;
  }
}
checkSportsQ4():void{
  if(this.sportsQ4===this.sportsA4){
    this.sportsPointQ4=5;
  }
} 
checkSportsQ5():void{
  if(this.sportsQ5===this.sportsA5){
    this.sportsPointQ5=5;
  }
}

 checkTotalSportsPoints():void{
  this.checkSportsQ1();
  this.checkSportsQ2();
  this.checkSportsQ3();
  this.checkSportsQ4();
  this.checkSportsQ5();
  this.totalSportsPoints=this.sportsPointQ1+this.sportsPointQ2+this.sportsPointQ3+this.sportsPointQ4+this.sportsPointQ5;

  this.sportsResults()
 }


  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  showBrothers() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Gupter brothers');

    alert.addInput({
      type: 'radio',
      label: 'Ngalava, Ntsetselelo and Njabulo',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Ajay, Atul and Rajesh',
      value:'Ajay, Atul and Rajesh',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Jacob, Julius and Mmusi',
      checked: false
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler:data=>{
      this.politicsQ1=data;
      }
      });
    alert.present();
  }
  showDA() {
    let alert = this.alertCtrl.create();
    alert.setTitle('DA Leader');

    alert.addInput({
      type: 'radio',
      label: 'Shalom Mashele',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Njabulo Zitha',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'John Moodey ',
      value:"John Moodey",
      checked: false
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler:data=>{
        this.politicsQ2=data;
        }
      });
alert.present();
  }
   showANC() {
    let alert = this.alertCtrl.create();
    alert.setTitle('ANC Leader GY');

    alert.addInput({
      type: 'radio',
      label: 'Ernest Mboweni',
      value:'Ernest Mboweni',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Reckson Zitha',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Tinyiko Ndhove ',
      checked: false
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler:data=>{
        this.politicsQ3=data;
        }
    });

  alert.present();
  }

  showZimbabwe() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Robert Mugambe in power');

    alert.addInput({
      type: 'radio',
      label: '10',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '5',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '30 ',
      value:'30',
      checked: false
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler:data=>{
        this.politicsQ4=data;
        }
    });

  alert.present();
  }
  showMozambique() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Mozambique first President');

    alert.addInput({
      type: 'radio',
      label: 'Filipe Nyusi',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Samora Machel',
      value:'Samora Machel',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Barrack Obama',
      checked: false
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler:data=>{
        this.politicsQ5=data;
        }
    });

  alert.present();
  }

  createdFirstComputer() {
    let alert = this.alertCtrl.create();
    alert.setTitle('first small computer');

    alert.addInput({
      type: 'radio',
      label: 'John Blankenbaker',
      value: 'John Blankenbaker',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Steve Wozniak',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Chuck Peddle',
      checked: false
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler:data=>{
        this.technologyQ1=data;
        }
      
    });
    alert.present();
  }
  firstEmailSent() {
    let alert = this.alertCtrl.create();
    alert.setTitle('first Email Sent over Internet');

    alert.addInput({
      type: 'radio',
      label: '1961',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '1965',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '1971',
      value:'1971',
      checked: false
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
     handler:data=>{
     this.technologyQ2=data;
        }
    });
    alert.present();
  }
  internetCreated() {
    let alert = this.alertCtrl.create();
    alert.setTitle('when was internet created');

    alert.addInput({
      type: 'radio',
      label: '1972',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '1968',
      value:'1968',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '1971',
      checked: false
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler:data=>{
        this.technologyQ3=data;
        }
      
    });
    alert.present();
  }
  showPlasma() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Plasma gases');

    alert.addInput({
      type: 'radio',
      label: 'neon and xenon',
      value:'neon and xenon',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'neon and hydrogen',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'xenon and hydrogen',
      checked: false
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      
      handler:data=>{
        this.technologyQ4=data;
        }
      
    });
    alert.present();
  }
  showWww() {
    let alert = this.alertCtrl.create();
    alert.setTitle(' World Wide Web');

    alert.addInput({
      type: 'radio',
      label: '1972',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '1992',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: ' 1989 ',
      value:'1989',
      checked: false
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler:data=>{
        this.technologyQ5=data;
        }
      
      
    });
    alert.present();
  }
  Gyan() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Gyans celebrations');

    alert.addInput({
      type: 'radio',
      label: 'His boots',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'His hair',
      value: 'His hair',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'His tattoos',
      checked: false
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler:data=>{
        this.sportsQ1=data;
        }
    });
    alert.present();
  }
  PSL(){
    let alert = this.alertCtrl.create();
    alert.setTitle("PSL top goal Scorer");

    alert.addInput({
      type: 'radio',
      label: 'Chris Katongo ',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Sandile Ndlovu',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Collins Mbesuma',
      value:'Collins Mbesuma',
      checked: false
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler:data=>{
        this.sportsQ2=data;
        }
      });
    alert.present();
  }
  BafanaBafana(){
    let alert = this.alertCtrl.create();
    alert.setTitle("Bafana Bafana world cup");

    alert.addInput({
      type: 'radio',
      label: '1998 ',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '2010',
      value:'2010',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: '2002',
      checked: false
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler:data=>{
        this.sportsQ3=data;
        }
      
    });
    alert.present();
  }

  Puskas(){
    let alert = this.alertCtrl.create();
    alert.setTitle("South African goalkeeper");

    alert.addInput({
      type: 'radio',
      label: 'Oscarine Masuluke ',
      value:'Oscarine Masuluke',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Brilliant Khuzwayo',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Moneb Joseph',
      checked: false
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler:data=>{
        this.sportsQ4=data;
        }
    });
  
    alert.present();
  }
  number1GoalKeeper() {
    let alert = this.alertCtrl.create();
    alert.setTitle("Mzansi's number one");

    alert.addInput({
      type: 'radio',
      label: 'Oscarine Masuluke ',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Itumeleng Khune',
      value:'Itumeleng Khune',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Moneb Joseph',
      checked: false
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      
      handler:data=>{
        this.sportsQ5=data;
        }
    });
    alert.present();
  
  }

  politicsResults() {
  let alert = this.alertCtrl.create({
    title: 'Politics Answers',
    subTitle: 'A1=Ajay, Atul and Rajesh, A2=John Moodey, A3=Ernest Mboweni, A4=30, A5=Samora Machel',
    buttons: ['Dismiss']
  });
  alert.present();
}
technologyResults() {
  let alert = this.alertCtrl.create({
    title: 'Technology Answers',
    subTitle: 'A1=John Blankenbaker, A2=1971, A3=1968, A4=neon and xenon, A5=1989',
    buttons: ['Dismiss']
  });
  alert.present();
}
sportsResults() {
  let alert = this.alertCtrl.create({
    title: 'Sports Answers',
    subTitle: 'A1=His hair, A2=Collins Mbesuma, A3=2010, A4=Oscarine Masuluke, A5=Itumeleng Khune',
    buttons: ['Dismiss']
  });
  alert.present();
}


}

