//   function (jor bijor)  ///////
function numcheck(){
  var num1 = document.getElementById('anynum').value;
  if(num1%2==0  || num1.length%2==0 ){
    document.getElementById('demo').innerHTML='jor';
  }
  else{
   document.getElementById('demo').innerHTML='bijor';
  }
}
function revarse1(){
  var numb1 = document.getElementById("anynum").value;
  var numb2 =  numb1.split("").reverse().join("") ;
  document.getElementById("demo1").innerHTML = numb2;
}