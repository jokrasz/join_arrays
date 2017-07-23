var femaleNames = ['Krysia', 'Danka', 'Gienia', 'Paula', 'Ula', 'Aldona'];
console.log(femaleNames);
var maleNames = ['Zbyszek', 'Tadeusz', 'Konrad', 'Sylwek', 'Heniek'];
console.log(maleNames);
var allNames = femaleNames.concat(maleNames);
console.log(allNames);
var newName = "Marian";
if (allNames.indexOf(newName) === -1) {
 	allNames.push("Marian")
 }
console.log(allNames);



