import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
