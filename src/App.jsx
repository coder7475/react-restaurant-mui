import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* Main Layout */}
      <header className="fixed z-10 w-full">
        <Navbar />
      </header>
      <Outlet></Outlet>
    </>
  );
}

export default App;
