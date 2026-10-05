/* ==========================================
   FILE: ROTTEN NIGHTMARE
   RXU CORPORATION
========================================== */


/* ==========================================
   LANGUAGE SYSTEM
========================================== */

let currentLanguage = "es";


const langES =
    document.getElementById("langES");

const langEN =
    document.getElementById("langEN");


function setLanguage(language) {

    currentLanguage = language;

    document.documentElement.lang =
        language;


    const elements =
        document.querySelectorAll(
            "[data-es][data-en]"
        );


    elements.forEach(element => {

        const translation =
            element.getAttribute(
                "data-" + language
            );


        if (!translation)
            return;


        /*
         * IMPORTANTE:
         *
         * Solo reemplazamos el texto
         * de elementos que no contienen
         * otros elementos HTML.
         */

        if (
            element.children.length === 0
        ) {

            element.textContent =
                translation;

        }

    });


    if (language === "es") {

        langES.classList.add(
            "active"
        );

        langEN.classList.remove(
            "active"
        );

    }


    if (language === "en") {

        langEN.classList.add(
            "active"
        );

        langES.classList.remove(
            "active"
        );

    }

}


/* ==========================================
   LANGUAGE BUTTONS
========================================== */

langES.addEventListener(
    "click",
    function() {

        setLanguage("es");

    }
);


langEN.addEventListener(
    "click",
    function() {

        setLanguage("en");

    }
);


/* ==========================================
   DATABASE INTEGRITY
========================================== */

const integrity =
    document.getElementById(
        "integrity"
    );


let databaseIntegrity = 97.4;


function updateIntegrity() {

    if (!integrity)
        return;


    const variation =
        (Math.random() * .4) - .2;


    databaseIntegrity +=
        variation;


    databaseIntegrity =
        Math.max(
            94,
            Math.min(
                99,
                databaseIntegrity
            )
        );


    integrity.textContent =
        databaseIntegrity.toFixed(1)
        + "%";

}


setInterval(
    updateIntegrity,
    4000
);


/* ==========================================
   ENTITY GLITCH
========================================== */

const entityCards =
    document.querySelectorAll(
        ".entity-card"
    );


function randomGlitch() {

    if (
        entityCards.length === 0
    )
        return;


    const card =
        entityCards[
            Math.floor(
                Math.random()
                * entityCards.length
            )
        ];


    card.style.transform =
        "translateX(-2px)";


    setTimeout(
        () => {

            card.style.transform =
                "translateX(2px)";

        },
        60
    );


    setTimeout(
        () => {

            card.style.transform =
                "";

        },
        120
    );

}


setInterval(
    randomGlitch,
    7000
);


/* ==========================================
   DOWNLOAD BUTTONS
========================================== */

const downloadOptions =
    document.querySelectorAll(
        ".download-option"
    );


downloadOptions.forEach(
    option => {

        option.addEventListener(
            "click",
            function(event) {

                const link =
                    this.getAttribute(
                        "href"
                    );


                /*
                 * Mientras el enlace sea "#",
                 * mostramos que todavía
                 * no está disponible.
                 */

                if (
                    link === "#"
                ) {

                    event.preventDefault();


                    const platform =
                        this.dataset.platform;


                    if (
                        currentLanguage === "es"
                    ) {

                        alert(
                            "La descarga para "
                            + platform
                            + " todavía no está disponible."
                        );

                    } else {

                        alert(
                            "The "
                            + platform
                            + " download is not available yet."
                        );

                    }

                }

            }
        );

    }
);


/* ==========================================
   SCROLL REVEAL
========================================== */

const sections =
    document.querySelectorAll(
        ".section"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },
        {
            threshold: .08
        }
    );


sections.forEach(
    section => {

        section.style.opacity =
            "0";

        section.style.transform =
            "translateY(20px)";

        section.style.transition =
            "opacity .8s ease, transform .8s ease";

        observer.observe(
            section
        );

    }
);


/* ==========================================
   CONSOLE
========================================== */

console.log(
    "%cRXU CORPORATION",
    "color:#b00000;font-size:24px;font-weight:bold;"
);


console.log(
    "%cFILE: ROTTEN NIGHTMARE",
    "color:#777;font-size:14px;"
);


console.log(
    "RXU Containment Operations System initialized."
);


console.log(
    "WARNING: Unauthorized access is prohibited."
);


console.log(
    "Convergences detected: 12"
);
