/* =========================================
   FILE: ROTTEN NIGHTMARE
   RXU CORPORATION WEBSITE
   ========================================= */


/* ---------- ENTITY COUNTER ---------- */

const entityCount = document.getElementById("entity-count");

let entities = 11;

function updateEntityCount() {

    if (!entityCount) return;

    entityCount.textContent = entities;

}

updateEntityCount();


/* ---------- TERMINAL RANDOM SIGNAL ---------- */

const terminalWarnings = [
    "UNKNOWN SIGNAL DETECTED",
    "CONTAINMENT FLUCTUATION",
    "UNVERIFIED ENTITY DETECTED",
    "DATABASE DESYNCHRONIZATION",
    "REMOTE RESPONSE: NONE",
    "CONTAINMENT PARAMETERS UNSTABLE"
];

const terminalWarningElement =
    document.querySelector(".terminal-warning");


function randomWarning() {

    if (!terminalWarningElement) return;

    const randomIndex =
        Math.floor(Math.random() * terminalWarnings.length);

    terminalWarningElement.textContent =
        "> " + terminalWarnings[randomIndex];

}


setInterval(randomWarning, 7000);


/* ---------- ARCHIVE ACCESS ---------- */

const unlockArchive =
    document.getElementById("unlockArchive");

const archiveMessage =
    document.getElementById("archiveMessage");


if (unlockArchive) {

    unlockArchive.addEventListener("click", function () {

        archiveMessage.textContent =
            "> ACCESS DENIED. CLEARANCE LEVEL 0.";

        unlockArchive.textContent =
            "ACCESS DENIED";

        unlockArchive.disabled = true;

        setTimeout(() => {

            archiveMessage.textContent =
                "> INCIDENT LOGGED.";

        }, 2500);

    });

}


/* ---------- RANDOM SYSTEM GLITCH ---------- */

function systemGlitch() {

    const elements = document.querySelectorAll(
        ".entity-card, .hero-terminal, .game-card"
    );

    if (elements.length === 0) return;

    const element =
        elements[Math.floor(Math.random() * elements.length)];

    element.style.transform =
        "translateX(" +
        (Math.random() * 4 - 2) +
        "px)";

    setTimeout(() => {

        element.style.transform = "";

    }, 100);

}


setInterval(systemGlitch, 8000);


/* ---------- CONSOLE MESSAGE ---------- */

console.log(
    "%cRXU CORPORATION",
    "font-size:20px;font-weight:bold;"
);

console.log(
    "Containment Operations System initialized."
);

console.log(
    "WARNING: Unauthorized access is prohibited."
);

console.log(
    "FILE: ROTTEN NIGHTMARE // SYSTEM ONLINE"
);


/* ---------- RANDOM DATABASE INTEGRITY ---------- */

const terminalContent =
    document.querySelector(".terminal-content");

if (terminalContent) {

    let integrity = 97.4;

    setInterval(() => {

        const variation =
            (Math.random() * 0.4) - 0.2;

        integrity += variation;

        integrity =
            Math.max(94, Math.min(99, integrity));

        const paragraphs =
            terminalContent.querySelectorAll("p");

        paragraphs.forEach(p => {

            if (
                p.textContent.includes(
                    "DATABASE INTEGRITY"
                )
            ) {

                p.innerHTML =
                    "> DATABASE INTEGRITY: " +
                    "<span>" +
                    integrity.toFixed(1) +
                    "%</span>";

            }

        });

    }, 5000);

}


/* ---------- SCROLL REVEAL ---------- */

const sections =
    document.querySelectorAll(".section");


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.1
        }

    );


sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);

});