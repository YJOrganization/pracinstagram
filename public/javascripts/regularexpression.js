function regularexpression() {
var remail = document.getElementById('email');
var rname = document.getElementById('name');
var ruser = document.getElementById('user');
var rpassword = document.getElementById('password');

var emailcheck = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

var namecheck = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;
//한글 또는 영문 사용하기(혼용X)
var usercheck = /^[a-z]+[a-z0-9]{5,19}$/g;
//영문자로 시작하는 6~20자 영문자 또는 숫자
var passwordcheck = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
//영문 숫자 혼합 6~20자리


if (emailcheck.test(remail.value)==false) {
  remail.style.borderColor ="#f73d3d";
  remail.style.outlineColor ="#f73d3d";
  document.getElementById('hide').style.display ="block";
}
if(namecheck.test(rname.value)==false){
  rname.style.borderColor ="#f73d3d";
  rname.style.outlineColor ="#f73d3d";
  document.getElementById('hide').style.display ="block";
}
if(usercheck.test(ruser.value)==false){
  ruser.style.borderColor ="#f73d3d";
  ruser.style.outlineColor ="#f73d3d";
  document.getElementById('hide').style.display ="block";
}
if(passwordcheck.test(rpassword.value)==false){
  rpassword.style.borderColor ="#f73d3d";
  rpassword.style.outlineColor ="#f73d3d";
  document.getElementById('hide').style.display ="block";
}
}
