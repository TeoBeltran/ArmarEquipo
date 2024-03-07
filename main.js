document.addEventListener("DOMContentLoaded", function() {
    // Función para obtener una lista aleatoria de nombres de jugadores
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Función para asignar nombres aleatorios a los equipos
    function asignarNombresAleatorios() {
        const nombresJugadores = Array.from(document.querySelectorAll(".left input"))
                                    .map(input => input.value.trim())
                                    .filter(nombre => nombre !== "");

        if (nombresJugadores.length < 10) {
            alert("Debe ingresar al menos 10 nombres de jugadores.");
            return;
        }

        const nombresAleatorios = shuffle(nombresJugadores);

        const jugadoresEquipo = document.querySelectorAll(".right .team a");
        jugadoresEquipo.forEach((jugador, index) => {
            jugador.textContent = nombresAleatorios[index];
        });
    }

    // Agregar un listener al botón "Confirmar"
    const botonConfirmar = document.querySelector(".btnConfirmar");
    botonConfirmar.addEventListener("click", asignarNombresAleatorios);
});