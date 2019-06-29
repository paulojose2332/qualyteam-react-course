import React, { Component } from "react";
import axios from "axios";

export default class Recipe extends Component {
  state = {
    data: ""
  };

  componentDidMount() {
    axios.get("http://localhost:4000"+this.props.match.url, {
      headers: { Authorization: "Bearer " + this.props.token }
  }).then(content => {
      const { data } = content;
      this.setState({ data: data });
     
    });
  }

  render() {
    return (
      <div className="recipe">
        <div className="recipe--container">
           <figure>
            <div
              className="recipe--container-image"
              style={{ backgroundImage: `url(${this.state.data.imageUrl})` }}
            />
          </figure> 
          <div className="recipe--info">
            <h1> {this.state.data.title}</h1>
            <div className="recipe--info--description">
              <p>{this.state.data.description}</p>
              <span>{this.state.data.ingredients}</span>
            </div>
          </div>
        </div>
        <div className="recipe--preparation">
          <h2>Preparação</h2>
          <p>{this.state.data.preparation}</p>
        </div>
      </div>
    );
  }
}
