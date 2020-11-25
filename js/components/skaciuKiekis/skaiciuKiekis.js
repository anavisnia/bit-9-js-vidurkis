import { arPrasmingasSarasas, arPrasmingasSarasas } from '../validacijos/validacijos.js'

function skaiciuKiekis (skaiciuSarasas) {
    if (!arPrasmingasSarasas(skaiciuSarasas)) {
        return false;
    }

    let kiekkis = 0;

    for (let i=0; i<skaiciuSarasas.length; i++) {
        const skaicius = skaiciuSarasas[i];
        if (typeof skaicius !== 'number') {
            continue;
        }
        kiekkis++;
    }

    if (typeof kiekkis !== 'number') {
        // infinity and NaN paciopiemos
        console.error('ERROR: gautos kiekio rezultatas nera skaiciaus tipo.');
        return false;
    }
    if (!isFinite(kiekkis)) {
        // infinity and NaN paciopiemos
        console.error('ERROR: gautos kiekio rezultatas nera tikras skaicius.');
        return false;
    }
    return kiekkis;
}   

export { skaiciuKiekis }