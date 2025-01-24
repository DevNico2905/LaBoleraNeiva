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
