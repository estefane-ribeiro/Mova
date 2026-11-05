import Experiencias from "./components/Experiencias";
import Galeria from "./components/Galeria";
import Main from "./components/Main";
import Modalidades from "./components/Modalidades";
import Slide from "./components/Slide";

const Home = () => {
  return (
    <div>
      <Main />
      <Modalidades />
      <Experiencias />
      <Slide />
      <Galeria />
    </div>
  );
};

export default Home;
