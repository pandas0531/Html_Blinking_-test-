let target = document.querySelector("#dynamic");

function randomString(){
    let stringArr = ["Typing Effects"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]
    let selectStringArr = selectString.split("");
    return selectStringArr;
}

function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}

function dynamic(randomArr){

    //console.log(randomArr);

    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    }else{
        setTimeout(resetTyping, 1500);
    }
}

dynamic(randomString())

//console.log(selectStringArr);


function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);