import React, { useState } from "react";
import "./App.css";

const MAX_TWEET_LENGTH = 280;

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

  const charactersRemaining = MAX_TWEET_LENGTH - text.length;
  const tweetIsOutOfRange = text.length === 0 || text.length > MAX_TWEET_LENGTH;
  const underTenCharacters = charactersRemaining <= 10;

  return (
    <div className="flex items-center justify-center vh-100">
      <div style={{ width: "45%" }} className="w-75 center ba b--black-10">
        <p style={{ paddingLeft: "16px" }}>
          <b>Your saved tweet:</b> {tweet}
        </p>

        <div className="bg-near-white pa3">
          <textarea
            className="w-100 br2 ba b--black-10 pa2"
            onChange={handleTextChange}
            placeholder="What's happening?"
            rows="4"
            value={text}
          />

          <div
            style={{ justifyContent: "flex-end", alignItems: "center" }}
            className="mt3 flex"
          >
            <span
              style={{ color: `${underTenCharacters ? "#e7040f" : ""}` }}
              className="mr3 black-70"
            >
              {charactersRemaining}
            </span>
            <button
              disabled={tweetIsOutOfRange}
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
