
var pro = new Array();
var pro1 =new Array();
for(var k=0;k<6;k++){

          //div 객체 생성
          pro[k] = document.createElement("div");
          pro1[k] = document.createElement("button");

          pro[k].className="pho"
          pro[k].id="pho"+(k+1);
          pro1[k].id="imgdiv"+(k+1);
          pro1[k].className="imgdivdiv"


          //css설정
          if(k==0){
            pro[k].style.marginTop= "5px";
            pro[k].style.marginLeft="7px";
            pro[k].style.marginRight="7px";
          }
          else{
          pro[k].style.margin= "7px";
        }
          pro[k].style.width= "350px";
          pro[k].style.height= "350px";
          pro[k].style.float = 'left';
          pro1[k].style.width= "100%";
          pro1[k].style.height= "100%";

          pro1[k].style.color="white";
          pro1[k].style.textAlign="center"
          pro1[k].style.fontSize="15pt";

          pro[k].style.backgroundImage='url('+"/images/"+"pho"+(k+1)+".png"+')';
          pro[k].style.backgroundRepeat = "no-repeat";
          pro[k].style.backgroundSize= "100% 100%";
}
//마우스오버
pro[0].onmouseover = function(){pro1[0].style.background="rgba(0,0,0,0.5)";
pro1[0].innerHTML="<img src="+"/images/"+"17.png"+">"+"30"+" "+"<img src="+"/images/"+"18.png"+">"+"4";};

pro[1].onmouseover = function(){pro1[1].style.background="rgba(0,0,0,0.5)";
pro1[1].innerHTML="<img src="+"/images/"+"17.png"+">"+"22"+" "+"<img src="+"/images/"+"18.png"+">"+"1";};

pro[2].onmouseover = function(){pro1[2].style.background="rgba(0,0,0,0.5)";
pro1[2].innerHTML="<img src="+"/images/"+"17.png"+">"+"5"+" "+"<img src="+"/images/"+"18.png"+">"+"10";};

pro[3].onmouseover = function(){pro1[3].style.background="rgba(0,0,0,0.5)";
pro1[3].innerHTML="<img src="+"/images/"+"17.png"+">"+"1"+" "+"<img src="+"/images/"+"18.png"+">"+"0";};

pro[4].onmouseover = function(){pro1[4].style.background="rgba(0,0,0,0.5)";
pro1[4].innerHTML="<img src="+"/images/"+"17.png"+">"+"15"+" "+"<img src="+"/images/"+"18.png"+">"+"2";};

pro[5].onmouseover = function(){pro1[5].style.background="rgba(0,0,0,0.5)";
pro1[5].innerHTML="<img src="+"/images/"+"17.png"+">"+"24"+" "+"<img src="+"/images/"+"18.png"+">"+"5";};




//마우스아웃
pro[0].onmouseout = function(){pro1[0].style.background="Transparent";
pro1[0].innerHTML="";};

pro[1].onmouseout = function(){pro1[1].style.background="Transparent";
pro1[1].innerHTML=""; };

pro[2].onmouseout = function(){pro1[2].style.background="Transparent";
pro1[2].innerHTML="";};

pro[3].onmouseout = function(){pro1[3].style.background="Transparent";
pro1[3].innerHTML="";};

pro[4].onmouseout = function(){pro1[4].style.background="Transparent";
pro1[4].innerHTML="";};

pro[5].onmouseout = function(){pro1[5].style.background="Transparent";
pro1[5].innerHTML="";};

//마우스 클릭
pro1[0].onclick = function(){

  document.querySelector('#modal4img').src="/images/"+"pho1.png";

  var modal = document.getElementById("infomodal");
  // Get the button that opens the modal
  var btn = document.getElementById("imgdiv1");
  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }


};
pro1[1].onclick = function(){
  //modal 이미지

//modal 창
  var modal = document.getElementById("infomodal");

    document.querySelector('#modal4img').src="/images/"+"pho2.png";

  var btn = document.getElementById("imgdiv2");
  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }  };
pro1[2].onclick = function(){
  document.querySelector('#modal4img').src="/images/"+"pho3.png";

  var modal = document.getElementById("infomodal");
  var btn = document.getElementById("imgdiv3");
  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  } };
pro1[3].onclick = function(){
document.querySelector('#modal4img').src="/images/"+"pho4.png";

  var modal = document.getElementById("infomodal");
  var btn = document.getElementById("imgdiv4");
  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }  };
pro1[4].onclick = function(){
    document.querySelector('#modal4img').src="/images/"+"pho5.png";

  var modal = document.getElementById("infomodal");
  var btn = document.getElementById("imgdiv5");
  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }  };
pro1[5].onclick = function(){
document.querySelector('#modal4img').src="/images/"+"pho6.png";

  var modal = document.getElementById("infomodal");
  var btn = document.getElementById("imgdiv6");
  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }  };

function change2(){


for(var k=0;k<6;k++){

          document.getElementById('myimgid2').appendChild(pro[k]);
          document.getElementById(pro[k].id).appendChild(pro1[k]);

}

};
