
// video - 21 - (Basics of Form Handling)

import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
         topic: 'react'
      }
    }
    
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    hanldeCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = event => {
      this.setState({
        topic: event.target.value
      })
    }

    handleSubmit = event => {
      alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
      // event.preventDefault()    // (prevent default behaviour) for avoid data loss when page is refresh
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username</label>
            <input type='text' 
            value={this.state.username} 
            onChange={this.handleUsernameChange} />
        </div>

        {/* create cotrolled components */}
        <div>
            <label>Comments</label>
            <textarea value={this.state.comments} 
            onChange={this.hanldeCommentsChange} ></textarea>
        </div>

        {/* select tag */}
        <div>
            <label>Topic</label>
            <select value={this.state.topic} 
            onChange={this.handleTopicChange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
