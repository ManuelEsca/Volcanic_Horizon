/* ========================================
   VOLCANIC HORIZON TRAVEL
   SIMULADOR DE VIAJES
======================================== */

/* ========================================
   OBTENER ELEMENTOS DEL HTML
======================================== */

const formulario = document.getElementById("travelForm");

const resultado = document.getElementById("resultado");

/* ========================================
   EVENTO DEL FORMULARIO
======================================== */

formulario.addEventListener("submit", function(event) {

    // Evita que la página se recargue
    event.preventDefault();

    /* ========================================
       OBTENER LOS DATOS DEL USUARIO
    ======================================== */

    const nombre =
        document.getElementById("nombre").value.trim();

    const presupuesto =
        Number(document.getElementById("presupuesto").value);

    const personas =
        Number(document.getElementById("personas").value);

    const dias =
        Number(document.getElementById("dias").value);

    const tiempo =
        Number(document.getElementById("tiempo").value);

    const turismo =
        document.getElementById("turismo").value;

    /* ========================================
       VALIDACIÓN
    ======================================== */

    if (
        nombre === "" ||
        presupuesto <= 0 ||
        personas <= 0 ||
        dias <= 0 ||
        tiempo <= 0 ||
        turismo === ""
    ) {

        resultado.innerHTML = `
            <div class="empty">

                <span>⚠️</span>

                <h3>
                    Datos incompletos
                </h3>

                <p>
                    Por favor, completa todos los campos
                    correctamente.
                </p>

            </div>
        `;

        return;
    }

    /* ========================================
       DETERMINAR CATEGORÍA DEL PRESUPUESTO
    ======================================== */

    let categoriaPresupuesto;

    if (presupuesto <= 3000) {

        categoriaPresupuesto =
            "Destino económico";

    } else if (presupuesto <= 8000) {

        categoriaPresupuesto =
            "Destino nacional";

    } else {

        categoriaPresupuesto =
            "Destino premium";

    }

    /* ========================================
       DETERMINAR TRANSPORTE
    ======================================== */

    let transporte;

    if (tiempo <= 2) {

        transporte =
            "Avión";

    } else if (tiempo <= 4) {

        transporte =
            "Avión económico o autobús";

    } else {

        transporte =
            "Autobús";

    }

    /* ========================================
       RECOMENDACIONES
    ======================================== */

    let recomendacion;

    /* PLAYA */

    if (turismo === "playa") {

        recomendacion = {

            nombre: "Experiencia de Playa",

            lugares: [
                "Cancún, Quintana Roo",
                "Puerto Escondido, Oaxaca",
                "Mazatlán, Sinaloa"
            ],

            imagen:
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"

        };

    }

    /* AVENTURA */

    else if (turismo === "aventura") {

        recomendacion = {

            nombre: "Aventura y Naturaleza",

            lugares: [
                "Volcán de Colima",
                "Barrancas del Cobre, Chihuahua",
                "Huasteca Potosina"
            ],

            imagen:
                "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&q=85"

        };

    }

    /* CULTURAL */

    else if (turismo === "cultural") {

        recomendacion = {

            nombre: "Turismo Cultural",

            lugares: [
                "Ciudad de México",
                "Oaxaca de Juárez",
                "Guanajuato"
            ],

            imagen:
                "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=1200&q=85"

        };

    }

    /* RELIGIOSO */

    else if (turismo === "religion") {

        recomendacion = {

            nombre: "Turismo Religioso",

            lugares: [
                "Basílica de Guadalupe",
                "San Juan de los Lagos",
                "Cristo Rey, Guanajuato"
            ],

            imagen:
                "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1200&q=85"

        };

    }

    /* RELAJACIÓN */

    else if (turismo === "relajacion") {

        recomendacion = {

            nombre: "Relajación y Bienestar",

            lugares: [
                "Tepoztlán, Morelos",
                "Valle de Bravo",
                "Bacalar, Quintana Roo"
            ],

            imagen:
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85"

        };

    }

    /* ========================================
       CREAR LISTA DE DESTINOS
    ======================================== */

    let listaDestinos = "";

    recomendacion.lugares.forEach(function(lugar) {

        listaDestinos += `
            <li>
                📍 ${lugar}
            </li>
        `;

    });

    /* ========================================
       MOSTRAR RESULTADO
    ======================================== */

    resultado.innerHTML = `

        <span
            class="section-label"
            style="color:#ffd6b8"
        >
            RECOMENDACIÓN VOLCANIC HORIZON TRAVEL
        </span>

        <h3>
            ¡Hola, ${nombre}! 🌋✈️
        </h3>

        <p>
            Hemos analizado la información de tu viaje
            y encontramos una experiencia que puede
            adaptarse a tus preferencias.
        </p>

        <img
            class="result-image"
            src="${recomendacion.imagen}"
            alt="${recomendacion.nombre}"
        >

        <ul>

            <li>
                👥
                <strong>
                    Número de viajeros:
                </strong>

                ${personas}
            </li>

            <li>
                📅
                <strong>
                    Duración:
                </strong>

                ${dias} días
            </li>

            <li>
                💰
                <strong>
                    Presupuesto:
                </strong>

                $${presupuesto.toLocaleString("es-MX")} MXN
            </li>

            <li>
                🎯
                <strong>
                    Tipo de turismo:
                </strong>

                ${recomendacion.nombre}
            </li>

            <li>
                💎
                <strong>
                    Categoría:
                </strong>

                ${categoriaPresupuesto}
            </li>

            <li>
                🚌
                <strong>
                    Transporte sugerido:
                </strong>

                ${transporte}
            </li>

        </ul>

        <h3 style="margin-top:25px;">
            📍 Destinos sugeridos
        </h3>

        <ul>
            ${listaDestinos}
        </ul>

        <p style="margin-top:25px;">

            🌎
            <strong>
                Volcanic Horizon Travel
            </strong>

            <br>

            A Descubre el mundo más allá de los volcanes.

        </p>

    `;

    /* ========================================
       DESPLAZAR LA PÁGINA AL RESULTADO
    ======================================== */

    resultado.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

});
