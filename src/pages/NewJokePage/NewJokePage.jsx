import { Component } from 'react';

export default class NewJokeForm extends Component {
  state = {
    joke: '',
    nsfw: '',
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    
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
        <form>
          <label>Joke</label>
          <input type='text' name='joke' value={this.state.joke} onChange={this.handleChange} />
          <br />
          <label>Appropriate?</label>
          <input type='text' name='nsfw' />
        </form>
      </div>
    )
  }  
}
