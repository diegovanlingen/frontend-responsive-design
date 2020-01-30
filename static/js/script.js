var button = document.querySelector('main button'); // selecteer de button in de main (toon meer recepten button)
var verborgenRecepten = document.querySelectorAll('main .verborgen') // lijst van verborgen recepten >> [artikel1, artikel2, artikel3, artikel4]

function toonMeerRecepten() { // voert pas uit als op de button geklikt wordt
    
    // Bron loop: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
    for(var i = 0; i < 4; i++) { // in deze loop zetten we de iteratie (i) op 0, en elke keer komt er 1 bij (i++) tot hij klaar is (< 4)
        // i in de loop is eerst 0, dan 1 dan 2 dan 3. Dus wordt bij elke losse verborgen artikel de class 'verborgen' weggehaald
        verborgenRecepten[i].classList.remove('verborgen')
    }
    
    // er zijn niet meer artikelen te showen, dus verberg button
    button.classList.add('verborgen')
}

// Wanneer iemand op de toon meer recepten button drukt, voer toonMeerRecepten uit
button.addEventListener('click', toonMeerRecepten);