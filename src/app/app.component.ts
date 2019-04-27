import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})



export class AppComponent  {
 n1;
 n2;
 ope="";
 tudo="";
 resultado;




opeMais(){
    this.ope="+";
}
 opeMenos(){
  
  
    this.ope="-";
  

  }
  opeMult(){
  
    this.ope="*";
  
  }
  opeDiv(){
  
    this.ope= "/";
  
  }




 addUm(){
   if(this.n1==null){
     this.n1=1;
   }
 }
 addDois(){
   if(this.n1==null){
     this.n1=2;
   }
 }
addTres(){
   if(this.n1==null){
     this.n1=3;
   }
 }
addQuatro(){
   if(this.n1==null){
     this.n1=4;
   }
 }
addCinco(){
   if(this.n1==null){
     this.n1=5;
   }
 }
addSeis(){
   if(this.n1==null){
     this.n1=6;
   }
 }
addSete(){
   if(this.n1==null){
     this.n1=7;
   }
 }
addOito(){
   if(this.n1==null){
     this.n1=8;
   }
 }
addNove(){
   if(this.n1==null){
     this.n1=9;
   }
 }
addZero(){
   if(this.n1==null){
     this.n1=0;
   }
 }


Calcular(){
  if(this.ope== "+" ){
      this.resultado= this.n1+this.n2;
      this.tudo=this.resultado;
  }
  if(this.ope== "-" ){
      this.resultado= this.n1-this.n2;
  }
  if(this.ope== "*" ){
      this.resultado= this.n1*this.n2;
  }
  if(this.ope== "/" ){
      this.resultado= this.n1/this.n2;
  }


}


addUm2(){
   if(this.ope!=null){
     this.n2=1;
   }
 }
 addDois2(){
   if(this.ope!=null){
     this.n2=2;
   }
 }
addTres2(){
   if(this.ope!=null){
     this.n2=3;
   }
 }
addQuatro2(){
   if(this.ope!=null){
     this.n2=4;
   }
 }
addCinco2(){
   if(this.ope!=null){
     this.n2=5;
   }
 }
addSeis2(){
   if(this.ope!=null){
     this.n2=6;
   }
 }
addSete2(){
   if(this.ope!=null){
     this.n2=7;
   }
 }
addOito2(){
   if(this.ope!=null){
     this.n2=8;
   }
 }
addNove2(){
   if(this.ope!=null){
     this.n2=9;
   }
 }
addZero2(){
   if(this.ope!=null){
     this.n2=0;
   }
 }













}
