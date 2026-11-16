import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const IrAoTopo = () => {
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    function goTop() {
      if (window.scrollY <= 0) setAtivo(false);
      else setAtivo(true);
    }

    window.addEventListener("scrollend", goTop);
    return () => window.removeEventListener("scrollend", goTop);
  }, []);

  return (
    <a
      href="#header"
      title="Ir ao topo"
      className={`fixed bottom-6 right-6 px-3 py-3 lg:px-4 lg:py-4 rounded-md bg-roxo-900/60 text-3xl lg:text-4xl text-roxo-200 transition-all duration-300 shadow-lg  hover:contrast-150 hover:scale-105 ${ativo ? "block" : "hidden"}`}
    >
      <ChevronUp />
    </a>
  );
};

export default IrAoTopo;
