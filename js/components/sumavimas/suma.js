
import { arPrasmingasSarasas, arNormalusSkaicius } from '../validacijos/validacijos.js'

function sarasoSuma (skaiciuSarasas) {
    if (!arPrasmingasSarasas(skaiciuSarasas)) {
        return false;
    }
    let sum = 0;
    for (let i = 0; i < skaiciuSarasas.length; i++ ) {
        let skaicius = skaiciuSarasas[i];

        if (typeof skaicius !== 'number') {
            console.warn('WARNING: skaiciu sarase rasta ne skaiciaus tipo reiksme. ');
            continue;
        }

        sum += skaicius;
    }

    if(!arNormalusSkaicius(sum, 'sumos rezultatas')) {
        return false;
    }

   return sum;
}

export { sarasoSuma }