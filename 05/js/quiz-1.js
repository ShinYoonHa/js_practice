function sumMulti() {
    var a = Number(prompt("첫 번째 숫자를 입력하시오"));
    var b = Number(prompt("두 번째 숫자를 입력하시오"));
    var result = 0;
    if(a==b) {
        result = a*b;
    } else {
        result = a+b;
    }
    return result;
}

console.log(sumMulti())