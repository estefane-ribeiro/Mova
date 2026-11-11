import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IrAoTopo from "./components/IrAoTopo";
import Home from "./Home";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", () => {
        setIsLoading(false);
      });
    }
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-roxo-900">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Header />
      <Home />
      <IrAoTopo />
      <Footer />
    </>
  );
}

export default App;
