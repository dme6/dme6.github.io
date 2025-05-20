const quotes = [
    "\"The only true wisdom is in knowing you know nothing.\" - Socrates",
    "\"It is the privilege of the gods to want nothing, and of godlike men to want little.\" - Diogenes of Sinope",
    "\"A tranquil heart gives life to the flesh, but envy makes the bones rot.\" - Proverbs 14:30"
];

const today = new Date();
const day_of_week = today.getDay();

let quote_sel = 0;

for(let i = 0; i < day_of_week; i++) {
    if(quote_sel < quotes.length - 1) quote_sel++;
    else quote_sel = 0;
}

document.getElementById("quote").innerText = quotes[quote_sel];