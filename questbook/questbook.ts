const eslintEx = require('fs');
function verifJson(fichierJson : string) {
  try {
    const esliR = eslintEx.readFileSync(fichierJson);
    return (JSON.parse(esliR));
  } catch (error) {
    console.error('Wrong use of the program.');
    return (null);
  }
}

export default function displayRecipe() {
  // argu = process.argv[2];
  const param1 = process.argv.slice(2);

  const param = verifJson(param1[param1.length-1]);
  
  // argu = param[0];

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
  // gestion --list ---------------------------------------
  if (param[0] === '--list') {
    const exjson = param[1].split('.').pop();
    if (exjson === 'json') {
      console.log('Using list.');
    } else {
      console.error('Wrong use of the program.');
    }
  }
  // fin gestion --list -----------------------------------
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
displayRecipe();
