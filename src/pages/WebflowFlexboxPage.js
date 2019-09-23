import React from "react";

const WebflowFlexboxPage = () => (
  <div className="flex items-center justify-center vh-100">
    <div style={{ width: "45%" }} className="w-75 center ba b--black-10">
      <div className="bg-near-white pa3">
        <textarea
          className="w-100 br2 ba b--black-10 pa2"
          placeholder="What's happening?"
          rows="4"
        />

        <div
          style={{ justifyContent: "flex-end", alignItems: "center" }}
          className="mt3 flex"
        >
          <span className="mr3 black-70"></span>
          <button className="button-reset bg-blue bn white f6 fw5 pv2 ph3 br2 dim">
            Tweet
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default WebflowFlexboxPage;
