
import Chai from './chai'
function App() {
  const user='Hm';
  return (
  <>
  <Chai></Chai>
   <h2>Hy My Name is Yash Singh{user}</h2>
   <h3>From Harigarh</h3>
   </>
  )
}

export default App
// It looks like you're trying to render multiple elements inside your App component in React, but the JSX syntax requires that all elements must be wrapped in a single parent element. Right now, you have two separate elements (<h1> and <h2>) which will cause an error.

// You can fix this by wrapping the elements in a parent element like a div, or use React fragments (<> </>).
