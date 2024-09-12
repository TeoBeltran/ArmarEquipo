document.addEventListener("DOMContentLoaded", function() {
    // Función para obtener una lista aleatoria de nombres de jugadores
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Función para asignar a los jugadores
    function asignarJugadores() {
        const nombresJugadores = Array.from(document.querySelectorAll(".left input, .center input"))
                                    .map(input => input.value.trim())
                                    .filter(nombre => nombre !== "");

        const totalJugadores = nombresJugadores.length;
        const jugadoresPorEquipo = totalJugadores / 2; // Dividimos los jugadores entre dos equipos

        if (totalJugadores < 10) {
            alert("Debe ingresar al menos 10 nombres de jugadores.");
            return;
        }

        const nombresAleatorios = shuffle(nombresJugadores);

        const jugadoresEquipo = document.querySelectorAll(".right .team a");
        jugadoresEquipo.forEach((jugador, index) => {
            jugador.textContent = nombresAleatorios[index];
        });
    }

    // Función para borrar los jugadores
    function borrarJugadores() {
        const inputsJugadores = document.querySelectorAll(".left input, .center input");
        inputsJugadores.forEach(input => {
            input.value = ""; // Borrar el valor del input
        });

        const jugadoresEquipo = document.querySelectorAll(".right .team a");
        jugadoresEquipo.forEach(jugador => {
            jugador.textContent = ""; // Borrar el contenido del elemento a
        });
    }

    // Agregar un listener al botón "Generar"
    const botonGenerar = document.querySelector(".btnMezclar");
    botonGenerar.addEventListener("click", asignarJugadores);

    // Agregar un listener al botón "Borrar"
    const botonBorrar = document.querySelector(".btnBorrar");
    botonBorrar.addEventListener("click", borrarJugadores);

    // Agregar eventos de click a los botones de selección
    const futbol5Btn = document.getElementById('futbol5Btn');
    const futbol8Btn = document.getElementById('futbol8Btn');

    futbol5Btn.addEventListener('click', function() {
        actualizarJugadores(5, 5);
    });

    futbol8Btn.addEventListener('click', function() {
        actualizarJugadores(8, 8);
    });

    function actualizarJugadores(jugadoresPorSeccion, jugadoresPorEquipo) {
        // Actualizar la sección de la izquierda
        var inputsLeft = document.querySelectorAll('.left input');
        var diferenciaLeft = jugadoresPorSeccion - inputsLeft.length;

        if (diferenciaLeft > 0) {
            // Agregar jugadores adicionales en la sección de izquierda
            for (var i = 0; i < diferenciaLeft; i++) {
                var input = document.createElement('input');
                input.type = 'text';
                input.placeholder = 'Jugador ' + (inputsLeft.length + i + 6);
                document.querySelector('.left').appendChild(input);
            }
        } else if (diferenciaLeft < 0) {
            // Eliminar jugadores adicionales en la sección de izquierda
            for (var i = 0; i < Math.abs(diferenciaLeft); i++) {
                document.querySelector('.left input:last-child').remove();
            }
        }

        // Actualizar la sección del centro
        var inputsCenter = document.querySelectorAll('.center input');
        var diferenciaCenter = jugadoresPorSeccion - inputsCenter.length;

        if (diferenciaCenter > 0) {
            // Agregar jugadores adicionales en la sección del centro
            for (var i = 0; i < diferenciaCenter; i++) {
                var input = document.createElement('input');
                input.type = 'text';
                input.placeholder = 'Jugador ' + (inputsCenter.length + i + 9);
                document.querySelector('.center').appendChild(input);
            }
        } else if (diferenciaCenter < 0) {
            // Eliminar jugadores adicionales en la sección del centro
            for (var i = 0; i < Math.abs(diferenciaCenter); i++) {
                document.querySelector('.center input:last-child').remove();
            }
        }

        // Actualizar equipos
        var equipos = document.querySelectorAll('.team');
        equipos.forEach(equipo => {
            // Eliminar jugadores existentes
            equipo.innerHTML = '<h2>' + equipo.querySelector('h2').textContent + '</h2>'; // Mantener el nombre del equipo
            // Agregar jugadores al equipo
            for (var j = 0; j < jugadoresPorEquipo; j++) {
                var jugador = document.createElement('a');
                equipo.appendChild(jugador);
            }
        });
    }
});
