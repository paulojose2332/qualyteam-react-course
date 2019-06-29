import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import axios from "axios";
import { Button } from "../../components/button";

export default class Register extends Component {
  state = {
    title: "",
    imageUrl: "",
    ingredients: "",
    description: ""
  };

  handleChange = (e, name) => {
    this.setState({
      [name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const { title, imageUrl, ingredients, description, preparation } = this.state;
    axios.post("http://localhost:4000/food", {
      title,
      imageUrl,
      ingredients,
      description,
      preparation
    },{
      headers: { Authorization: "Bearer " + this.props.token }
  });
  
  };

  render() {
    return (
      <div className="register">
        <h1>Nova receita</h1>
        {
          console.log(this.props.match)
        }
        <div className="register--container">
          <form className="register--container--form" onSubmit={this.onSubmit}>
            <div className="register--container--side">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  onChange={e => this.handleChange(e, "title")}
                  value={this.state.title}
                />
              </div>
              <div className="form-group">
                <label htmlFor="image">Imagem (URL)</label>
                <input
                  id="image"
                  onChange={e => this.handleChange(e, "imageUrl")}
                  value={this.state.imageUrl}
                />
              </div>
              <div className="form-group">
                <label htmlFor="ingredients">Ingredientes</label>
                <textarea
                  id="ingredients"
                  onChange={e => this.handleChange(e, "ingredients")}
                  value={this.state.ingredients}
                />
              </div>
            </div>
            <div className="register--container--side">
              <div className="form-group">
                <label htmlFor="description">Descrição</label>
                <textarea
                  id="description"
                  onChange={e => this.handleChange(e, "description")}
                  value={this.state.description}
                />
              </div>
              <div className="form-group">
                <label htmlFor="preparation">Preparação</label>
                <textarea
                  id="preparation"
                  onChange={e => this.handleChange(e, "preparation")}
                  value={this.state.preparation}
                />
              </div>
            </div>

            <Button type="submit">Create</Button>
          </form>
        </div>
      </div>
    );
  }
}

export { Register };
