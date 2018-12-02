import React from 'react';
import axios from 'axios';
const $ = require('jquery');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  };

  componentDidMount() {
    axios.get('localhost:3000/items')
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
  }


  render() {
    return (
      <div>
        { this.state.items.map( item => <span>{item.name}</span>) }
      </div>
    )
  }

}