body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

header {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px 0;
}

main {
    max-width: 1000px;
    margin: 20px auto;
    padding: 0 20px;
    background-color: #ccc;
    border-radius: 10px;
}

div {
    margin-bottom: 10px;
}

.team {
    margin-bottom: 20px;
    a {
        display: block;
        width: 100px;
        height: 20px;
        background-color: gray;
        margin-bottom: 5px;
    }
}
.team h3 {
    font-size: 16px;
    margin-bottom: 10px;
}

.boton {
    display: inline-block;
    padding: 10px 20px;
    margin-right: 10px;
    text-decoration: none;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.boton:hover {
    background-color: #0056b3;
}

input {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
}

.botones {
    display: flex;
    justify-content: center;
    padding: 20px;
}

.btnMezclar {
    margin-left: 10px;
    text-align: center;
    padding: 10px 20px;
    text-decoration: none;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.btnMezclar:hover {
    background-color: #0056b3;
}

.btnBorrar {
    margin-right: 10px;
    text-align: center;
    padding: 10px 20px;
    text-decoration: none;
    color: #007bff;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.btnBorrar:hover {
    background-color: #a7a8aa;
    color: #007bff;
}



.radio-container {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.text-container {
    margin-right: -20px;
    display: flex;
    align-items: center;
}
.checkmark-container {
    width: 25px;
    display: flex;
    align-items: center;
    margin-right: 50px;
}
.checkmark {
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
}
.radio-container input:checked ~ .checkmark {
    background-color: #007bff;
}
.checkmark:after {
    content: "";
    display: block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: white;
}

/*-----------------------------------------------------------------------*/

.mainF {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    height: 100vh;/
}

.left0 {
    grid-column: 1 / span 3; /* A partir de la columna 1, usa 3 */
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Define 2 columnas internas */
    gap: 10px;
    background-color: #f8f8f8;
    padding: 20px;
    border: 1px solid #ccc;
}

.left, .center {
    background-color: #e0e0e0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.right {
    grid-column: 4 / span 2; /* A partir de la columna 4, usa 2 */
    background-color: #e0e0e0;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;


    background-image: url('img/pitchGreen.jpg'); /* Ruta a la imagen de fondo */
    background-size: 100% auto; /* La imagen ocupa el 100% del ancho del div */
    background-repeat: no-repeat; /* La imagen no se repite */
    background-position: left top;
}

.left input[type="text"], .center input[type="text"] {
    display: block;
    width: calc(100% - 20px);
    margin: 10px 0;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.team {
    margin-bottom: 20px;
}

.botones {
    text-align: center;
    margin-top: 20px;
}

.btnBorrar, .btnMezclar {
    margin: 5px;
}


.Botones5y8{
    margin: 0 10px;
}


