import "./App.css";
import MainSection from "./components/MainSection/MainSection";
import ApproveSection from "./components/ApproveSection/ApproveSection";
import InvitationSection from "./components/InvitationSection/InvitationSection";
import QuestionsSection from "./components/QuestionsSection/QuestionsSection";
import Program from "./components/Program/Program";
import MapSection from "./components/Map/Map";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import GuestList from "./GuestList";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/guests" element={<GuestList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
