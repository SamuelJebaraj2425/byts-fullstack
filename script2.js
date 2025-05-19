// var temp=0;
function calc_temp(){
    let a1=parseInt(document.getElementById("temp-box-input").value);
    let temp=(a1 *(9/5)) + 32;
    document.getElementById('temp-ans').innerText=temp;
}
