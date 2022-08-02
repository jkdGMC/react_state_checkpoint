import './App.css';
import { Component } from 'react';

class App extends Component {
  
  state = {
    Person : {
      fullName : "Jules Ko DIOUF",
      bio : "Software engineering enthusiast !!",
      imgSrc : "/img/profil.jpg",
      profession : " Web | Software developer"
    },
    shows : false
  };

  changeState = () => (this.state.shows) ? this.setState({shows : false}) : this.setState({shows : true});
  
  render() {
    
    let view
    if(this.state.shows){
      view = (
            <div className="profile_container">
              <img src={this.state.imgSrc} alt="photo de profile" />
              <h1>{this.state.fullName}</h1>
              <p>{this.state.bio}</p>
              <h5>{this.state.profession}</h5>
            </div>
      )
    }
    else
      view = <div className="profile_container"></div>

    return (
      <div>
        <button name='toggle_button' onClick={this.changeState}>Afficher profile</button>
        {view}
      </div>
    );
  }
}

export default App;
