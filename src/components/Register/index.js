import {Component} from 'react'
import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'
import {
  FormMainContainer,
  FormSubConainer,
  FormContainer,
  RegisterImage,
  Form,
  HeadingForm,
  LabelText,
  InputElement,
  BreakLine,
  SelectElement,
  Options,
  CustomButton,
  ErrorPara,
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

class Register extends Component {
  state = {
    userName: '',
    userTopic: topicsList[0].id,
    error: '',
    isRegister: false,
  }

  render() {
    const {isRegister} = this.state

    if (isRegister === true) {
      const {history} = this.props

      history.replace('/')
    }
    const {userName, userTopic, error} = this.state

    return (
      <RegisterContext.Consumer>
        {value => {
          const {submittSuccess} = value

          const changingName = event => {
            this.setState({userName: event.target.value})
          }

          const changingTopic = event => {
            this.setState({userTopic: event.target.value})
          }
          const submittedForm =  event => {
            event.preventDefault()
            if (userName === '') {
              this.setState({error: 'Please enter your name'})
            } else {
               this.setState({isRegister: true})
              submittSuccess(userName, userTopic)
            }
          }

          return (
            <FormMainContainer>
              <Header />
              <FormSubConainer>
                <FormContainer>
                  <RegisterImage
                    src='https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png'
                    alt='website register'
                  />
                  <Form onSubmit={submittedForm}>
                    <HeadingForm>Let us join</HeadingForm>
                    <LabelText htmlFor='name'>NAME</LabelText>
                    <InputElement
                      type='text'
                      id='name'
                      placeholder='Your name'
                      onChange={changingName}
                      value={userName}
                    />
                    <BreakLine />
                    <LabelText htmlFor='topic'>TOPICS</LabelText>
                    <SelectElement
                      id='topic'
                      onChange={changingTopic}
                      value={userTopic}
                    >
                      {topicsList.map(each => (
                        <Options value={each.id} key={each.id}>
                          {each.displayText}
                        </Options>
                      ))}
                    </SelectElement>
                    <CustomButton type='submit'>Register Now</CustomButton>
                    {error !== '' && <ErrorPara>{error}</ErrorPara>}
                  </Form>
                </FormContainer>
              </FormSubConainer>
            </FormMainContainer>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}
export default Register
