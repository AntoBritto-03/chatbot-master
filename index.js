function onTextEnter (e) {
  if (e.code === "Enter") {
    let input = inputField.value;
    inputField.value = "";
    output(input);
  }
}

function onDomRender () {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", onTextEnter);
}
document.addEventListener("DOMContentLoaded", onDomRender);

function output(input) {
  let product;

  // Regex remove non word/space chars
  // Trim trailing whitespce
  // Remove digits - not sure if this is best
  // But solves problem of entering something like 'hi1'

  let text = input?.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you")
    .replace(/r/g, 'are');

  if (compare(inputs, response, text)) { 
    // Search for exact match in `inputs`
    product = compare(inputs, response, text);
  } else if (text.match(/thank/gi)) {
    product = ["You're welcome!"]
  } else if (text.match(/(corona|covid|virus)/gi)) {
    // If no match, check if message contains `coronavirus`
    product = [coronavirus[Math.floor(Math.random() * coronavirus.length)]];
  } else {
    // If all else fails: random alternative
    product = [alternative[Math.floor(Math.random() * alternative.length)]];
  }

  // Update DOM
  addChat(input, product);
}

function compare(promptsArray, repliesArray, string) {
  if (!string) return;

  let reply = null; // Initialize reply to null
  for (let x = 0; x < promptsArray?.length; x++) {
    const prompt = promptsArray[x];
    const response = repliesArray[x];

    // Check if the prompt's messages array includes the input string
    if (prompt.messages.includes(string)) {
      // Ensure replies array exists and has the same length as prompts array
      if (response && response.Id === prompt.Id) {
        reply = response.messages; // Assign the corresponding reply
        break; // Exit loop if reply is found
      }
    }
  }
  return reply;
}


function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.className = "bot-response";

  // Check if product length is greater than one
  if (product.length > 1) {
    const ul = document.createElement("ul");
    ul.className = "bot-response"; // Add class to the ul
    product.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    botText.appendChild(ul);
  } else {
    botText.innerText = product[0]; // Assuming product is an array
  }
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);

  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Fake delay to seem "real"
  setTimeout(() => {
    messagesContainer.appendChild(botDiv);
    botText.innerText = `${product}`;
    //textToSpeech(product)
  }, 3000);
}