const joke = document.getElementById("question");
const answer = document.getElementById("answer");
let joke_obj = generateMessage();
joke.innerText = joke_obj.question;
answer.innerText = joke_obj.answer + " 😄";
