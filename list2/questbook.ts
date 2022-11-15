import { Objjson } from './questList';

const eslintEx = require('fs');

export default function displayRecipe(path : string) {
  const param = process.argv.slice(2);
  const esliR = eslintEx.readFileSync(path);
  const gro2 : Objjson [] = JSON.parse(esliR);
  const listState0 = [];
  const listState1 = [];
  const listState2 = [];

  // gestion --list ---------------------------------------
  if (param[0] === '--list') {
    const exjson = param[1].split('.').pop();
    if (exjson === 'json') {
      for (const elem of gro2) {
        if (elem.completion_state === 0) {
          listState0.push(`#${elem.id} ${elem.name}`);
        }
        if (elem.completion_state === 1) {
          listState1.push(`#${elem.id} ${elem.name}`);
        }
        if (elem.completion_state === 2) {
          listState2.push(`#${elem.id} ${elem.name}`);
        }
      }
      if (listState0.length > 0) {
        console.log('=== Ongoing ===');
        for (let i = 0; i < listState0.length; i += 1) {
          console.log(listState0[i]);
        }
      }
      if (listState1.length > 0) {
        console.log('=== Complete ===');
        for (let i = 0; i < listState1.length; i += 1) {
          console.log(listState1[i]);
        }
      }
      if (listState2.length > 0) {
        console.log('=== Failed ===');
        for (let i = 0; i < listState2.length; i += 1) {
          console.log(listState2[i]);
        }
      }
    }
  } else {
    console.error('Wrong use of the program.');
  }

  // fin gestion --list -----------------------------------

  // gestion --info -----------------------------------
  if (param[0] === '--info') {
    const idi = parseInt(param[1], 10);
    const exjson = param[1].split('.').pop();

    if (typeof idi === 'number' && !Number.isNaN(idi) && exjson === 'json') {
      console.log('Using info.');
    } else {
      console.error('Wrong use of the program.');
    }
  }
  // fin gestion --info -----------------------------------

  if (param[0] === '--add') {
    const listVerifADD = [];
    for (let i = 0; i < param.length; i += 1) {
      // gestion --add ----------------------------------
      if (param[1] === '-name') {
        listVerifADD.push(param[2]);
        param.splice(1, 2);
      }
      if (param[1] === '-desc') {
        listVerifADD.push(param[2]);
        param.splice(1, 2);
      }
      if (param[1] === '-type') {
        listVerifADD.push(param[2]);
        param.splice(1, 2);
      }
      const idi = parseInt(param[2], 10);
      if (param[1] === '-completion' && !Number.isNaN(idi) && typeof idi === 'number') {
        listVerifADD.push(param[2]);
        param.splice(1, 2);
      }
      if (param[1] === '-giver') {
        listVerifADD.push(param[2]);
        param.splice(1, 2);
      }
      if (param[1] === '-start_date' && !Number.isNaN(idi) && typeof idi === 'number') {
        listVerifADD.push(param[1]);
        param.splice(1, 2);
      }
      if (param[1] === '-end_date' && typeof idi === 'number') {
        listVerifADD.push(param[1]);
        param.splice(1, 2);
      }
      if (param[1] === '-reward' && param[2].endsWith('.json')) {
        listVerifADD.push(param[1]);
        param.splice(1, 2);
      }
    } if (listVerifADD.length === 8) {
      console.log('Using add.');
    } else {
      console.error('Wrong use of the program.');
    }
  }
  // fin gestion --add ---------------------------------
}
displayRecipe('./questbook.json');
