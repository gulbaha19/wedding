import { useEffect, useState } from "react";
import ApproveSection from "./components/ApproveSection/ApproveSection";
import Footer from "./components/Footer/Footer";
import InvitationSection from "./components/InvitationSection/InvitationSection";
import MainSection from "./components/MainSection/MainSection";
import MapSection from "./components/Map/Map";
import Program from "./components/Program/Program";
import QuestionsSection from "./components/QuestionsSection/QuestionsSection";

const Main = () => {
  const useAudio = (url) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
      playing ? audio.play() : audio.pause();
    }, [playing]);

    useEffect(() => {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    }, []);

    return [playing, toggle];
  };
  const [playing, toggle] = useAudio(
    "https://firebasestorage.googleapis.com/v0/b/wedding-4b188.appspot.com/o/Садуакасова%20-%20Суйген%20журек.mp3?alt=media&token=10b483b7-9f9e-45b6-8356-9841bc4e6418",
  );
  return (
    <div>
      <button className="audioPlayer" onClick={toggle}>
        {playing ? "Пауза" : "Нажмите"}
      </button>
      <MainSection />
      <ApproveSection />
      <InvitationSection />
      <QuestionsSection />
      <Program />
      <MapSection />
      <Footer />
    </div>
  );
};
export default Main;
