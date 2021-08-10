import React from 'react';
import './App.css';
import Contact from './component/Contact';
const BASE_URL = 'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      newArr: []
    }
  }

  findPerson = (value) => {
    value = value.trim();
    let arr2 = [];
    for(let i = 0; i < this.state.arr.length; i++) {
      value = new RegExp(value, 'i');
      let newValue = `${this.state.arr[i].first_name} ${this.state.arr[i].last_name}`;
      let index = newValue.search(value);
      if(index >= 0) {
        arr2.push(this.state.arr[i]);
      }
    }
    this.setState({newArr: arr2})  
  }


  choosePerson = (elem) => {
    elem.classList.toggle('choosedPerson');
  }


  componentDidMount = () => {
    fetch(`${BASE_URL}`)
      .then(response => response.json())
      .then(arr => {
        arr.sort((a, b) => a.last_name > b.last_name ? 1 : -1);
        this.setState({arr, newArr: arr});
      })
  }

  render() {
    return (
      <Contact contacts={this.state.newArr} findPerson={this.findPerson} choosePerson={this.choosePerson}/>
    );
  }
}

export default App;