document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // FECHA Y HORA
    // ===============================

    function actualizarHora() {

        const ahora = new Date();

        const opcionesFecha = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };

        document.getElementById("fecha").innerHTML =
            ahora.toLocaleDateString("es-ES", opcionesFecha);

        document.getElementById("hora").innerHTML =
            ahora.toLocaleTimeString("es-ES");

    }

    actualizarHora();

    setInterval(actualizarHora,1000);



    // ===============================
    // CALENDARIO
    // ===============================

    const calendarEl = document.getElementById("calendar");

    const calendar = new FullCalendar.Calendar(calendarEl, {

        locale: 'es',

        initialView: 'dayGridMonth',

        initialDate: '2026-07-01',

        height: "auto",

        headerToolbar: {

            left: 'prev,next today',

            center: 'title',

            right: 'dayGridMonth,timeGridWeek,listMonth'

        },

        buttonText: {

            today:'Hoy',

            month:'Mes',

            week:'Semana',

            list:'Lista'

        },



        // ===============================
        // EVENTOS
        // ===============================

        events: [

            {

                title: "Festival Nacional de la Pollera",
    start: "2026-07-18",
    color: "#d32f2f",

    extendedProps: {

        hora: "8:00 AM",

        lugar: "Las Tablas, Los Santos",

        responsable: "Carlos González",

        descripcion: "Cobertura especial del Festival Nacional de la Pollera. Se realizará transmisión en vivo desde el parque principal.",

        observaciones: "Llegar a las 7:00 AM. Preparar equipo de transmisión y coordinar entrevista con la reina del festival.",

        mapa: "https://maps.google.com",

        equipo: [
            "Carlos González",
            "Luis Rodríguez",
            "Ana Pérez",
            "Drone DJI",
            "Sony FX3",
            "Micrófonos",
            "Trípodes"
        ]


                }

            },



            {

                title:"",

                start:" ",

                color:"#1976d2",

                extendedProps:{

                    hora:" ",

                    lugar:" ",

                    responsable:" ",

                    descripcion:" ",

                    observaciones:" ",

                    mapa:"https://maps.google.com",

                    equipo:[
                        "Cámara Canon",
                        "Micrófonos",
                        "Luces LED"
                    ]

                }

            },



            {

                title:" ",

                start:"  ",

                color:"#f9a825",

                extendedProps:{

                    hora:" 1:00 pm ",

                    lugar:" ",

                    responsable:" ",

                    descripcion:" ",

                    observaciones:" ",

                    mapa:"https://maps.google.com",

                    equipo:[
                        "Sony FX30",
                        "Drone",
                        "Micrófono"
                    ]

                }

            }

        ],



        // ===============================
        // CLICK EN EVENTO
        // ===============================

        eventClick:function(info){

            document.getElementById("eventoTitulo").innerHTML =
                info.event.title;

            document.getElementById("eventoFecha").innerHTML =
                info.event.start.toLocaleDateString("es-ES");

            document.getElementById("eventoHora").innerHTML =
                info.event.extendedProps.hora;

            document.getElementById("eventoLugar").innerHTML =
                info.event.extendedProps.lugar;

            document.getElementById("eventoDescripcion").innerHTML =
                info.event.extendedProps.descripcion;

            document.getElementById("eventoResponsable").innerHTML =
                info.event.extendedProps.responsable;

            document.getElementById("eventoObservaciones").innerHTML =
                info.event.extendedProps.observaciones;

            document.getElementById("eventoMapa").href =
                info.event.extendedProps.mapa;



            let lista="";

            info.event.extendedProps.equipo.forEach(function(item){

                lista += "<li>"+item+"</li>";

            });

            document.getElementById("eventoEquipo").innerHTML = lista;

        }

    });

    calendar.render();

});
