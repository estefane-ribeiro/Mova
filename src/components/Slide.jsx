import v1 from "../assets/danca_moderna.mp4";
import v2 from "../assets/bale.mp4";
import v3 from "../assets/valsa.mp4";

import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Loading from "./Loading";

const slide = [v1, v2, v3];

const Slide = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [ativo, setAtivo] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef(null);
  const transitionTimer = useRef(null);

  const [t] = useTranslation();

  // Controla a troca de vídeos
  function changeSlide(index) {
    if (index === slideIndex || isTransitioning) return;

    setPreviousIndex(slideIndex);
    setSlideIndex(index);
    setIsTransitioning(true);
    setIsLoading(true);

    clearTimeout(transitionTimer.current);

    transitionTimer.current = setTimeout(() => {
      setPreviousIndex(null);
      setIsTransitioning(false);
    }, 800);
  }

  // Controla play e pause
  function toggleVideo() {
    setAtivo((anterior) => !anterior);
  }

  // Reproduz ou pausa o vídeo conforme o estado
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (ativo && !document.hidden) {
      video.play().catch(() => {
        setAtivo(false);
      });
    } else {
      video.pause();
    }
  }, [ativo, slideIndex]);

  // Pausa o vídeo quando a aba fica oculta
  useEffect(() => {
    function handleVisibility() {
      const video = videoRef.current;

      if (!video) return;

      if (document.hidden) {
        video.pause();
      } else if (ativo) {
        video.play().catch(() => {});
      }
    }

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [ativo]);

  // Limpa o temporizador ao desmontar
  useEffect(() => {
    return () => {
      clearTimeout(transitionTimer.current);
    };
  }, []);

  function prev() {
    if (slideIndex > 0) {
      changeSlide(slideIndex - 1);
    }
  }

  function next() {
    if (slideIndex < slide.length - 1) {
      changeSlide(slideIndex + 1);
    }
  }

  return (
    <section className="container mb-12 sm:mb-16 grid lg:grid-cols-2 gap-2 lg:gap-8">
      <div className="bg-roxo-900 p-6 sm:p-8 rounded-xl self-center">
        <p className="mb-4 text-roxo-200 uppercase tracking-widest text-sm">
          {t("sli-p1")}
        </p>

        <h2 className="mb-8 font-serif text-balance lg:w-[70%] text-white text-3xl sm:text-4xl capitalize lg:text-5xl">
          {t("sli-titulo")}
        </h2>
      </div>

      <div className="relative grid overflow-x-hidden lg:-ml-42">
        {/* Navegação */}
        <nav className="justify-self-end mb-2 flex gap-2">
          {slideIndex > 0 && (
            <button
              onClick={prev}
              disabled={isTransitioning}
              className="rotate-180 px-4 py-2 bg-roxo-900 rounded-md text-roxo-200 cursor-pointer hover:contrast-150 disabled:opacity-50"
            >
              ➔
            </button>
          )}

          {slideIndex < slide.length - 1 && (
            <button
              onClick={next}
              disabled={isTransitioning}
              className="px-4 py-2 bg-roxo-900 rounded-md text-roxo-200 cursor-pointer hover:contrast-150 disabled:opacity-50"
            >
              ➔
            </button>
          )}
        </nav>

        {/* Container do vídeo */}
        <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-roxo-900">
          {/* Vídeo atual */}
          <video
            ref={videoRef}
            key={slideIndex}
            src={slide[slideIndex]}
            onClick={toggleVideo}
            onLoadStart={() => setIsLoading(true)}
            onCanPlay={() => setIsLoading(false)}
            onWaiting={() => setIsLoading(true)}
            onPlaying={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
          />

          {/* Loading */}
          {isLoading && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-roxo-900">
              <Loading />
            </div>
          )}

          {/* Indicador de pausa */}
          {!ativo && !isLoading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 pointer-events-none">
              <span className="text-white text-4xl">▶</span>
            </div>
          )}
        </div>

        {/* Indicadores dos slides */}
        <div className="flex gap-2 justify-center mt-2">
          {slide.map((item, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              disabled={isTransitioning}
              aria-label={`Ir para o vídeo ${index + 1}`}
              aria-current={slideIndex === index ? "true" : undefined}
              style={{
                backgroundColor: slideIndex === index ? "#7f22fe" : "#42386d",
              }}
              className="size-2.5 rounded-full cursor-pointer disabled:opacity-50"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slide;
