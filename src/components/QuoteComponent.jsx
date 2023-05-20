import { useEffect, useRef, useState } from "react";

const QuoteComponent = () => {
  // Quote Garden - A REST API for quotes.
  const API_ENDPOINT = "https://quote-garden.onrender.com/api/v3/quotes";

  const [qouteData, setData] = useState(null);
  const [index, setIndex] = useState(0)

  let qouteLength = useRef(0);
  let tweetUrl = "twitter.com/intent/tweet"

  const getRandomQoute = () => {
    setIndex(Math.floor(Math.random() * (qouteLength.current - 0) + 0))
  }

  useEffect(() => {

    const fetchQouteData = async () => {
      const response = await fetch(API_ENDPOINT);

      try {
        const responseJson = await response.json();
        const data = responseJson.data;
        qouteLength.current = data.length
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
        <h3>&quot;{qouteData ? qouteData[index].quoteText : "Loading random quote..."}&quot;</h3>
      </div>
      <div id="author">
        <p>- {qouteData ? qouteData[index].quoteAuthor : "Loading author..."}</p>
      </div>
      <div id="button-box">
      {qouteData ? <a href={tweetUrl+qouteData[index].quoteText} target="_blank" rel="noreferrer" id="tweet-quote">
      <button className="btn">tweet</button>
      </a> 
      : <a href="" id="tweet-quote">
          <button className="btn">tweet</button>
        </a> }
        <button className="btn" id="new-quote" onClick={getRandomQoute}>new qoute</button>
      </div>
    </>
  );
};

export default QuoteComponent;
