const quotes = [
    {
        quote: "I never dreamed about success, I worked for it.",
        author: "Estee Lauder",
    },
    {
        quote: "Do not try to be original, just try to be good.",
        author: "Paul Rand",
    },
    {
        quote: "Do not be afraid to give up the good to go for the great.",
        author: "John D.Rockefeller",
    },
    {
        quote: "Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new.",
        author: "Brian Tracy",
    },
    {
        quote: "Don't let the fear of losing be greater than the excitement of winning.",
        author: "Robert Kiyosaki",
    },
    {
        quote: "Action is the foundational key to all success.",
        author: "Pablo Picasso",
    },
    {
        quote: "Be poor, humble and driven. Don't be afraid to shift or pivot.",
        author: "Alex Rodriguez",
    },
    {
        quote: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.",
        author: "Vince Lombardi",
    },
    {
        quote: "The way get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;