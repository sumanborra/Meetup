import React from 'react'

const RegisterContext = React.createContext({
  isRegistered: false,
  name: '',
  topic: '',
  submittSuccess: () => {},
})
export default RegisterContext
