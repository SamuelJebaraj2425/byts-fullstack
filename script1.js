var sum = 0;
function add() {
    let n1 = parseInt(document.getElementById("add-num1").value);
    let n2 = parseInt(document.getElementById("add-num2").value);
    sum = n1 + n2;
    document.getElementById("add-p").innerText = `The sum is ${sum}`;
}
function add_clear() {
    document.getElementById("add-num1").value ='';
    document.getElementById("add-num2").value ='';
    document.getElementById("add-p").innerText = "Enter two numbers";
    sum = 0;
}