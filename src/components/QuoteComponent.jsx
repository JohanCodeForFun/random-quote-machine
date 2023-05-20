import { React, useEffect, useState } from "react";

const QuoteComponent = (props) => {
  // Quote Garden - A REST API for quotes.
  const API_ENDPOINT = "https://quote-garden.onrender.com/api/v3/quotes";

  const [qouteData, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQouteData = async () => {
      const response = await fetch(API_ENDPOINT);

      try {
        const responseJson = await response.json();
        const data = responseJson.data;
        setData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchQouteData();
  }, []);

  console.log(qouteData);

  const list = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
    },
    {
      title: "Vue",
      url: "https://vuejs.org",
      author: "Evan You",
    },
    {
      title: "Angular",
      url: "https://angular.io",
      author: "team of engineers...",
    },
  ];

  return (
    <>
      <div id="text">
        <h3>
          <p>
            {props.author}, {props.text}
          </p>
          &quot; Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          molestias quas obcaecati deleniti? &quot;
        </h3>
        <ul>{list.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}</ul>
        {/* {qouteData.map(qoute => {
        return (
          <li key={qoute._id}>{qoute.qouteText}</li>
        )
      })} */}
      </div>
      <div id="author">
        <p>- author</p>
      </div>
    </>
  );
};

export default QuoteComponent;
