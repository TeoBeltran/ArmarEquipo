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

    // Función para borrar los jugadores
    function borrarJugadores() {
        const inputsJugadores = document.querySelectorAll(".left input");
        inputsJugadores.forEach(input => {
            input.value = ""; // Borrar el valor del input
        });

        const jugadoresEquipo = document.querySelectorAll(".right .team a");
        jugadoresEquipo.forEach(jugador => {
            jugador.textContent = ""; // Borrar el contenido del elemento a
        });
    }

    // Agregar un listener al botón "Confirmar"
    const botonConfirmar = document.querySelector(".btnMezclar");
    botonConfirmar.addEventListener("click", asignarJugadores);

    // Agregar un listener al botón "Borrar"
    const botonBorrar = document.querySelector(".btnBorrar");
    botonBorrar.addEventListener("click", borrarJugadores);

    // Agregar eventos de cambio a los botones de radio
    const futbol5Radio = document.getElementById('futbol5');
    const futbol8Radio = document.getElementById('futbol8');

    futbol5Radio.addEventListener('change', function() {
        actualizarJugadores(10, 5);
    });

    futbol8Radio.addEventListener('change', function() {
        actualizarJugadores(16, 8);
    });

    function actualizarJugadores(totalJugadores, jugadoresPorEquipo) {
        var inputs = document.querySelectorAll('.left input');
        var diferencia = totalJugadores - inputs.length;

        if (diferencia > 0) {
            // Agregar jugadores adicionales
            for (var i = 0; i < diferencia; i++) {
                var input = document.createElement('input');
                input.type = 'text';
                input.placeholder = 'Jugador ' + (inputs.length + i + 1);
                document.querySelector('.left').appendChild(input);
            }
        } else if (diferencia < 0) {
            // Eliminar jugadores adicionales
            for (var i = 0; i < Math.abs(diferencia); i++) {
                document.querySelector('.left input:last-child').remove();
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
