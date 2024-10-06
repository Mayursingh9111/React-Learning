import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
    )
}

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'Hello, World!'
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
    // <MyApp />
    // reactElement
  // {/* </StrictMode>, */}
)
