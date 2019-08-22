import React, { Component } from "react";

import "./App.css";

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pushedUser: this.props.passingPushedUsers,
        users: this.props.passingUsers,
        userSelectedOption: this.props.passingGroup,
      selectedOption: "",
      groups: {
        LatinJazzFans: ["Denny ", "Lenny ", "Penny "],
        
        HouseHeads: ["Jarry ", "Larry ", "Kerri "],
       
        FunkFans: ["Spiro ", "FonkUpdate ", "Cherry23 "],
        JazzCats: ["Pharoah ", "Coltrane ", " Monk "]
      },
      text: "",
      items: []
    };
  }

  triggerGroup = () => {
   console.log(this.state.pushedUser)
   console.log(this.state.userSelectedOption)
    if (this.state.selectedOption === "LatinJazzFans") {
        
        this.LatinJazzFans();
    }

    
    if (this.state.selectedOption === "HouseHeads") {
      this.HouseHeads();
    }
   
    if (this.state.selectedOption === "FunkFans") {
      this.FunkFans();
    }
    if (this.state.selectedOption === "JazzCats") {
      this.JazzCats();
    }
  };

  LatinJazzFans = i => {

    let pushed = [];

    for (i = 0; i < this.state.groups.LatinJazzFans.length; i++) {
      pushed.push(this.state.groups.LatinJazzFans[i]);
    }
    this.setState({
      items: [pushed[0], pushed[1], pushed[2]]
    });

    

   
  };

  

  HouseHeads = i => {
 
    let pushed = [];

    for (i = 0; i < this.state.groups.HouseHeads.length; i++) {
      pushed.push(this.state.groups.HouseHeads[i]);
    }
    this.setState({
      items: [pushed[0], pushed[1], pushed[2]]
    });

   
  };

  FunkFans = i => {
   
    let pushed = [];

    for (i = 0; i < this.state.groups.FunkFans.length; i++) {
      pushed.push(this.state.groups.FunkFans[i]);
    }
    this.setState({
      items: [pushed[0], pushed[1], pushed[2]]
    });

  };


  JazzCats = i => {
    
    let pushed = [];

    for (i = 0; i < this.state.groups.JazzCats.length; i++) {
      pushed.push(this.state.groups.JazzCats[i]);
    }
    this.setState({
      items: [pushed[0], pushed[1], pushed[2]]
    });
   
    
  };


  mapBrain = () => {
    //passing group
   
    
    let mapOne = this.state.items.map(elem => (
        <ul>
          {elem}

          <button
          className="buttonTwo"
          onClick={() => {
            this.handleSubmit(elem);
            this.handleExperience(elem);
            this.setState({ elem: elem });
          }}
        >
          DELETE
        </button>
      
       
        </ul>
      ));
      return mapOne


  }
  handleChange = event => {
  
    this.setState({ selectedOption: event.target.value}, () =>
      this.triggerGroup()
    );
  };
  onChange = event => {
    event.preventDefault();
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <div />

        <select
          value={this.state.selectedOption}
          className="Dropdown-menuTwo"
          onChange={this.handleChange}
        >
          <option selected value="SelectAGroup">
            Select A Music Group
          </option>
          <option value="FunkFans">Funk Fans</option>
          <option value="JazzCats">Jazz Cats</option>
          <option value="LatinJazzFans">Latin Jazz Fans</option>
         
          <option value="HouseHeads">House Heads</option>
        </select>
        <li className="NameListTwo">{this.mapBrain()}</li>
      </div>
    );
  }
}
export default Groups;
