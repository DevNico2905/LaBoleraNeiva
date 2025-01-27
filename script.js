function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    
    // Formatea la hora, minutos y segundos
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    //const seconds = String(now.getSeconds()).padStart(2, '0');

    // Actualiza el contenido del reloj
    clockElement.textContent = `${hours}:${minutes}`;
}

// Actualiza el reloj cada segundo
setInterval(updateClock, 1000);

// Llama una vez al cargar para mostrar la hora de inmediato
updateClock();

/*
function showNewGameModal() {
    document.getElementById("modalplayers").style.display="block";
    console.log("Modal Shown");
}

function hideNewGameModal() {
    document.getElementById("modalplayers").style.display="none";
    console.log("Modal Hidden");
}*/

function showNewGameModal() {
    const modal = document.getElementById('modalplayers');
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function hideNewGameModal() {
    const modal = document.getElementById('modalplayers');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}


// Seleccionamos todos los botones
const radioButtons = document.querySelectorAll('.opcion');
let selectedValue = null; // Variable para guardar la selección actual

radioButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Removemos la clase 'selected' de todos los botones
    radioButtons.forEach((btn) => btn.classList.remove("selected"));

    // Marcamos el botón seleccionado
    button.classList.add("selected");

    // Guardamos la selección actual
    selectedValue = button.dataset.value;

    switch (selectedValue) {
        case "2-p":
            showDivNameDefault()
          break;
        case "3-p":
            showDivNameThree()
          break;
        case "4-p":
            showDivNameFour()
          break;
        case "5-p":
            showDivNameFive()
          break;
        case "6-p":
            showDivNameSix()
          break;
        default:
          alert("Opción no válida.");
          break;
    }
  });
});

function showDivNameDefault() {
    document.getElementById('div-name-three').classList.remove("showDivName");
    document.getElementById('div-name-four').classList.remove("showDivName");
    document.getElementById('div-name-five').classList.remove("showDivName");
    document.getElementById('div-name-six').classList.remove("showDivName");   
}

function showDivNameThree() {
    document.getElementById('div-name-three').classList.add("showDivName");
    document.getElementById('div-name-four').classList.remove("showDivName");
    document.getElementById('div-name-five').classList.remove("showDivName");
    document.getElementById('div-name-six').classList.remove("showDivName");   
}

function showDivNameFour() {
    document.getElementById('div-name-three').classList.add("showDivName");
    document.getElementById('div-name-four').classList.add("showDivName");
    document.getElementById('div-name-five').classList.remove("showDivName");
    document.getElementById('div-name-six').classList.remove("showDivName");   
}

function showDivNameFive() {
    document.getElementById('div-name-three').classList.add("showDivName");
    document.getElementById('div-name-four').classList.add("showDivName");
    document.getElementById('div-name-five').classList.add("showDivName");
    document.getElementById('div-name-six').classList.remove("showDivName");   
}

function showDivNameSix() {
    document.getElementById('div-name-three').classList.add("showDivName");
    document.getElementById('div-name-four').classList.add("showDivName");
    document.getElementById('div-name-five').classList.add("showDivName");
    document.getElementById('div-name-six').classList.add("showDivName");   
}