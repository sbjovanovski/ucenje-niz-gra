import {Card} from "./typings/types";
import {shape} from "canvas-confetti";

export const cards: Card[] = [
  {
    id: 1,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva01.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva01.png`,
    correctAnswer: 'авион',
    flipped: false
  },
  {
    id: 2,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva02.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva02.png`,
    correctAnswer: 'балон',
    flipped: false
  },
  {
    id: 3,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva03.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva03.png`,
    correctAnswer: 'врапче',
    flipped: false
  },
  {
    id: 4,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva04.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva04.png`,
    correctAnswer: 'гитара',
    flipped: false
  },
  {
    id: 5,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva05.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva05.png`,
    correctAnswer: 'дрво',
    flipped: false
  },
  {
    id: 6,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva06.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva06.png`,
    correctAnswer: 'ѓеврек',
    flipped: false
  },
  {
    id: 7,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva07.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva07.png`,
    correctAnswer: 'елка',
    flipped: false
  },
  {
    id: 8,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva08.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva08.png`,
    correctAnswer: 'жирафа',
    flipped: false
  },
  {
    id: 9,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva09.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva09.png`,
    correctAnswer: 'закачалка',
    flipped: false
  },
  {
    id: 10,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva010.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva010.png`,
    correctAnswer: 'ѕвоно',
    flipped: false
  },
  {
    id: 11,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva011.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva011.png`,
    correctAnswer: 'инка',
    flipped: false
  },
  {
    id: 12,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva012.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva012.png`,
    correctAnswer: 'јагода',
    flipped: false
  },
  {
    id: 13,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva013.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva013.png`,
    correctAnswer: 'куќа',
    flipped: false
  },
  {
    id: 14,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva014.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva014.png`,
    correctAnswer: 'лажица',
    flipped: false
  },
  {
    id: 15,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva015.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva015.png`,
    correctAnswer: 'љубичица',
    flipped: false
  },
  {
    id: 16,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva016.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva016.png`,
    correctAnswer: 'мравка',
    flipped: false
  },
  {
    id: 17,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva017.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva017.png`,
    correctAnswer: 'нос',
    flipped: false
  },
  {
    id: 18,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva018.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva018.png`,
    correctAnswer: 'коњ',
    flipped: false
  },
  {
    id: 19,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva019.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva019.png`,
    correctAnswer: 'оган',
    flipped: false
  },
  {
    id: 20,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva020.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva020.png`,
    correctAnswer: 'пингвин',
    flipped: false
  },
  {
    id: 21,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva021.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva021.png`,
    correctAnswer: 'радио',
    flipped: false
  },
  {
    id: 22,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva022.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva022.png`,
    correctAnswer: 'столица',
    flipped: false
  },
  {
    id: 23,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva023.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva023.png`,
    correctAnswer: 'тиква',
    flipped: false
  },
  {
    id: 24,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva024.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva024.png`,
    correctAnswer: 'ќуп',
    flipped: false
  },
  {
    id: 25,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva025.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva025.png`,
    correctAnswer: 'уста',
    flipped: false
  },
  {
    id: 26,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva026.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva026.png`,
    correctAnswer: 'фока',
    flipped: false
  },
  {
    id: 27,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva027.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva027.png`,
    correctAnswer: 'хеликоптер',
    flipped: false
  },
  {
    id: 28,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva028.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva028.png`,
    correctAnswer: 'цвет',
    flipped: false
  },
  {
    id: 29,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva029.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva029.png`,
    correctAnswer: 'четка',
    flipped: false
  },
  {
    id: 30,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva030.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva030.png`,
    correctAnswer: 'џамлија',
    flipped: false
  },
  {
    id: 31,
    frontImage: `${process.env.PUBLIC_URL}/card_images/front/bukva031.png`,
    backImage: `${process.env.PUBLIC_URL}/card_images/back/bukva031.png`,
    correctAnswer: 'шал',
    flipped: false
  }
]

const CONFETTI_SHAPES: shape[] = ["circle", "square"];

export const confettiProps = {
  particleCount: 500,
  angle: 90,
  spread: 360,
  startVelocity: 45,
  decay: 0.8,
  gravity: 1,
  drift: 0,
  ticks: 600,
  origin: {
    x: 0.5,
    y: 0.5,
  },
  colors: ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff'],
  shapes: CONFETTI_SHAPES,
  scalar: 1,
  zIndex: -1,
  disableForReducedMotion: false,
  resize: true,
  useWorker: true,
};