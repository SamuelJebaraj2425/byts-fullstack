function update(val){
    document.getElementById('result-cal').value+=val;
}
function cal_clear(){
    document.getElementById('result-cal').value='';
}
function calculate() {
      try {
        document.getElementById('result-cal').value = eval(document.getElementById('result-cal').value);
      } catch (error) {
        document.getElementById('result-cal').value = 'Error';
      }
}
function dellast(){
    let disp=document.getElementById('result-cal');
    disp.value=disp.value.slice(0,-1);
}