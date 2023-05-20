import { useEffect, useState } from "react";
import "./App.css";
import QuoteComponent from "./components/QuoteComponent";
import ButtonComponent from "./components/ButtonComponent";
import FooterComponent from "./components/FooterComponent";

function App() {

  return (
    <>
      <div id="quote-box">
        <QuoteComponent  author="Johan" text="Hellooo" />
        <ButtonComponent />
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
