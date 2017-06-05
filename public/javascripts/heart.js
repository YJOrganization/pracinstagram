
function heart() {
var img1 = document.getElementById('heartheart');

if(img1.src.indexOf('16') == -1) {/*풀주소로 나오기때문에 이름으로만 비교할 때 사용*/
img1.src = img1.src.replace('14.png', '16.png');

} else {
img1.src = img1.src.replace('16.png', '14.png');

}

};
