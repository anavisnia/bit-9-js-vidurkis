import { arPrasmingasSarasas, arNormalusSkaicius } from '../validacijos/validacijos.js'

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

    if(!arNormalusSkaicius(kiekkis, 'vidurkio rezultatas')) {
        return false;
    }

    return kiekkis;
}   

export { skaiciuKiekis }