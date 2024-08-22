let index;

let jokes = [
  {
    question: "What do you call fake spaghetti?An impasta.",
    answer: "Why don't eggs tell jokes?They'd crack each other up.",
  },

  {
    question: "What do you call a bear with no teeth?",
    answer: "A gummy bear!",
  },
  {
    question: "What do you call a pile of cats?",
    answer: "A meowtain.",
  },
  {
    question: "What do you call a belt made out of watches?",
    answer: "A waist of time.",
  },
  {
    question: "Why did the math book look sad?",
    answer: "Because it had too many problems.",
  },
  {
    question: "How does a penguin build its house?",
    answer: "Igloos it together.",
  },
  {
    question: "What do you get when you cross a snowman and a vampire?",
    answer: " Frostbite.",
  },
  { question: "Why was the broom late?", answer: "It swept in!" },
  {
    question: "What did one wall say to the other wall?",
    answer: "I’ll meet you at the corner!",
  },
  { question: "What’s orange and sounds like a parrot?", answer: "A carrot!" },
  {
    question: "Why couldn’t the leopard play hide and seek?",
    answer: "Because he was always spotted!",
  },
];

const generateIndex = () => Math.ceil(Math.random() * 9);

const generateMessage = () => {
  index = generateIndex();
  return jokes[index];
};

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("answer").classList.remove("hidden");
  }, 2000); // 2000 milliseconds = 2 seconds
});
