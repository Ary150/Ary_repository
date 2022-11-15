import { clear, Console } from 'console';
import { parseJsonFile,beginGameEnemy,freeFight,getRandomRarity,beginGameHero,freeHeal,menuQuestion } from './source/functionG';
import { EnemyJson, Enemy, Hero } from './source/objectChara';

const esl = require('fs');
const readline = require('readline-sync');
// --------------------------------------------------------------------------------

export function modCustimizations(){
    let i = 1;
    let y = 0;
    let coin = 12;
    const enemy1 = parseJsonFile('tab', './file_json/enemies.json');
    const boss1 = parseJsonFile('tab', './file_json/bosses.json');
    const player1 = parseJsonFile('tab', './file_json/players.json');
    let enemyRandom1 :EnemyJson = getRandomRarity(enemy1);
  const bosseRandom1 : EnemyJson = getRandomRarity(boss1);
  const playerRandom1 : EnemyJson = getRandomRarity(player1);
  console.clear();
  console.log('\x1b[33m\x1b[45m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\x1b[0m\x1b[0m');
  console.log(`\x1b[33m\x1b[45m-------------------------THE LOST ELFO-------------------------\x1b[0m\x1b[0m`);
  console.log('\x1b[33m\x1b[45m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\x1b[0m\x1b[0m');

 
    const answerModMenu = menuQuestion(['\x1b[31m Normal \x1b[0m', '\x1b[32m Difficile \x1b[0m', '\x1b[32m Folie Furieuse\x1b[0m']);
    const answerNbLevelMenu = menuQuestion(['\x1b[31m 10 \x1b[0m', '\x1b[32m 20 \x1b[0m','\x1b[32m 50 \x1b[0m', '\x1b[32m 100 \x1b[0m']);

    if (answerModMenu === 1) {
      enemyRandom1.hp *= (3 / 2);
      enemyRandom1.str *= (3 / 2);
      bosseRandom1.hp *= (3 / 2);
      bosseRandom1.str *= (3 / 2);
    }
    if (answerModMenu === 2) {
      enemyRandom1.hp *= (2);
      enemyRandom1.str *= (2);
      bosseRandom1.hp *= (2);
      bosseRandom1.str *= (2);
    }
    if(answerNbLevelMenu === 0){
        y = 10;
    }
    if (answerNbLevelMenu === 1) {
      y = 20;
    }
    if (answerNbLevelMenu === 2) {
      y = 50;
    }
    if (answerNbLevelMenu === 3) {
      y = 100;
    }
    const hpBeforeGame = playerRandom1.hp;
    const enemyRandom2HP = enemyRandom1.hp;

    console.clear();
    console.log('\x1b[33m\x1b[45m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\x1b[0m\x1b[0m');
    console.log(`\x1b[33m\x1b[45m-------------------------THE LOST ELFO-------------------------\x1b[0m\x1b[0m`);
    console.log('\x1b[33m\x1b[45m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\x1b[0m\x1b[0m');


    while ((playerRandom1.hp >= 0 || enemyRandom1.hp >= 0) && i < y) {
        console.log(`\x1b[31m\x1b[47m ====== Niveau ${i} ====== \x1b[0m\x1b[0m`);
        console.log('Tu as : '+coin+' coin !!');
        
        console.log('Nouvel Ennemi!');
        console.log(`Ses Stats:`);
        console.log(`Nom: ${enemyRandom1.name}`);
        console.log(`Force: ${enemyRandom1.str}`);
        console.log(`\x1b[32mTes PV : ${playerRandom1.hp}\x1b[0m`);
        const answer = menuQuestion(['\x1b[31m MACHETTE \x1b[0m', '\x1b[32m GUINESS \x1b[0m']);

      if (answer === 0) {
        freeFight(enemyRandom1, playerRandom1);
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
      }
      if (answer === 1 && playerRandom1.hp < hpBeforeGame) {
        freeHeal(enemyRandom1, playerRandom1, hpBeforeGame);
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
      } if (answer === 1 && playerRandom1.hp >= hpBeforeGame) {
        console.log('\x1b[1mTa santé est pleine!\x1b[0m');
      }
      if (answer === -1) {
        console.log('\x1b[33mDommage, reviens quand tu seras plus fort...\x1b[0m');
        console.clear();
        break;
      }
      if (playerRandom1.hp <= 0) {
        console.log(`\x1b[33mTu n'es pas l'élu. Adieu.\x1b[0m`);
        break;
      }
      if (enemyRandom1.hp <= 0) {
        console.log('Tu te débrouilles bien petit Lutin');
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
        i += 1;
        coin +=1;
        enemyRandom1.hp = enemyRandom2HP;
        console.log('-----------------------------------------------------------------------------------------------');
        console.clear();
        // eslint-disable-next-line no-continue
        continue;
      }
      if (i === 10 || i === 20 || i === 30 || i === 40 || i === 50 || i === 60 || i === 70 || i === 80 ||i === 90 || i ===100) {
        enemyRandom1 = bosseRandom1;
        console.log(`^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`);
        console.log(`Dernier étage mon Lutin! Tu affrontes ${bosseRandom1.name}, de force égale à ${bosseRandom1.str}`);
        console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
        // eslint-disable-next-line no-continue
        continue;
      }
    }
 
}