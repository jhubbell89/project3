import { Component } from 'react';
import { createJoke } from '../../utilities/jokes-api'

export default class NewJokeForm extends Component {
  state = {
    joke: '',
    nsfw: '',
  }

  handleSubmit = async (evt) => {
    // evt.preventDefault();
    const formData = {...this.state};
    await createJoke(formData)
  
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  render() {
    return (
      <div>
        <form autoComplete='off' onSubmit={this.handleSubmit} >
          <label>Joke</label>
          <input type='text' name='joke' value={this.state.joke} onChange={this.handleChange} required />
          <br />
          <label>Appropriate?</label>
          <input type='text' name='nsfw' value={this.state.nsfw} onChange={this.handleChange} required />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }  
}
