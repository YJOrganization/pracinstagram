
var div=new Array();
function mainview(){


  for(k=1;k<3;k++){
            //div 객체 생성
            div[k]= document.createElement("div");
            div[k].setAttribute('id','mainimg'+k);
              div[k].innerHTML =
              document.getElementById('mainimg').innerHTML;

              div[k].querySelector('#img1img').src="/images/"+"pho"+(k+1)+".png";
              div[k].querySelector('#like').innerHTML="좋아요"+"&nbsp"+(k*30)+"개";
              if(k==1){
              div[k].querySelector('#nicknameid').innerHTML="dpwls2215";
              div[k].querySelector('.aa1').innerHTML="dpwls2215";
              div[k].querySelector('#bb').innerHTML="#시계";
              div[k].querySelector('#bb2').innerHTML="#봄";
              div[k].querySelector('#cc').innerHTML="댓글 120개 모두보기";
              div[k].querySelector('.aa2').innerHTML="hyejin";
              div[k].querySelector('.aa3').innerHTML="dddddd";
              
              }
              else if(k==2){
              div[k].querySelector('#nicknameid').innerHTML="abcde";
              div[k].querySelector('.aa1').innerHTML="abcde";
              }

              div[k].style.marginTop ="20px";
}

div[1].onmouseover=function(){
div[1].style.boxShadow="0 0 10px gray";
};
div[2].onmouseover=function(){
    div[2].style.boxShadow="0 0 10px gray";
};
document.getElementById('mainimg').onmouseover=function(){
document.getElementById('mainimg').style.boxShadow="0 0 10px gray";
};

div[1].onmouseout=function(){
div[1].style.boxShadow="none";
};
div[2].onmouseout=function(){
    div[2].style.boxShadow="none";
};
document.getElementById('mainimg').onmouseout=function(){
document.getElementById('mainimg').style.boxShadow="none";
};





  for(k=1;k<3;k++){
            //** 바디의 마지막 자식으로 div 객체 추가
            document.getElementById('main1').appendChild(div[k]);

  }



};
