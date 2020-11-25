function arPrasmingasSarasas(sarasas) {
    if (!Array.isArray(sarasas)) {
        console.error('ERROR: duotas ne array.');
        return false;
    }
    if (sarasas.length === 0) {
        console.error('ERROR: duotas array yra tuscias.');
        return false;
    }
    return true;
}

function arNormalusSkaicius(skaicius, tikrinamoObjektoPavadinimas) {
    if (typeof tikrinamoObjektoPavadinimas !== 'string') {
        console.warn('WARNING: skaiciaus tipo tikrinimui nera duotas tikrinamo objekto pavadinimas');
        tikrinamoObjektoPavadinimas = 'reiksme/objektas';
    }
    if (typeof skaicius !== 'number') {
        // infinity and NaN paciopiemos
        console.error(`ERROR: gautos ${tikrinamoObjektoPavadinimas} nera skaiciaus tipo.`);
        return false;
    }
    if (!isFinite(skaicius)) {
        // infinity and NaN paciopiemos
        console.error(`ERROR: gautos ${tikrinamoObjektoPavadinimas} nera tikras skaicius.`);
        return false;
    }
    return true;
}

export { arPrasmingasSarasas, arNormalusSkaicius }