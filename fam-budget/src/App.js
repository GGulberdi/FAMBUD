import React, { useState, useEffect, Component } from 'react'
import Nav from './components/Nav'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import TotalCredet from './components/TotalCredet'
import TotalDebet from './components/TotalDebet'
import GroseryAll from './components/sections/GroseryAll'
import OthersAll from './components/sections/OthersAll'
import UtilityAll from './components/sections/UtilityAll'
import TransportAll from './components/sections/TransportAll'
import HomePage from './components/HomePage'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      incomes: [],
      newPost: {}
    }
    console.log(this.state.posts)
  }

  componentDidMount = () => {
    this.getExpences()
    this.getIncomes()
  }



  //get all
  getExpences = () => {
    fetch("http://localhost:8080/posts")
      .then(result => result.json())
      .then(data => this.setState({ posts: data }, console.log(data)))
      .catch(error => console.log(error.message))

  }

  getIncomes = () => {
    fetch("http://localhost:8080/gains")
      .then(result => result.json())
      .then(data => this.setState({ incomes: data }, console.log(data)))
      .catch(error => console.log(error.message))

  }

  // create new income
  handleSubmitDebet = (data) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data)
    }
    fetch("http://localhost:8080/gains/newGain", requestOptions)
      .then(result => result.json())
      .then(data => this.setState({ posts: [...this.state.posts, data] }))
      .catch(error => console.log(error.message))

  }

  //create new expence
  handleSubmit = (data) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data)
    }
    fetch("http://localhost:8080/posts/create", requestOptions)
      .then(result => result.json())
      .then(data => this.setState({ posts: [...this.state.posts, data] }))
      .catch(error => console.log(error.message))

  }


  //  remove incomes
  deleteItem = (id) => {
    console.log(id)
    console.log('click works')
    let filtered = this.state.incomes.filter(item => item._id !== id)
    console.log(filtered)
    this.setState({ incomes: filtered })
    this.deleteIncomes(id)

  }
  async deleteIncomes(data) {
    const url = "http://localhost:8080/gains/deleteGain/" + data;
    const requestOptions = {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      }
    }
    try {
      const response = await fetch(url, requestOptions);
      if (response.ok) {
        // removeButton.parentElement.remove();
        const jsonResponse = await response.json();
        console.log(jsonResponse.message);
      } else {
        throw new Error('Request failed!');
      }
    } catch (error) {
      console.log(error)
    }
  }

  //remove expences
  deletePostItem = (id) => {
    console.log(id)
    let filtered = this.state.posts.filter(item => item._id !== id)
    console.log(filtered)
    this.setState({ posts: filtered })
    this.deleteExpences(id)
  }
  async deleteExpences(data) {
    const url = "http://localhost:8080/posts/delete/" + data;
    const requestOptions = {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      }
    }
    try {
      const response = await fetch(url, requestOptions);
      if (response.ok) {
        // removeButton.parentElement.remove();
        const jsonResponse = await response.json();
        console.log(jsonResponse.message);
      } else {
        throw new Error('Request failed!');
      }
    } catch (error) {
      console.log(error)
    }
  }


  // update income



  updateIncome = (data, id) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data)
    }
    fetch(`http://localhost:8080/gains/getGain/${id}/update`, requestOptions)
      .then(result => result.json())
      .then(data => console.log(data))
      .catch(error => console.log(error.message))

  }

  // update expence
  updateIncome = (data, id) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data)
    }
    fetch(`http://localhost:8080/posts/getPost/${id}/update`, requestOptions)
      .then(result => result.json())
      .then(data => console.log(data))
      .catch(error => console.log(error.message))

  }

  render() {
    // console.log(this.state.newPost)
    return (
      <div>
        <Router>
          <div className="App">
            <Nav posts={this.state.posts} newPost={this.state.newPost} />
            {/* <DataFetching/> */}

            <Switch>
              <Route path='/' exact render={(props) => (
                <HomePage state={this.state} newPost={this.state.newPost} submit={this.handleSubmit} submitDebet={this.handleSubmitDebet} />
              )} />
              {/* <Route path='/' exact> 
                <HomePage  newPost={this.state.newPost} submit={this.handleSubmit} />
              </Route> */}
              <Route path='/totaldebet'><TotalDebet state={this.state.incomes} updateCostumer={this.updateCostumer} deleteItem={this.deleteItem} /></Route>
              <Route path='/totalcredet'><TotalCredet updateCostumer={this.updateCostumer} deleteItem={this.deletePostItem} state={this.state.posts} /></Route>
              <Route path='/grosery'><GroseryAll state={this.state.posts} /></Route>
              <Route path='/utility'> <UtilityAll state={this.state.posts} /></Route>
              <Route path='/transport'> <TransportAll state={this.state.posts} /></Route>
              <Route path='/others'><OthersAll state={this.state.posts} /></Route>

            </Switch>

          </div>
        </Router>

      </div>
    );
  }
}



export default App;
