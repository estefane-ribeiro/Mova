import v1 from "../assets/danca_moderna.mp4";
import v2 from "../assets/bale.mp4";
import v3 from "../assets/valsa.mp4";
import { useState } from "react";

const slide = [v1, v2, v3];

const Slide = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [ativo, setAtivo] = useState(true);

  function changeSlide(index) {
    if (index === slideIndex || isTransitioning) return;

    setPreviousIndex(slideIndex);
    setSlideIndex(index);
    setIsTransitioning(true);

    setTimeout(() => {
      setPreviousIndex(null);
      setIsTransitioning(false);
    }, 800);
  }

  function toggleVideo({ target }) {
    console.log(ativo);
    setAtivo((anterior) => !anterior);
    target.autoPlay = ativo;
  }

  function slideGo({ target }) {
    const index = Number(target.id);
    changeSlide(index);
  }

  function prev() {
    if (slideIndex <= 0) return;
    changeSlide(slideIndex - 1);
  }

  function next() {
    if (slideIndex >= 2) return;
    changeSlide(slideIndex + 1);
  }

  return (
    <section className="container mb-12 sm:mb-16 grid lg:grid-cols-2 gap-2 lg:gap-8">
      <div className="bg-roxo-900 p-6 sm:p-8 rounded-xl self-center">
        <p className="mb-4 text-roxo-200 uppercase tracking-widest text-sm">
          Experiências Exclusivas
        </p>
        <h2 className="mb-8 font-serif text-balance lg:w-[70%] text-white text-3xl sm:text-4xl capitalize lg:text-5xl">
          Escolha sua próxima aventura
        </h2>
      </div>
      <div className="relative grid overflow-x-hidden lg:-ml-42">
        <nav className="justify-self-end mb-2">
          {slideIndex >= 1 && (
            <button
              onClick={prev}
              id="prev"
              className={`rotate-180 px-4 py-2 bg-roxo-900 rounded-md text-roxo-200 cursor-pointer not-disabled:hover:contrast-150 disabled:bg-gray-800 disabled:cursor-no-drop ${slideIndex == 0 ? "disabled:" : ""}`}
            >
              ➔
            </button>
          )}
          {slideIndex < 2 && (
            <button
              onClick={next}
              id="next"
              className="px-4 py-2 bg-roxo-900 rounded-md text-roxo-200 cursor-pointer hover:contrast-150"
            >
              ➔
            </button>
          )}
        </nav>
        <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
          {/* Vídeo anterior */}
          {previousIndex !== null && (
            <video
              key={previousIndex}
              src={slide[previousIndex]}
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
          )}

          {/* Vídeo atual */}
          <video
            key={slideIndex}
            src={slide[slideIndex]}
            onClick={toggleVideo}
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-800 ease-in-out ${
              isTransitioning ? "opacity-100" : "opacity-100"
            }`}
            style={{
              opacity: isTransitioning ? 1 : 1,
            }}
          />

          {/* Camada de transição */}
          {previousIndex !== null && (
            <div
              className="absolute inset-0 bg-transparent pointer-events-none"
              key={`transition-${slideIndex}`}
            />
          )}
        </div>

        <div className="flex gap-2 justify-center mt-2">
          {slide.map((item, index) => (
            <span
              onClick={slideGo}
              key={index}
              id={index}
              style={{
                backgroundColor: slideIndex === index ? "#7f22fe" : "#42386d",
              }}
              className="block size-2.5 rounded-full cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slide;
