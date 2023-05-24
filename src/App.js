import "./App.css";
import MainSection from "./components/MainSection/MainSection";
import ApproveSection from "./components/ApproveSection/ApproveSection";
import InvitationSection from "./components/InvitationSection/InvitationSection";
import QuestionsSection from "./components/QuestionsSection/QuestionsSection";
import Program from "./components/Program/Program";
import MapSection from "./components/Map/Map";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <MainSection />
      <ApproveSection />
      <InvitationSection />
      <QuestionsSection />
      <Program />
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;
