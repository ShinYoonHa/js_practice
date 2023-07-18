var now = new Date(); //오늘 날짜 Date 객체
var nowToMillis = now.getTime(); //날짜 계산을 위해 밀리초 형식으로 바꿈

var firstDay = new Date(); //처음 만난 날
var firstToMillis = firstDay.getTime();//날짜 계산을 위해 밀리초 형식으로 바꿈

var passedTime = nowToMillis-firstToMillis; //처음 만날 날과 오늘의 차이(밀리초)
var passedDay = Math.round(passedTime/(1000*60*60*24)); //밀리초를 표준시로 변환

document.querySelector('#accent').innerText = (passedDay+"일");

function calDate(day) { //day는 d-day 알고싶은 일 수
    var future = firstToMillis + day * (1000*60*60*24); //알고싶은 day일 뒤의 밀리초 표기
    var someday = new Date(future); //알고싶은 dday의 full날짜 표기
    var year = someday.getFullYear();
    var month = someday.getMonth()+1; //1월이 0부터 시작
    var date = someday.getDate();

    return year+"년 "+month+"월 "+date+"일";
}

document.querySelector('#date100').innerText = calDate(100);
document.querySelector('#date200').innerText = calDate(200);
document.querySelector('#date365').innerText = calDate(365);
document.querySelector('#date500').innerText = calDate(500);

/*
var future = firstToMillis + 100 * (1000*60*60*24); //첫날에 100일 더한 밀리초값
var someday = new Date(future); //100일 이후 날짜
var year = someday.getFullYear();
var month = someday.getMonth()+1;
var date = someday.getDate();

document.querySelector('#date100').innerText = year+"년 "+month+"월 "+date+"일"

future = firstToMillis + 200 * (1000*60*60*24); //첫날에 200일 더한 밀리초값
someday = new Date(future); //200일 이후 날짜
year = someday.getFullYear();
month = someday.getMonth();
day = someday.getDate();

document.querySelector('#date200').innerText = year+"년 "+month+"월 "+date+"일"*/

