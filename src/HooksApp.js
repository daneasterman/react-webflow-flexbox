import React, { useState } from "react";
import "./App.css";

const HooksApp = () => {
  const [text, setText] = useState("");

  const [tweet, setTweet] = useState("");

  const handleTextChange = event => {
    setText(event.target.value);
  };

  const saveTweet = event => {
    event.preventDefault();
    setTweet(text);
    setText("");
  };

  return (
    <div className="flex items-center justify-center vh-100">
      <div style={{ width: "45%" }} className="w-75 center ba b--black-10">
        <p>
          <b>Your saved tweet text:</b> {tweet}
        </p>

        <div className="bg-near-white pa3">
          <textarea
            className="w-100 br2 ba b--black-10 pa2"
            onChange={handleTextChange}
            placeholder="Write your tweet here"
            rows="4"
            value={text}
          />

          <div style={{ justifyContent: "flex-end" }} className="mt3 flex">
            <button
              onClick={saveTweet}
              className="button-reset bg-blue bn white f6 fw5 pv2 ph3 br2 dim"
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HooksApp;
