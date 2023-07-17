function compareTo() {
    var a = Number(prompt("비교할 첫 번째 숫자:"));
    var b = Number(prompt("비교할 두 번째 숫자:"));
    if(a>=b) {
        alert(a+"가(이) "+b +"보다 큽니다.");
    } else {
        alert(b+"가(이) "+a +"보다 큽니다.");
    }
}

compareTo();