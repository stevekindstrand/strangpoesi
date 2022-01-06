// Skapar en array med siffror och en array som är tom
let numbArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];

let numbEmpty = [];

// Skapar en funktion som loopar igenom numbArray samt sparar klickade siffror i numbEmpty
let numbStore = () => {
    for (let i = 0; i < numbArray.length; i++) {
        let numbBtn = document.createElement("button");
        numbBtn.innerText = numbArray[i];
        document.body.append(numbBtn);

        numbBtn.addEventListener("click", () => {
            numbBtn.style.background = "#363636";
            numbBtn.style.color = "#F9F9F9";
            numbEmpty.push(" " + numbArray[i]);
        });
    };
};

numbStore ();

// Skapar en knapp och en paragraf
let getBtn = document.createElement("button");
document.body.append(getBtn);
getBtn.innerText = "Get Numbers"

let numbContainer = document.createElement("p");
document.body.append(numbContainer);

// Skapar en knapp-funktion som hämtar och skriver ut valda siffror i en paragraf
getBtn.addEventListener("click", () => {
    numbContainer.innerText = numbEmpty;
});