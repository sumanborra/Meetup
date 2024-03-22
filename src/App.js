import {Component} from 'react'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'

import RegisterContext from './context/RegisterContext'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {
    isRegistered: false,
    error: '',
    name: '',
    topic: topicsList[0].id,
  }

  submittSuccess = (userValue, userTopic) => {
    
    const {history} = this.props
    this.setState({isRegistered: true, name: userValue, topic: userTopic})
    history.replace('/')
  }

  render() {
    const {isRegistered, name, topic} = this.state
    return (
      <RegisterContext.Provider
        value={{
          isRegistered,
          name,
          topic,
          submittSuccess: this.submittSuccess,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}
export default withRouter(App)
