import { sarasoSuma } from '../sumavimas/suma.js';
import { skaiciuKiekis } from '../skaciuKiekis/skaiciuKiekis.js'
import { arPrasmingasSarasas, arNormalusSkaicius } from '../validacijos/validacijos.js'

function vidurkis (skaiciuSarasas) {
    // logic
    if (!arPrasmingasSarasas(skaiciuSarasas)) {
        return false;
    }
    // logic
    const suma = sarasoSuma(skaiciuSarasas);
    const kiekis = skaiciuKiekis();
    const vid = suma / kiekis;

    // postlogic validation
    if(!arNormalusSkaicius(vid, 'vidurkio rezultatas')) {
        return false;
    }
    // return
    return vid;
}

export { vidurkis }