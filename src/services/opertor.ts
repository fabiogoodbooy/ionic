import { Injectable } from "@angular/core";

@Injectable()
export class Operator{
    constructor(){

    }
    calculate(operation){
        let form =operation.value;
        let rst;
        switch (form.op){
          case'+':
                  rst =parseInt(form.n1) + parseInt(form.n2);
                  break;
          case'-':
                  rst=form.n1-form.n2;
                  break;
          case'*':
                  rst=form.n1*form.n2;
                  break;
          case'/':
                  rst=form.n1/form.n2;
                  break;
          default:
                  rst='Erreur';
                  
        }
        return rst;
    }
}