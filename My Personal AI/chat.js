let chatBox = document.getElementById("chatBox");
document.getElementById("userName").innerText =
  localStorage.getItem("loggedUser") || "";
loadHistory();


const input = document.getElementById("msg");

input.addEventListener("keydown", function(event) {

    if(event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }

});

function toggleTheme() {
    document.body.classList.toggle("dark");
}

function sendMessage() {
  let input = document.getElementById("msg");
  let text = input.value.trim();
  if (!text) return;
  addMessage("user", text);
  let reply = getReply(text);
  setTimeout(() => {
    addMessage("bot", reply);
    saveHistory();
  }, 500);
  input.value = "";
}
function addMessage(type, text) {
  let d = document.createElement("div");
  d.className = type;
  d.innerText = text;
  chatBox.appendChild(d);
  chatBox.scrollTop = chatBox.scrollHeight;
}


function saveHistory() {
  localStorage.setItem("chatHistory", chatBox.innerHTML);
}

function loadHistory() {
  chatBox.innerHTML = localStorage.getItem("chatHistory") || "";
}

function newChat() {
  chatBox.innerHTML = "";
  localStorage.removeItem("chatHistory");
}

function logout() {
  window.location = "login.html";
}



function getReply(msg){

msg = msg.toLowerCase();

if(msg.includes("how are you"))
return "I am fine. How are you? 😊";

if(msg.includes("তুমি কে"))
return "আমি তোমার Personal AI Assistant 🤖";

if(msg.includes("তোমার নাম"))
return "আমার নাম AI Chat Assistant";

if(msg.includes("কেমন আছো"))
return "আমি ভালো আছি 😊";

if(msg.includes("bangladesh"))
return "Bangladesh is a beautiful country.";

if(msg.includes("বাংলাদেশ"))
return "বাংলাদেশের রাজধানী ঢাকা।";

if(msg.includes("html"))
return "HTML দিয়ে ওয়েবসাইটের কাঠামো তৈরি করা হয়।";

if(msg.includes("css"))
return "CSS দিয়ে ওয়েবসাইট ডিজাইন করা হয়।";

if(msg.includes("javascript"))
return "JavaScript দিয়ে ওয়েবসাইটে functionality যোগ করা হয়।";

if(msg.includes("python"))
return "Python একটি জনপ্রিয় programming language।";

if(msg.includes("time"))
return new Date().toLocaleTimeString();

if(msg.includes("date"))
return new Date().toLocaleDateString();

if(msg.includes("thanks"))
return "You're welcome ❤️";

if(msg.includes("thank you"))
return "My pleasure 😊";

if(msg.includes("bye"))
return "Good Bye 👋";

if(msg.includes("good night"))
return "Good Night 🌙";

if(msg.includes("good morning"))
return "Good Morning ☀️";

if(msg.includes("love"))
return "Love is a beautiful feeling ❤️";

if(msg.includes("weather"))
return "আমি ইন্টারনেট ছাড়া Live Weather বলতে পারি না।";

if(msg.includes("football"))
return "Football বিশ্বের অন্যতম জনপ্রিয় খেলা ⚽";

if(msg.includes("cricket"))
return "Cricket বাংলাদেশে খুবই জনপ্রিয় 🏏";

if(msg.includes("dhaka"))
return "Dhaka is the capital city of Bangladesh.";

if(msg.includes("who made you"))
return "আমাকে তোমার কোডের মাধ্যমে তৈরি করা হয়েছে 😄";

if(msg.includes("hello"))
return "Hello Friend 👋";

if(msg.includes("rabbi"))
return "তুমি আমার creator 😎";

if(msg.includes("manvir"))
return "I am married.";

if(msg.includes("asad"))
return "Ei salay gaja khor";

if(msg.includes("jubayer"))
return "luchha beda";

if(msg.includes("midul"))
return "2,3 TA GF ";

if(msg.includes("muni"))
return "I LOVE YOU ";

if(msg.includes("maria"))
return "I LOVE YOU ";

if(msg.includes("fazle"))
return "I LOVE YOU TOOOOOOOOOO ";


return "দুঃখিত, এই প্রশ্নের উত্তর এখনো আমার ডাটাবেজে নেই।";

}
