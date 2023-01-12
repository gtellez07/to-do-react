import React, { Component } from 'react'
// import './App.css'
import ListItem from './ListItem'

class MyList extends Component {
  state = {
    taskArray: this.props.theList,
    newItem: ''
  }

  clearList = () => {
    this.setState({
      taskArray: []
    })
  }

   //input handler for controlled form
   handleChange = e => {
    console.log('handle the change!')
    this.setState({
      newItem: e.target.value
    })
  }
  //submission event handler for the form
  addItem = e =>{
    e.preventDefault()
    console.log('the form has had a submission event!')
    const yourArray = [...this.state.taskArray]
    yourArray.push(this.state.newItem)
    this.setState({
      taskArray: yourArray
    })
    this.setState(prevState =>{
      return {
        taskArray: [...prevState.taskArray, prevState.newItem],
        newItem: ''
      }
    })
  }

  render() {
    const todosComponents = this.state.taskArray.map((item, idx)=>{
      return <ListItem task={item} key={`listitem-${idx}`}/>
    })

    return (
      <div>
        <h1>Things I should stop procrastinating: </h1>

        <form onSubmit={this.addItem}>
          <label htmlFor='newItem'>New Item:</label>
          <input id='newItem'
          type="type"
          placeholder="enter an item you would like to procrastinate"
          onChange={this.handleChange}
          value={this.state.newItem}
          />
        </form>
        <ul>
        {todosComponents}
        <button onClick={this.clearList}>
          Finished the List!
        </button>
          
        </ul>
      </div>
    )
  }
}

export default MyList;
