import React from "react";
import "./App.css";

class App extends React.PureComponent {
  state = {
    text: ""
  };

  _handleTextChange = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <>
        {console.log(this.state.text)}
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

          <input
            className="hide"
            ref={input => {
              this.fileInput = input;
            }}
            onChange={this._handlePhotoUpload}
            type="file"
          />

          <div className="mt3 flex justify-between">
            <button
              onClick={this._triggerFileDialogue}
              className="button-reset flex items-center br2 bn bg-transparent blue hover-bg-black-10 pointer"
            >
              <i className="material-icons f3">photo_camera</i>
            </button>

            <div className="flex items-center">
              <button
                disabled={this.state.text.length === 0}
                className="button-reset bg-blue bn white f6 fw5 pv2 ph3 br2 dim"
              >
                Message
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
