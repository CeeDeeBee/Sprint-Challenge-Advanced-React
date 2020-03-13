import React from 'react';
import axios from "axios";
import PlayerList from "./components/PlayerList";
import './App.css';

class App extends React.Component {
  state = {
    data: []
  }

  setData = data => {
    this.setState({ data });
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <PlayerList data={this.state.data} setData={this.setData} />
      </div>
    );
  }
}

export default App;
