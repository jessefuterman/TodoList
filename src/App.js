import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Checkbox } from "semantic-ui-react";
import Groups from "./Groups";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      selectedOption: "LatinJazzFans",
      submitUser: [],
      items: [],
      pushedUser: [],
      submitUserArray: [],
      groupLatinJazz: this.props.passingLatinJazz,
      users: [
        "Jesse ",
        "Richard ",
        "Vince ",
        "KoolGuy22 ",
        "Amanda ",
        "Revolver Ocelot ",
        "Snake ",
        "Greg ",
        "Ben ",
        "Matt ",
        "Tito Puente ",
        "Braden ",
        "Adam ",
        "Alex ",
        "Nathan "
      ]
    };
  }

  onChange = event => {
    let filterResult = this.state.pushedUser.filter(elem => {
      if (elem !== event.target.name) {
        return true;
      } else {
        return false;
      }
    });

    if (filterResult.length < this.state.pushedUser.length) {
      this.setState({ pushedUser: filterResult });
    } else {
      this.setState({
        pushedUser: this.state.pushedUser.concat(event.target.name)
      });
    }

    console.log(this.state.pushedUser);
    console.log(event.target.name);
  };

  handleChange = event => {
    this.setState({ selectedOption: event.target.value });
    console.log(this.state.selectedOption, "what is selected option");
  };

  handleSubmit = (event, elem) => {
    console.log(this.state.submitUserArray, "this is submit user array");
    this.setState({ submitUserArray: this.state.pushedUser });

    console.log(elem);

    this.triggerGroup();
  };

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

  LatinJazzFans = () => {
    console.log("we gettin in latin?");
  };

  HouseHeads = () => {};

  FunkFans = () => {};

  JazzCats = () => {};

  pushedUserLogic = elem => {
    let result = this.state.pushedUser.find(x => {
      return elem === x;
    });
    if (result !== undefined) {
      return true;
    } else {
      return false;
    }
  };

   handleDelete = (elem, str) => {
    console.log("we in delete?", )
    let del = this.state.users.filter(
      x => x !== elem
    );
    let users = this.state.users;
    users = del;
    this.setState({ users: users });
   }
  listLogic = () => {
    //  let del = this.state.users.filter(x => x !== str);
    let mapOne = this.state.users.map(elem => (
      <li className="listLine">
        <input type="Checkbox" name={elem} onChange={this.onChange} />
        <button className="buttonFour" onClick={() => this.handleDelete(elem)}>DELETE </button>
        {elem}
      </li>
    ));

    return mapOne;
  };



  newUseronChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      users: [...this.state.users, this.state.term],
      
    });
  }

  render() {
    console.log(this.state.items)

    console.log(this.state, "this.state");
    return (
      <div className="NameList">
      <Groups
      passingPushedUsers={this.state.submitUserArray}
      passingGroup={this.state.selectedOption}
    />
      <h4 className="App">Music Fans Unite</h4>
        <div>
         
        </div>
        <div>
        <form className="App" onSubmit={this.onSubmit}>
        <input value={this.state.term} onChange={this.newUseronChange} />
        <button>Add User</button>
      </form>
        </div>
        <div>
          <select
            value={this.state.selectedOption}
            onChange={this.handleChange}
          >
            <option value="LatinJazz"> Add to LatinJazz Fans </option>
            <option value="FunkFans">Add to Funk Fans</option>
            <option value="JazzCats">Add to Jazz Cats</option>
            <option value="HouseHeads">Add to House Heads</option>
          </select>
          <button className="buttonThree" onClick={this.handleSubmit}>
            Add to Group
          </button>
          <ul>{this.listLogic()}</ul>
        </div>
      </div>
    );
  }
}
export default App;
