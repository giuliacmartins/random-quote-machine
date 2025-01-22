import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const quotes = [
    { content: "The best way to predict the future is to create it.", author: "Abraham Lincoln" },
    { content: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { content: "I think, therefore I am.", author: "René Descartes" },
    { content: "To be or not to be, that is the question.", author: "William Shakespeare" },
    { content: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { content: "A rose by any other name would smell as sweet.", author: "William Shakespeare" },
    { content: "Ask not what your country can do for you; ask what you can do for your country.", author: "John Kennedy" },
    { content: "Hell is other people.", author: "Jean-Paul Sartre" },
    { content: "Houston, we have a problem.", author: "Jim Lovell" },
    { content: "I have always depended on the kindness of strangers.", author: "Blanche Dubois" },
    { content: "If you are going through hell, keep going.", author: "Winston Churchill" },
    { content: "If you want something done right, do it yourself.", author: "Charles-Guillaume Étienne" },
    { content: "I'll be back.", author: "Terminator" },
    { content: "Knowledge is power.", author: "Sir Francis Bacon" },
    { content: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein" },
    { content: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt" },
    { content: "Not all those who wander are lost.", author: "J. R. R. Tolkein" },
    { content: "Parting is such sweet sorrow", author: "	William Shakespeare" },
    { content: "That’s one small step for a man, a giant leap for mankind.", author: "Neil Armstrong" },
    { content: "The love of money is the root of all evil.", author: "the Bible" },
  ];

  function getRandomQuote() {
    setIsLoading(true);
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    setQuote(selectedQuote.content);
    setAuthor(selectedQuote.author);
    setIsLoading(false);
  }

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div id="quote-box">
      <div id="text">
        <p>{isLoading ? "Loading..." : quote}</p>
      </div>
      <div id="author">
        <p>{isLoading ? "" : `— ${author}`}</p>
      </div>
      <button
        id="new-quote"
        onClick={getRandomQuote}
      >
        New Quote
      </button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text="${quote}" — ${author}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet Quote
      </a>
    </div>
  );
}

export default App;