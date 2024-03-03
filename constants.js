// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["schemes"],
  ["Tamilnadu Schemes", "are you human", "are you bot", "are you human or bot"],
  ["Central Schemes"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["tamilnadu schemes"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["what", "why", "how", "where", "when"],
  ["no", "not sure", "maybe", "no thanks"],
  [""],
  ["haha", "ha", "lol", "hehe", "funny", "joke"]
];
const replies = [
  ["Hello! I am Government Scheme Chatbot How can I assist you today?"],
  ["Tamilnadu Schemes|| Central Schemes"],
  ["SC/st"],
  ["PM schemes"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  [`Hi Hope you are 
  doing well today 
  * hihihihi 
  * uvjaksnfgsvjb `, "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Great question"],
  ["That's ok","I understand","What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!","Good one!"]
]

// Random for any other user input

const alternative = [
  "I don't understand :/"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]

const inputs = [];
const response = [];
prompts.forEach((messageList, index) => {
  item= {
    Id: generateRandomId(),
    messages: messageList
  };
  item2  = {
    Id : item.Id,
    messages : replies[index]
  }
  inputs.push(item);
  response.push(item2);
});

function generateRandomId() {
  return Math.random().toString(36).substr(2, 9);
}

// function randomReply() {
//   arr = ['yggvubhn', 'asdfdghj', 'ctfvgunj'];
//   return random([arr]);
// }

// Possible responses, in corresponding order

