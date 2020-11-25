import { demoDuomenys } from '../../data/data.js';
import { arPrasmingasSarasas } from '../validacijos/validacijos.js'

function sarasoSuma (skaiciuSarasas) {
    if (!arPrasmingasSarasas(skaiciuSarasas)) {
        return false;
    }
    let sum = 0;
    for (let i = 0; i < skaiciuSarasas.length; i++ ) {
        let duom = demoDuomenys[i];

        if (typeof duom !== 'number') {
            console.warn('WARNING: skaiciu sarase rasta ne skaiciaus tipo reiksme. ');
            continue;
        }

        sum += duom;
    }

    if(!arNormalusSkaicius(suma, 'sumos rezultatas')) {
        return false;
    }

   return sum;
}

export { sarasoSuma }