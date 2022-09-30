const firstRow = "мама мыла раму";
const secondRow = "собака друг человека";

function getRow(row) {
    let sum = 0;
    for (let i = 0; i < row.length; i++) {
        if (row[i] == "a" || row[i] == "а") {
        sum += 1;
        }
    }
    return sum;
}

if (getRow(firstRow) > getRow(secondRow)){
    console.log(firstRow);
}
else {
    console.log(secondRow); 
}

function getUserRow(row, userLetter) {
    let sum = 0;
    for (let i = 0; i < row.length; i++) {
        if (row[i] == userLetter) {
        sum += 1;
        }
    }
    return sum;
}

let firstRow1 = prompt("Введите первую строку", " ");
let secondRow1 = prompt("Введите вторую строку", " ");
let userLetter = prompt("Какую букву искать?", " ");

if (getUserRow(firstRow1, userLetter) > getUserRow(secondRow1, userLetter)){
    alert("Больше букв '" +userLetter+ "' в строке: "+ firstRow1);
}
else {
    alert("Больше букв '" +userLetter+ "' в строке: "+ secondRow1);
}


let phoneNumber = "";

while (phoneNumber.length < 10) {
    phoneNumber = prompt("Введите телефон", "8005553535");
    if (phoneNumber.length < 10) {
        alert("Введите допустимый номер");
    }
}

function formatPhone(phoneNumber) {
    if (phoneNumber.startsWith("+") && phoneNumber.length == 12){
        return `+7  (${phoneNumber.slice(2, 5)})  ${phoneNumber.slice(5,
            8)}-${phoneNumber.slice(8, 10)}-${phoneNumber.slice(10, 12)}`; 
    }
    else if (!phoneNumber.startsWith("+") && phoneNumber.length == 11) {
        return `+7  (${phoneNumber.slice(1, 4)})  ${phoneNumber.slice(4,
            7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`; 
    } 
    else if (!phoneNumber.startsWith("+") && phoneNumber.length == 10){
        return `+7  (${phoneNumber.slice(0, 3)})  ${phoneNumber.slice(3,
            6)}-${phoneNumber.slice(6, 8)}-${phoneNumber.slice(8, 10)}`;
    }

    return "Неверный формат"
}

alert(formatPhone(phoneNumber));