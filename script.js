const terms = [
    "Camel-case", 
    "Front-end development", 
    "HTML", 
    "Self-closing tags",
    "Inline style",  
    "Flexbox", 
    "Background-size", 
    "Psuedo-class",
    "Kabob-case", 
    "Responsive design", 
    "Media query", 
    "Arrow function",
    "DOM",
    "querySelector",
    "Template literals",
    "Math.random",
    "Class",
    "Console.log",
    "Doctype tag",
    "Event listener",
    "Math object",
    "Breakpoints",
    "Array methods",
    "Text-transform",
    "Return"
];

//My concentration was on functions.
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function createBingoTable() {
   
    const shuffledTerms = shuffle([...terms]);
    const table = document.getElementById("bingoTable");

    if (!table) {
        return;
    }

    table.innerHTML = "";
    let index = 0;

    for (let i = 0; i < 5; i++) {
        const row = table.insertRow();

        for (let j = 0; j < 5; j++) {
            const cell = row.insertCell();
            cell.classList.add("bingo-cell");
            cell.textContent = shuffledTerms[index];
           
            index++;

            cell.addEventListener("click", () => {
                toggleCell(cell);
            });
        }
    }
}

function toggleCell(cell) {
    if (!cell) {
        return;
    }

    cell.classList.toggle("marked");

    checkBingo();
}

function checkBingo() {
    const table = document.getElementById("bingoTable");
    if (!table) {
        return;
    }

    const rows = [...table.rows];

    for (let i = 0; i < rows.length; i++) {
        if ([...rows[i].cells].every(cell => cell.classList.contains("marked"))) {
            alert("Bingo! You completed a row!");
            return;
        }
    }

    for (let i = 0; i < 5; i++) {
        if (rows.every(row => row.cells[i].classList.contains("marked"))) {
            alert("Bingo! You completed a column!");
            return;
        }
    }
}

document.getElementById("newCardBtn").addEventListener("click", () => {
    createBingoTable();
});

createBingoTable();