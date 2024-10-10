let billAmtEl = document.getElementById("billAmt");
let perTipAmtEl = document.getElementById("perTipAmt");
let showTipEl = document.getElementById("tipAmt");
let showTotalEl = document.getElementById("totalAmt");
let errorMsgEl = document.getElementById("errorMsg");

function onCalculate(){

     if( billAmtEl.value === "" || perTipAmtEl.value === "" ){

        errorMsgEl.textContent = "Please fill out all the feilds";

     }
     else{

        let billAmount = parseInt(billAmtEl.value);
        let perTipAmount = parseInt(perTipAmtEl.value);
        
        let tip = perTipAmount * billAmount / 100;
        
        let totalAmt = tip + billAmount;
    
        showTipEl.value = tip;
    
        showTotalEl.value = totalAmt;

        errorMsgEl.textContent = "";
     }   
    
}