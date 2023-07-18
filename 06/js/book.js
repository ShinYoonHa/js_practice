function Book(title, author, volume, price) {
    this.title = title;
    this.author = author;
    this.volume = volume;
    this.price = price;
}

var html = new Book("웹 표준의 정석", "Ko", "608", "28,000");
var youtube = new Book("텔론의 유튜브", "tellon", "102", "16,000");
var python = new Book("두근두근 파이썬", "Mr.Py", "2600", "54,000");

var bookList = [html, youtube, python];

document.write("<h1>책 제목으로 살펴보기</h1>");
for(var i=0; i<bookList.length; i++) {
    document.write("<p>" + bookList[i].title + "</p>");
}
