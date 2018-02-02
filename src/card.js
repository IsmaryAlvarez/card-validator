//Eventos 
const validation = {};


//funciones  
function validInputTarget(event){ 
  let numberCard= document.getElementsByName('cn')[0]; 
  let key= event.keyCode;  
  if(key>=48 && key<=57 || key==8){
    if(cn.value.length>18){
    cn.value= cn.value.substr(0,18);
    }
  } else{
    cn.value= cn.value.substr(0,-1); 
  }  
}; 

function validInputCVV(event){  
  let cvv= document.getElementsByName('cvv')[0];
  let key= event.keyCode; 
  if(key>=48 && key<=57 || key==8){
    if(cvv.value.length>3){
    cvv.value= cvv.value.substr(0,3); 
    }
  }else{
    cvv.value= cvv.value.substr(0,0); 
  }  

};



validation.isValidCard = function(numberCard){
  if (numberCard.length === 0) {
      alert('Ingrese un número');
    } else {
      var arr = [];
      for (var i = 0; i < numberCard.length; i++) {
        arr.push(numberCard[i]);
      } for (var elem = 0; elem < arr.length; elem++) {
        var item = arr.pop();
        arr.splice(elem, 0, item);
        var num = [];
      } for (var x = 0; x < arr.length; x++) {
        num.push(parseInt(arr[x]));
        var pairPosition = [];
        var impairPosition = 0;
        var result;
      // Separar los números en posiciones pares
      } for (var p = 0; p < num.length; p ++) {
        if ([ p + 1] % 2 === 0) {
          pairPosition.push((num[p]) * 2);
        } else if ([p + 1] % 2 !== 0)
          impairPosition += (num[p]);
        var pairPositionLess = 0;
        var pairPositionHigth = [];
      } for (var s = 0; s < pairPosition.length; s++) {
        if (pairPosition[s] < 10) {
          pairPositionLess += (pairPosition[s]);
        } else {
          pairPositionHigth.push(pairPosition[s]);
          var pairString = pairPositionHigth.join('');
          var sum = 0;
          for (var y = 0; y < pairString.length; y++) {
            sum += parseInt(pairString[y]);
          }
        }
      }
    }result = sum + impairPosition + pairPositionLess;
    if (result % 10 === 0) {
      return true;
    } else {
      return false;
    }

}

validation.isValidDate = function(expi){
  let inputDate= document.getElementsByName('exp')[0];
  let date= document.getElementsByName('exp')[0].value;
  let fecha= new Date(); 
  let actualMonth= fecha.getMonth()+1; 
  let actualYear= fecha.getFullYear(); 
  let shortYear= actualYear.toString().substr(2); 
  let slach= date.indexOf("/"); 
  let month= date.substr(0,slach); 
  let year= parseInt(date.substr(slach+1)); 
  if(year < shortYear || year > (parseInt(shortYear) + 10) || month > 12){
    inputDate.classList.remove('success');
    inputDate.classList.add('error');
    document.getElementById('exp').style.borderColor = "red";
  } else if (year >= shortYear && month >= actualMonth){
    inputDate.classList.remove('error'); 
    inputDate.classList.add('success');
    document.getElementById('exp').style.borderColor = "green";
  }
}

validation.isValidCVV = function(cvv){
  if(cvv.length === 3){
    return true;
  } else{
    return false;
  }
}

validation.isValidName = function(nombre){
  if(nombre.length >=2){
     return true;
  } else{
    return false;
  }
}
//validacion completa
validation.isValidForm = function (event){
  let numberCard= document.getElementsByName('cn')[0].value;
  let date= document.getElementsByName('exp')[0].value;
  let cvv=document.getElementsByName('cvv')[0];
  let nombre= document.getElementsByName('name')[0];
  event.preventDefault();  
  validation.isValidCard(numberCard); 
  validation.isValidDate(date);
  validation.isValidCVV(cvv); 
  validation.isValidName(nombre);
  if (document.getElementsByClassName('success').length === 4){
    alert('Tarjeta Válida');
    document.getElementById("myForm").reset();
  } else {
    alert('Revise parámetros, Tarjeta Inválida');
  }
}


module.exports = validation;