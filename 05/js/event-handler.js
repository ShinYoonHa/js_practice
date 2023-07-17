function showDetail() {
    document.querySelector('#desc').style.display = "block"; //상세 설명 보기
    document.querySelector('#open').style.display = "none"; //상세 설명 버튼 숨기기
}

function hideDetail() {
    document.querySelector('.detail').style.display = "none"; //상세 설명 숨기기
    document.querySelector('.over').style.display = "block"; //상세 설명 버튼 보기
}