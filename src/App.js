import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

import CallForPapers from "./pages/CallForPapers"
import Committees from "./pages/Committees"

import Registration from "./pages/Registration"
import PaperSubmission from "./pages/PaperSubmission";

function App() {


  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar/>

      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/CallForPapers" element= {<CallForPapers />} />
        <Route path="/Committees" element= {<Committees />} />
        <Route path="/Registration" element= {<Registration />} />
        <Route path="/PaperSubmission" element= {<PaperSubmission />} />
      </Routes>

    </div>
    )
}

export default App;
