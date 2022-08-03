import './App.css';
import { Component } from 'react';
import Profile from './Components/Profile';

class App extends Component {
  
  state = {
    Person : {
      fullName : "Jules Ko DIOUF",
      bio : "Software engineering enthusiast !!",
      imgSrc : "/img/profil.jpg",
      profession : " Web | Software developer"
    },
    shows : false,
    count : 1,
    interval : null
  };

  changeState = () => (this.state.shows) ? this.setState({shows : false}) : this.setState({shows : true});
  
  componentDidMount(){
    this.state.interval = setInterval(() => {
      this.setState({count : this.state.count + 1})
    }, 1000);
  }

  render() {
    return (
      <div>
        <button name='toggle_button' onClick={this.changeState}>Afficher profile</button>
        <div>{this.state.count}</div>
        {
        (this.state.shows) ?
          <Profile 
            imgSrc = {this.state.Person.imgSrc}
            fullName = {this.state.Person.fullName}
            bio = {this.state.Person.bio}
            profession = {this.state.Person.profession} 
          />
        :
          null
        }
      </div>
    )
  }
}

export default App;
