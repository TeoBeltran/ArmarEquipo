// Selección de elementos del DOM
const textarea = document.querySelector("textarea");
const btnBorrar = document.querySelector(".btnBorrar");
const btnMezclar = document.querySelector(".btnMezclar");
const futbol5Btn = document.getElementById("futbol5Btn");
const futbol8Btn = document.getElementById("futbol8Btn");
const teamDivs = document.querySelectorAll(".team");

// Función para actualizar el número de jugadores por equipo
function actualizarJugadoresPorEquipo(cantidad) {
    teamDivs.forEach((teamDiv, teamIndex) => {
        const teamLinks = teamDiv.querySelectorAll("a");
        const currentPlayerCount = teamLinks.length;

        // Si hay más jugadores de los necesarios, eliminamos los extras
        if (currentPlayerCount > cantidad) {
            for (let i = currentPlayerCount; i > cantidad; i--) {
                teamLinks[i - 1].parentElement.remove(); // Eliminamos el div entero con el jugador
            }
        }

        // Si hay menos jugadores de los necesarios, agregamos los faltantes
        for (let i = currentPlayerCount; i < cantidad; i++) {
            // Crear el div contenedor para el jugador
            const newPlayerDiv = document.createElement("div");
            newPlayerDiv.classList.add("flex", "justify-center");
            newPlayerDiv.id = `team${teamIndex + 1}div${i + 1}`; // Asignar id único

            // Crear el enlace para el jugador
            const newPlayerLink = document.createElement("a");
            newPlayerLink.classList.add("block", "p-2", "bg-blue-100", "rounded", "hover:bg-blue-200", "transition");
            newPlayerLink.textContent = `Jugador ${i + 1}`;

            // Encontrar el contenedor de grid (dentro de teamDiv) y agregar el nuevo div
            const gridContainer = teamDiv.querySelector(".grid.grid-cols-2.gap-4");
            gridContainer.appendChild(newPlayerDiv);
            newPlayerDiv.appendChild(newPlayerLink); // Agregar el enlace dentro del div
        }
    });
}

// Evento para borrar el contenido del textarea
btnBorrar.addEventListener("click", () => {
    textarea.value = ""; // Vacía el contenido del textarea
});

// Evento para mezclar jugadores
btnMezclar.addEventListener("click", () => {
    const jugadores = textarea.value.trim().split("\n").filter(linea => linea.trim() !== ""); // Divide en líneas no vacías

    if (jugadores.length === 0) {
        alert("No hay jugadores para mezclar.");
        return;
    }

    // Mezclar jugadores aleatoriamente
    const jugadoresMezclados = [...jugadores].sort(() => Math.random() - 0.5);

    // Repartir jugadores entre los equipos sin repetir
    let jugadorIndex = 0;
    teamDivs.forEach((teamDiv, teamIndex) => {
        const teamLinks = teamDiv.querySelectorAll("a");
        teamLinks.forEach((link, playerIndex) => {
            link.textContent = jugadoresMezclados[jugadorIndex] || "Jugador vacío"; // Asignar jugador o texto vacío
            // Asignar un id único para cada jugador (teamXdivX) según el índice de equipo y jugador
            link.parentElement.id = `team${teamIndex + 1}div${playerIndex + 1}`;
            jugadorIndex++;
        });
    });
});

// Evento para configurar el modo Futbol 5
futbol5Btn.addEventListener("click", () => {
    actualizarJugadoresPorEquipo(5); // Establecer 5 jugadores por equipo
});

// Evento para configurar el modo Futbol 8
futbol8Btn.addEventListener("click", () => {
    actualizarJugadoresPorEquipo(8); // Establecer 8 jugadores por equipo
});
