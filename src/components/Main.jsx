import video from "../assets/video.mp4";
import opera from "../assets/opera.png";
import { useTranslation } from "react-i18next";

const Main = () => {
  const [t] = useTranslation();

  return (
    <main className="container py-8">
      <div className="text-white relative pt-64 max-sm:pt-12 px-8 max-sm:px-4 pb-8 rounded-2xl overflow-hidden bg-linear-to-t from-roxo-900/80">
        <video
          id="video"
          className="absolute inset-0 -z-10 size-full object-cover animate-fade-in"
          muted
          playsInline
          autoPlay
          loop
          width="1280"
          height="720"
          src={video}
        ></video>
        <div className="bg-roxo-900/50 sm:bg-roxo-900 inline-flex flex-col sm:flex-row gap-2 p-4 sm:inline-flex items-start sm:items-center mb-8 sm:gap-8 sm:py-1 sm:pl-4 sm:pr-1 rounded-xl sm:rounded-full z-20">
          {t("p1")}
          <a className="btn inline-flex items-center gap-2" href="#contato">
            {t("btnReservar")} ➔
          </a>
        </div>
        <div className="text-sm sm:flex justify-between items-center ">
          <p className="max-sm:mb-4">
            {t("p2")} {` `}
            <a
              className="underline decoration-2 underline-offset-4 hover:no-underline"
              href="./"
            >
              {t("a1")}
            </a>
          </p>
          <div className="">
            <p className="uppercase mb-2">{t("p3")}</p>
            <p className="flex items-center gap-4">
              <img className="w-35" src={opera} alt="Opera Paris" />
              <span>|</span>
              {t("p4")}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
