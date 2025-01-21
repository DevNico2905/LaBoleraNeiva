function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    
    // Formatea la hora, minutos y segundos
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    // Actualiza el contenido del reloj
    clockElement.textContent = `${hours}:${minutes}`;
}

// Actualiza el reloj cada segundo
setInterval(updateClock, 1000);

// Llama una vez al cargar para mostrar la hora de inmediato
updateClock();

