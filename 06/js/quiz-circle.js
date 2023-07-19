var r = prompt("원의 반지름은? (cm)");

document.write("반지름이 "+r+"cm일 때<br>")
document.write("원의 둘레 : 약 " + Math.floor(2*Math.PI*r) + "cm<br>")
document.write("원의 넓이 : 약 " + Math.floor(Math.PI*r*r) + "cm²")