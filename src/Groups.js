import React, { Component } from "react";

import "./App.css";

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pushedUser: [],

      userSelectedOption: props.passingGroup,
      selectedOption: "FunkFans",
      groups: {
        LatinJazzFans: ["Denny ", "Lenny ", "Penny "],

        HouseHeads: ["Jarry ", "Larry ", "Kerri "],

        FunkFans: ["Spiro ", "FonkUpdate ", "Cherry23 "],
        JazzCats: ["Pharoah ", "Coltrane ", " Monk "]
      },
      text: "",
      items: [],
      LatinJazzvisible:""
    };
  }

  triggerGroup = () => {
    
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

  handleSubmit = str => {
    let del = this.state.groups[this.state.selectedOption].filter(
      x => x !== str
    );
    let groups = this.state.groups;
    groups[this.state.selectedOption] = del;
    this.setState({ groups: groups });
  };

  mapBrain = () => {
    //passing group
    if (this.state.selectedOption !== "") {
      let mapOne = this.state.groups[this.state.selectedOption].map(elem => (
        <ul>
          {elem}

          <button className="buttonTwo" onClick={() => this.handleSubmit(elem)}>
            DELETE
          </button>
        </ul>
      ));
      return mapOne;
    }
  };

  handleChange = event => {
    this.setState({ selectedOption: event.target.value }, () =>
      this.triggerGroup()
    );
  };
  onChange = event => {
    event.preventDefault();
    this.setState({ text: event.target.value });
  };
  componentDidUpdate = (prevProps, prevState, i) => {
    if (prevProps.passingPushedUsers !== this.props.passingPushedUsers) {
      let groups = this.state.groups;
      
      for (i = 0; i < this.props.passingPushedUsers.length; i++) {
        let user = this.props.passingPushedUsers[i];
        console.log(this.props.passingGroup, "this is passing group");
        console.log(groups, "this is groups");
        console.log(this.state.groups, "this is state groups");
        if (groups[this.props.passingGroup].includes(user) === false) {
          groups[this.props.passingGroup].push(user);
        }
      }

      this.setState({
        groups: groups
      });
    }
  };

  render() {
    console.log(this.state.pushedUser, "this is passing pushed users");
    console.log(this.state.groups["JazzCats"].length, "whats up")
    if(this.state.groups["JazzCats"].length === 0) {
      console.log("are we satisfied")
      let groups = this.state.groups
      delete groups["JazzCats"]
      this.setState({ groups: groups })
    }
    return (
      <div className="App">
       

        <select
          value={this.state.selectedOption}
          className="Dropdown-menuTwo"
          onChange={this.handleChange}
        >
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
