import React from "react";

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="congrats-component">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }
};

export default Congrats;
