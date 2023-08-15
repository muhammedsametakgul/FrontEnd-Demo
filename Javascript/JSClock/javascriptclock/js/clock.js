let fullName = prompt("Adınız Nedir?")
let myName = document.querySelector('#myName')
myName.innerHTML= fullName


function showTime() {
    const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
   let d = new Date()
   let h = d.getHours()
   let m = d.getMinutes()
   let s = d.getSeconds()
   let day = weekday[d.getDay()]
   let myClock = document.querySelector('#myClock')
   myClock.innerHTML=`${h}:${m}:${s} ${day}`
} 

setInterval(showTime, 1000);