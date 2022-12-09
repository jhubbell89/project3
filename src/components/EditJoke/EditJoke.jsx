import { Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import { updateJoke } from '../../utilities/jokes-api'

export default class EditJokeForm extends Component {
    state = {
      joke: '',
      nsfw: '',
    }
  
    handleSubmit = async (evt) => {
      evt.preventDefault();
      const formData = {...this.state};
      console.log(formData)
      await updateJoke(formData)
    
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
            <div className='line'>
            <form autoComplete='off' onSubmit={this.handleSubmit} >
            <label>Joke</label>
            <input type='text' name='joke' value={this.state.joke} onChange={this.handleChange} required />
            <br />
            <label>Appropriate?</label>
            <input type='text' name='nsfw' value={this.state.nsfw} onChange={this.handleChange} required />
            <br></br>
            <button className='newjokesubmitbtn' type='submit'>Submit</button>
            </form>
            </div>
        </div>
      )
    }  
  }
  