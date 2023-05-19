import React from "react";

const QuoteComponent = (props) => (
  <>
    <div id="text">
      <h3>
        <p>{props.author}, {props.text}</p>
        &quot; Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
        molestias quas obcaecati deleniti? &quot;
      </h3>
    </div>
    <div id="author">
      <p>- author</p>
    </div>
  </>
);

export default QuoteComponent;