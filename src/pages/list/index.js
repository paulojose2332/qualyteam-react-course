import React, { Fragment, Component } from "react";
import { Card } from "../../components/card";
import axios from "axios";

export default class List extends Component {
  state = {
    recipes: []
  };

  componentDidMount() {
    axios.get("http://localhost:4000/food", {
      headers: { Authorization: "Bearer " + this.props.token }
  }).then(content => {
      const { data } = content;
      this.setState({ recipes: data });
    });
  }

  render() {
    const newList =
      this.props.term === ""
        ? this.state.recipes
        : this.state.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(this.props.term.toLowerCase())
          );
    return (
      <Fragment>
        {newList.map(recipe => (
          <Card key={recipe.id} {...recipe} />
        ))}
      </Fragment>
    );
  }
}
