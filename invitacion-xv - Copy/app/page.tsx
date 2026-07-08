import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import Message from "../components/Message";
import Gallery from "../components/Gallery";
import Ceremony from "../components/Ceremony";
import Reception from "../components/Reception";
import RSVP from "../components/RSVP";
import DressCode from "../components/DressCode";
import Gifts from "../components/Gifts";
import MusicPlayer from "../components/MusicPlayer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown />
      <Message />
      <Gallery />
      <Ceremony />
      <Reception />
      <DressCode />
      <Gifts />
      <RSVP />
      <MusicPlayer />
    </main>
  );
}