import hip from "../assets/hip.avif";
import hip2 from "../assets/hip2.avif";
import hip3 from "../assets/hip3.avif";
import salao from "../assets/salao.avif";
import solo from "../assets/solo.avif";
import grupo from "../assets/grupo.avif";
import grupo2 from "../assets/grupo2.avif";
import grupo3 from "../assets/grupo3.avif";
import grupo4 from "../assets/grupo4.avif";
import bale from "../assets/bale2.avif";
import bale2 from "../assets/bale_dan.avif";
import valsa from "../assets/vals.avif";
import { useState } from "react";
import Modal from "./Modal";

const galeria = [
  { id: 0, img: solo, row: 1, col: 1, legenda: "Solo" },
  { id: 1, img: grupo4, row: 1, col: 1, legenda: "Dança em grupo" },
  { id: 2, img: bale2, row: 1, col: 2, legenda: "Balé" },
  { id: 3, img: salao, row: 2, col: 2, legenda: "Dança de salão" },
  { id: 4, img: hip2, row: 1, col: 1, legenda: "Hip Hop" },
  { id: 5, img: grupo3, row: 1, col: 1, legenda: "Dança em grupo" },
  { id: 6, img: grupo, row: 2, col: 2, legenda: "Grupo" },
  { id: 7, img: valsa, row: 1, col: 1, legenda: "Dança em grupo" },
  { id: 8, img: hip3, row: 1, col: 1, legenda: "Hip Hop" },
  { id: 9, img: grupo2, row: 1, col: 1, legenda: "Dança em grupo" },
  { id: 10, img: hip, row: 1, col: 2, legenda: "Hip Hop" },
  { id: 11, img: bale, row: 1, col: 1, legenda: "Balé" },
];

const Galeria = () => {
  const [modal, setModal] = useState(false);
  const [fotoIndex, setFotoIndex] = useState(0);

  function handleClick(index) {
    setFotoIndex(Number(index));
    setModal(true);
  }

  function closedModal() {
    setModal(false);
  }

  return (
    <section className=" relative">
      <h2 className="capitalize mb-8 mx-auto text-center max-w-3xl text-white text-4xl sm:text-6xl text-balance font-serif">
        Explore nossa Galeria
      </h2>
      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-4">
        {galeria.map((foto) => (
          <div
            onClick={() => handleClick(foto.id)}
            key={foto.id}
            id={foto.id}
            className={`group relative overflow-hidden cursor-pointer rounded-xl row-span-${foto.row} col-span-${foto.col} `}
          >
            <img
              className="size-full object-cover transition-transform group-hover:scale-110"
              src={foto.img}
              alt={foto.legenda}
            />
            <div className="absolute flex items-end p-4 inset-0 bg-linear-to-t from-roxo-950/80 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-white">{foto.legenda}</span>
            </div>
          </div>
        ))}
      </div>
      {modal && (
        <Modal
          galeria={galeria}
          index={fotoIndex}
          setModal={setModal}
          setFotoIndex={setFotoIndex}
          onClick={closedModal}
        />
      )}
    </section>
  );
};

export default Galeria;
