import {
  NotFoundMainContainer,
  ImageNotFound,
  Heading,
  ParaText,
} from './styledComponent'

const NotFound = () => (
  <NotFoundMainContainer>
    <ImageNotFound
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <ParaText>
      We are sorry, the page you requested could not be found.
    </ParaText>
  </NotFoundMainContainer>
)
export default NotFound
