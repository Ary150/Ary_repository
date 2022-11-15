const readLine = require('readline-sync');

interface Question {
  question: string,
  answer: boolean,
}

function testFaith(questions: Question[]) {
  let answer: string;
  for (let i = 0; i < questions.length; i += 1) {
    answer = readLine.question(`${questions[i].question} [y/n]:`);
    if (questions[i].answer === (answer === 'y')) {
      console.log('Correct answer.');
    } else {
      console.log('The answer is wrong!');
      return;
    }
  }
}

export default testFaith;


//Jeux d'essai
  
 /* const questionsList: Question[] = [
    {
      question: 'The Four Champions are named Urbosa, Daruk, Revali and Malon. Yes or no?',
      answer: false,
    },
    {
      question: 'The Divine Beast Vah Medoh resembles an elephant. Yes or no?',
      answer: false,
    },
    {
      question: 'The King of Hyrule is named King Rhoam? Yes or no?',
      answer: true,
    },
  ];
*/