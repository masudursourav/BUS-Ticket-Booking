document.getElementById("firstClassPlus").addEventListener("click",function() {
    updateValuePlus("firstClass",150);
});
document.getElementById("economyClassPlus").addEventListener("click",function() {
    updateValuePlus("economyClass",100);
});

document.getElementById("firstClassMinus").addEventListener("click",function() {
    updateValueMinus("firstClass",150);
});
document.getElementById("economyClassMinus").addEventListener("click",function() {
    updateValueMinus("economyClass",100);
});

function updateValueMinus(id,amount) {
    let value = document.getElementById(id).value; 
   if(value === ""){
       value = -1;
   }
   else{
       --value;
   }
   if(value<0){
       alert("Number of ticket can not be negative");
       value = 0;
       document.getElementById(id).value = value;
   }
   else{
    document.getElementById(id).value = value;
   updateAmount(-1*amount);

}
}   

function updateValuePlus(id,amount) {
    let value = document.getElementById(id).value; 
   if(value === ""){
       value = 1;
   }
   else{
       ++value;
   }
   document.getElementById(id).value = value;
   updateAmount(amount);
}

function updateAmount(amount) {
    let subTotal = document.getElementById("subTotal").innerText;
    subTotalNumber = parseFloat(subTotal) + amount;
    document.getElementById("subTotal").innerText = subTotalNumber;
    let vat = subTotalNumber / 10 ;
    document.getElementById("vat").innerText = vat;
    document.getElementById("total").innerText = subTotalNumber + vat;

}