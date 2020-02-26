import React from "react";
import { FaFeather } from "react-icons/fa";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      message: "",
      chirps: []
    };
    // arrow fucnt below removes this
    // this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  handleMessageChange = e => {
    this.setState({ message: e.target.value });
  };

  handleChirpSubmit = e => {
    e.preventDefault();
    let chirps = this.state.chirps.slice();
    chirps.push({
      username: this.state.username,
      message: this.state.message
    });
    this.setState({
      username: '',
      message: '',
      chirps: chirps
    });
  };

  render() {
    return (
      // <h1 className="text-center">Hello There</h1>
      <main className="container">
        <section className="row mt-2">
          <div className="col-md-5">
            <form className="form-group p-3 shadow-sm">
              <label>Username</label>
              <input
                value={this.state.username}
                onChange={this.handleUsernameChange}
                type="text"
                className="form-control"
              />
              <label>Messsage</label>
              <textarea
                value={this.state.message}
                onChange={this.handleMessageChange}
                className="form-control"
                rows="7"
              ></textarea>
              <button
                onClick={this.handleChirpSubmit}
                className="btn btn-primary btn-block mt-3 d-flex  align-items-center justify-content-center"
              >
                <FaFeather className="mx-2" />
                Chirp It!
              </button>
            </form>
          </div>
          <div className="col-md-7">
            <ul className="list-group list-group-flush shadow-sm">
              {this.state.chirps.map((chirp, i) => {
                return (
                  <li key={`chirp-item-${i}`} className="list-group-item my-2 d-flex justify-content-between align-items-center">
                    <b>{chirp.username}:</b>
                    <span>{chirp.message}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
