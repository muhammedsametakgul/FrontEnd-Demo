let number =0;

document.getElementById("decrease").onclick=function(){
    if(number>0){
        number-=1;
        document.getElementById("counter").innerHTML=number;
    }else{
        number =0;
    }
}

document.getElementById("reset").onclick=function(){
    number=0;
    document.getElementById("counter").innerHTML=number;
}

document.getElementById("increase").onclick=function(){
    number+=1;
    document.getElementById("counter").innerHTML=number;
}