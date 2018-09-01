import java.util.Random;
function myFunction() {
    var rNumber = (int )(Math.random() * 50 + 1);
    var rNumber = prompt("Please enter your number");
    if (rNumber == 5) {

        alert("It's Tie");

    }

    else{
        if (rNumber == 10){
            alert("It's a Match");
        }
    }
}