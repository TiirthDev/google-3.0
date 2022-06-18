import { useState } from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { RoutesHandler } from "./components/RoutesHandler";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {

  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={darkTheme ? 'bg-gray-900 text-gray-200 min-h-screen dark' : 'bg-gray-100 min-h-screen '}>
      <div>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <RoutesHandler darkTheme={darkTheme} />
        <Footer darkTheme={darkTheme} />
      </div>
    </div>
  );
}

export default App;
