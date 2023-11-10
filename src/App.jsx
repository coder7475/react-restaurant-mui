import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {

  return (
    <>
    {/* Main Layout */}
    <Navbar />
    <Outlet></Outlet>    
    </>
  )
}

export default App
