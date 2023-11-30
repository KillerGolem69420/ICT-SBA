// Question-Response Database
var questionDatabase = [
    {
      question: "how to play darts",
      response: "Darts is a game played with small missiles called darts. Players throw these darts at a circular target board, aiming to score points."
    },
    {
      question: "what is the scoring system in darts",
      response: "In a standard game of darts, the scoring is based on hitting specific areas of the board. The outer ring scores double the segment's value, while the inner ring (also known as the triple ring) scores triple the segment's value."
    },
    {
      question: "how far should the dartboard be from the throw line",
      response: "The standard distance between the front of the dartboard and the oche (throw line) is 7 feet 9.25 inches (2.37 meters)."
    },
    {
      question: "what are the different dart game variations",
      response: "There are several dart game variations, including 501, Cricket, Around the Clock, Shanghai, and more. Each game has its own rules and objectives. Which specific game would you like to know more about?"
    },
    {
      question: "how many segments does a standard dartboard have",
      response: "A standard dartboard has 20 numbered segments, ranging from 1 to 20. Additionally, it has a bullseye in the center, which is divided into an outer bull and an inner bull."
    },
    {
      question: "what is the highest possible score in darts",
      response: "The highest possible score in darts is achieved by hitting three triple 20 segments in a single turn, which awards 180 points. However, in some game variations, like 501, it is possible to score more than 180 points in a single visit."
    },
    {
      question: "how to choose the right dart for me",
      response: "Choosing the right dart depends on personal preference. Factors to consider include the weight, shape, grip, and balance of the dart. It's recommended to try different darts and see which one feels comfortable and suits your throwing style."
    },
    {
      question: "what are the different parts of a dart",
      response: "A dart consists of several parts, including the point, barrel, shaft, and flight. The point is the tip of the dart that sticks into the board. The barrel is the main body of the dart that you hold. The shaft connects the barrel to the flight, which is the fin-like component at the back of the dart."
    },
    {
      question: "what is the standard weight of a dart",
      response: "The standard weight of a dart varies, but it typically falls between 18 grams to 26 grams. However, players have different preferences, and the weight of the dart you choose depends on your throwing style and comfort."
    },
    {
      question: "how to improve my dart throwing accuracy",
      response: "Improving dart throwing accuracy takes practice and consistency. Some tips include focusing on your stance, grip, and release technique. It's also helpfulto establish a consistent throwing rhythm and aim for specific target areas on the dartboard. Regular practice and analyzing your throws can help identify areas for improvement and allow you to refine your technique."
    },
    {
      question: "nigger",
      response: "I'm not nigger. You're nigger!"
    }
];

function sendMessage() {
    var userInput = document.getElementById("userInput");
    var chatWindow = document.getElementById("chatWindow");
    
    var userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.innerHTML = "<p>" + userInput.value + "</p>";
    chatWindow.appendChild(userMessage);
    
    var botResponse = getBotResponse(userInput.value);
    
    var botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");
    botMessage.innerHTML = "<p>" + botResponse + "</p>";
    chatWindow.appendChild(botMessage);
    
    chatWindow.scrollTop = chatWindow.scrollHeight;
    
    userInput.value = "";
}

function getBotResponse(userMessage) {
    var botResponse = "I'm sorry, I don't have information on that topic. Please ask another question about darts.";
    
    // Search the question database for a matching question
    for (var i = 0; i < questionDatabase.length; i++) {
      var questionObj = questionDatabase[i];
      
      if (userMessage.toLowerCase().includes(questionObj.question)){
        botResponse = questionObj.response;
        break;
      }
    }
    
    return botResponse;
}

function handleKeyPress(event) {
    let key = event.key;
    if (key == "Enter") {
      sendMessage();
      event.preventDefault(); // Prevents adding a line break in the input field
    }
}