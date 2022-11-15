/* Exercie simple d'affichage d'une liste de recettes via un fichier Json */

import Recipe from './Recipe';

const eslintRelou = require('fs');

export default function displayRecipe(nameR : string, path: string) {
  const esliR = eslintRelou.readFileSync(path);
  const gro1 : Recipe = JSON.parse(esliR);

  for (const element in gro1) {
    if (gro1[element].name === nameR) {
      console.log(`==== ${gro1[element].name} ====`);
      for (let i = 0; i < gro1[element].ingredients.length; i += 1) {
        console.log(`- ${gro1[element].ingredients[i]}`);
      }

      return;
    }
  }
  console.log('No match.');
}
