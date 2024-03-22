import {Component} from 'react'
import {Link} from 'react-router-dom'
import RegisterContext from '../../context/RegisterContext'

import Header from '../Header'
import {
  HomeContainer,
  HomeSubContainer,
  HeadingNotRegistered,
  ParaNotRegistered,
  CustomButton,
  RegisterNotImage,
} from './styledComponent'

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
class Home extends Component {

  registerButtonCliked = () =>{
    const{history} =this.props;
    history.replace("/register")
  }
  render() {
    return (
      <RegisterContext.Consumer>
        {value => {
          const {isRegistered, name, topic} = value
          const finding = topicsList.find(each => each.id === topic)
          console.log(finding)
          const selectValue = finding.displayText
          const resultPage = isRegistered ? (
            <>
              <HeadingNotRegistered isRegistered={isRegistered}>
                Hello {name}
              </HeadingNotRegistered>
              <ParaNotRegistered>Welcome to {selectValue}</ParaNotRegistered>
            </>
          ) : (
            <>
              <HeadingNotRegistered isRegistered={isRegistered}>
                Welcome to MeetUp
              </HeadingNotRegistered>
              <ParaNotRegistered>
                Please register for the topic
              </ParaNotRegistered>
              <Link to="/register">
                <CustomButton type="button" onClick={this.registerButtonCliked}>Register</CustomButton>
              </Link>
            </>
          )

          return (
            <HomeContainer>
              <Header />
              <HomeSubContainer>
                {resultPage}
                <RegisterNotImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeSubContainer>
            </HomeContainer>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}
export default Home
