let number = Math.floor(Math.random() *100)+1;
let health=5;
console.log("Number",number);
console.log("Health" , health);

document.getElementById("submit").onclick=function(){
    let guess=document.getElementById("input-number").value;
    if(guess==""){
        window.alert("Please insert a guess");
    }else{
        if(number<guess){
            document.getElementById("title").innerHTML="Decrease your guess";
            health-=1;
            document.getElementById("health").innerHTML="Health = " + health;
        }
        else if(number == guess){
            window.alert("Congratulations. You made it :)");
            document.getElementById("health").innerHTML="Health = " + health;

        }else{
            document.getElementById("title").innerHTML="Increase your guess";
            health-=1;
            document.getElementById("health").innerHTML="Health = " + health;

        }
        if(health==0){
            window.alert("Sorry, You have failed:( Number was " + number);
        }
    }
}