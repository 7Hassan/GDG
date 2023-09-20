
import { MainSec } from "../components/home/main";
import { MainTopics } from "../components/home/mainTopics";
import { PastEvents } from "../components/home/pastEvents";
import { Posts } from "../components/home/posts";
import { Sessions } from "../components/home/sessions";
import '../styles/home.scss'
export const Home = () => {
  return <div className="home container">
    <div className="home-container">
      <MainSec />
      <PastEvents />
      <MainTopics />
      <Sessions />
      <Posts />
    </div>
  </div>;
};
