const Contato = () => {
  return (
    <section
      id="contato"
      className="container mb-12 sm:mb-16 grid lg:grid-cols-2 gap-8 mt-15"
    >
      <div>
        <h1 className="font-serif text-4xl text-roxo-300 mb-4">
          Nossos Contatos
        </h1>
        <p className="text-gray-200 text-balance mb-8">
          Tem interesse em passar uma temporada no Forest? Entre em contato com
          a gente por telefone ou e-mail.
        </p>
        <div className="grid gap-4">
          <div>
            <span className="h-0.5 w-6 neon inline-block"></span>
            <h2 className="mb-2 text-2xl text-roxo-300 font-serif">Base</h2>
            <p className="text-gray-300">Rua da Dança, 123 - Danceteria - RJ</p>
          </div>
          <div>
            <span className="h-0.5 w-6 neon inline-block"></span>
            <h2 className="mb-2 text-2xl text-roxo-300 font-serif">Email</h2>
            <p className="text-gray-300">contato@mova.com</p>
          </div>
          <div>
            <span className="h-0.5 w-6 neon inline-block"></span>
            <h2 className="mb-2 text-2xl text-roxo-300 font-serif">Telefone</h2>
            <p className="text-gray-300">21 99999-9999</p>
          </div>
        </div>
      </div>
      <form
        className="grid gap-4 rounded-xl bg-roxo-900 shadow-2xl p-4 lg:p-8"
        action=""
      >
        <div className="grid gap-1">
          <label className="text-white" for="nome">
            Nome
          </label>
          <input className="input" id="nome" type="text" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-1">
            <label className="text-white" for="email">
              Email
            </label>
            <input className="input" id="email" type="email" />
          </div>
          <div className="grid gap-1">
            <label className="text-white" for="telefone">
              Telefone
            </label>
            <input
              className="input"
              id="telefone"
              type="text"
              placeholder="21 00000-0000"
            />
          </div>
        </div>
        <div className="grid gap-1">
          <label className="text-white" for="mensagem">
            Mensagem
          </label>
          <textarea
            className="input resize-none"
            id="mensagem"
            type="text"
            rows="5"
          ></textarea>
        </div>
        <button className="place-self-center btn text-roxo-200 px-4 py-2 inline-block rounded-full">
          Enviar Email
        </button>
      </form>
    </section>
  );
};

export default Contato;
