let picWidth = 640;
let moveNum = 0;
// 숫자 + 문자 연결 연산자 "2880px"
// document.getElementById("#pic1").style.left = (1440 * 0) + "px";
// document.getElementById("#pic1").style.left = (1440 * 1) + "px";
// document.getElementById("#pic1").style.left = (1440 * 2) + "px";
    // document.getElementById("pic0").style.left = (1440 * -1) + "px";
    // document.getElementById("pic1").style.left = (1440 * 0) + "px";
    // document.getElementById("pic2").style.left = (1440 * 1) + "px";

// 문자 + 숫자 --> + 연결연산자.
for(var i=0; i<3; i++){
    document.getElementById("pic" + i).style.left = (picWidth * i) + "px";
}
//-------------------------------------------------------------------
document.getElementById("prev_btn").onclick = function () {
    if (moveNum > 0) {
      moveNum--;
      console.log(moveNum);
    } else if (moveNum == 0){
      moveNum = 2;
    }
    for (let i = 0; i < 3; i++) {
      document.getElementById("pic" + i).style.left =
        picWidth * (i - moveNum) + "px";
    }
  };

document.getElementById("next_btn").onclick = function(){
    if (moveNum < 2) {
        moveNum++;
      } else if(moveNum == 2) {
        moveNum = 0;
      }
      for (let i = 0; i < 3; i++) {
        document.getElementById("pic" + i).style.left =
          picWidth * (i - moveNum) + "px";
      }
}

// 2022.05.19 수업내용.
// next버튼까지 만들었고 prev버튼도 만들어보기.


// for(초기값; 조건식; 증감식;){} [for 반복문]
// for(var i=0; i<10; i++){
//     console.log(i);
// }
// console.log("종료후: " + i);