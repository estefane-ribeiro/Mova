const Modal = ({ galeria, index, setModal, setFotoIndex, ...props }) => {
  function handleClick(event) {
    if (event.target.tagName !== "IMG" && event.target.tagName !== "BUTTON")
      setModal(false);
  }

  function goRight() {
    if (index < galeria.length - 1) setFotoIndex(index + 1);
    return;
  }

  function goLeft() {
    if (index > 0) setFotoIndex(index - 1);
    return;
  }

  return (
    <div
      onClick={handleClick}
      className="fixed z-30 size-full flex justify-center *: bg-violet-800/60 top-0 mx-auto backdrop-blur-2xl"
    >
      <div className="relative size-full z-40 flex-col flex items-center justify-center gap-4 px-8 py-4">
        <div className="self-end">
          <button
            {...props}
            className="text-white bg-red-700 px-4 py-2 font-semibold  cursor-pointer hover:contrast-200"
          >
            X
          </button>
        </div>
        <img
          className="object-cover max-h-[90%] rounded-xl transition-all"
          src={galeria[index].img}
          alt={galeria[index].legenda}
        />
      </div>
      <nav className="absolute w-full z-50  top-1/2 *:absolute *:cursor-pointer">
        {index > 0 && (
          <button
            onClick={goLeft}
            className="max-sm:text-3xl text-5xl font-bold text-roxo-neon max-sm:left-1 left-5 lg:left-10 not-disabled:hover:contrast-150 disabled:cursor-no-drop disabled:text-gray-400"
            disabled={index == 0}
          >
            {"ᐊ"}
          </button>
        )}
        {index < galeria.length - 1 && (
          <button
            onClick={goRight}
            className="max-sm:text-3xl text-5xl font-bold text-roxo-neon max-sm:right-1 right-5 lg:right-10 not-disabled:hover:contrast-200 disabled:cursor-no-drop disabled:text-gray-400"
          >
            {"ᐅ"}
          </button>
        )}
      </nav>
    </div>
  );
};

export default Modal;
