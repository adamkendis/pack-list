import React from 'react';
import axios from 'axios';
import { Button } from 'react-toolbox/lib/button/Button';
import '../assets/react-toolbox/theme.css';
import theme from '../assets/react-toolbox/theme.js'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  };

  componentDidMount() {
    axios.get('/items')
      .then(res => {
        console.log(res)
        const items = res.data;
        this.setState({ items });
      })
      .catch(err => console.log('error ->', err));
  }


  render() {
    return (
      <ThemeProvider theme={theme}>
        {/* { this.state.items.map( item => <div>{item.name}</div>) } */}
        <Button label="TEST" raised primary />
      </ThemeProvider>
    )
  }

}

export default App;

