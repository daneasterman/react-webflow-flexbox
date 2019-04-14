import React from "react";
import "./App.css";

const MAX_TWEET_LENGTH = 280;

export default class ClassApp extends React.PureComponent {
  state = {
    text: ""
  };

  _handleTextChange = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    const { text } = this.state;

    const charactersRemaining = MAX_TWEET_LENGTH - text.length;

    const tweetIsOutOfRange =
      charactersRemaining === MAX_TWEET_LENGTH || charactersRemaining < 0;

    const underTenCharacters = charactersRemaining <= 10;

    return (
      <body class="flex items-center justify-center vh-100">
        <div style={{ width: "45%" }} class="w-75 center ba b--black-10">
          <div className="pv2 tc bb b--black-10">
            <h1 className="ma0 f5 normal">Create Tweet</h1>
          </div>

          <div className="bg-near-white pa3">
            <textarea
              onChange={this._handleTextChange}
              placeholder="Write your report here"
              name="tweet"
              rows="4"
              className="w-100 br2 ba b--black-10 pa2"
            />

            <div style={{ justifyContent: "flex-end" }} className="mt3 flex">
              <div className="flex items-center">
                <span
                  style={{ color: `${underTenCharacters ? "#e7040f" : ""}` }}
                  className="mr3 black-70"
                >
                  {charactersRemaining}
                </span>
                <button
                  disabled={tweetIsOutOfRange}
                  className="button-reset bg-blue bn white f6 fw5 pv2 ph3 br2 dim"
                >
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
