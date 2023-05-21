import { useEffect, useRef, useState } from "react";

const QuoteComponent = () => {
  // Quote Garden - A REST API for quotes.
  const API_ENDPOINT = "https://quote-garden.onrender.com/api/v3/quotes";

  const [quoteData, setData] = useState(null);
  const [index, setIndex] = useState(0);

  let quoteLength = useRef(0);
  let tweetUrl = "https://twitter.com/intent/tweet?hashtags=quotes&text=%22";

  const getRandomQuote = () => {
    setIndex(Math.floor(Math.random() * quoteLength.current));
  };

  useEffect(() => {
    const fetchQouteData = async () => {
      const response = await fetch(API_ENDPOINT);

      try {
        const responseJson = await response.json();
        const data = responseJson.data;
        quoteLength.current = data.length;
        setData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchQouteData();
  }, []);

  return (
    <>
      <div id="text">
        <h3>
          &quot;
          {quoteData ? quoteData[index].quoteText : "Loading random quote..."}
          &quot;
        </h3>
      </div>
      <div id="author">
        <p>
          - {quoteData ? quoteData[index].quoteAuthor : "Loading author..."}
        </p>
      </div>
      <div id="button-box">
        {quoteData ? (
          <a
            href={tweetUrl +
              quoteData[index].quoteText.replace(/ /g, "%20") +
              "%22" +
              quoteData[index].quoteAuthor.replace(/ /g, "%20")}
            target="_blank"
            rel="noreferrer"
            id="tweet-quote"
          >
            <button className="btn">tweet</button>
          </a>
        ) : (
          <a href="" id="tweet-quote">
            <button className="btn">tweet</button>
          </a>
        )}
        <button className="btn" id="new-quote" onClick={getRandomQuote}>
          new quote
        </button>
      </div>
    </>
  );
};

export default QuoteComponent;
