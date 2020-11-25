import { demoDuomenys } from './data/data.js';
import { vidurkis } from './components/vidurkis/vidurkis.js';

const ats = vidurkis(demoDuomenys);
console.log(ats);
console.log(`Is pateiktu ${demoDuomenys.length} skaiciai, vidurkis gaunasi: ${ats}.`);
const atsString = `Is pateiktu ${demoDuomenys.length} skaiciai, vidurkis gaunasi: ${ats}.`;

const rez1DOM = document.querySelector('#ats');
rez1DOM.innerText = ats;