const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const message = document.querySelector("#message");

function compareValue(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        message.innerText = "your birthday is lucky🥳";
    } else {
        message.innerText = "your birthday is not lucky😟";
    }
}


function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    var sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}
checkNumberButton.addEventListener("click", function isYourBirthdayLucky() {
    var dob = dateOfBirth.value;
    var sum = calculateSum(dob);
    if (sum && dob) {
        compareValue(sum, luckyNumber.value);
    } else {
        message.innerText = "please enter both fields kindly!!";
    }
});