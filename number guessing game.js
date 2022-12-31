const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function(){

    let guess = document.getElementById("guessFeild").value;
    guesses +=1;

    if(guess == answer){
        alert(`${answer} is correct!!! Good job. It took you ${guesses} guesses.`);
    }
    else if(guess < answer){
        alert("Too small!");
    }
    else if(guess > answer){
        alert("Too big!!!")
    }
    else{
        alert("Bruh, that's not a number. You think I am dumb???? I'm going to count that as a guess");
    }
}