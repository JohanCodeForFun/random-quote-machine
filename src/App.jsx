import { useEffect, useState } from "react";
import "./App.css";
import QuoteComponent from "./components/QuoteComponent";
import ButtonComponent from "./components/ButtonComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  // Quote Garden - A REST API for quotes.
  const API_ENDPOINT = "https://quote-garden.onrender.com/api/v3/quotes";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((result) => {
        setData(result.data);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setData(null);
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(data);

  return (
    <>
      <div id="quote-box">
        <QuoteComponent author="Johan" text="Hellooo"/>
        <ButtonComponent />
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
