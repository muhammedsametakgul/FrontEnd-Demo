let fullName=prompt("İsminizi Giriniz : ")
console.log(fullName)

let greeting = document.querySelector("#title")
greeting.innerHTML = `${greeting.innerHTML}  ${fullName}`