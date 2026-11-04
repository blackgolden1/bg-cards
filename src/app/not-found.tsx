
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F5F6F7]">

      {/* ENCABEZADO */}
      <header className="w-full bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5 flex items-center justify-between">

          <Link
            href="/landing/josaneth-rojas-lopez"
            aria-label="Volver a la tarjeta principal de Edelco"
            className="inline-flex items-center"
          >
            <Image
              src="/edelco/logo.png"
              alt="Logo Edelco"
              width={180}
              height={60}
              priority
              className="h-11 sm:h-14 w-auto max-w-[180px] object-contain"
            />
          </Link>

          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.18em] text-gray-400">
            TARJETA DIGITAL
          </span>

        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <section className="flex-1 flex items-center justify-center px-5 py-14 sm:py-20">

        <div className="w-full max-w-xl mx-auto text-center">

          {/* ICONO */}
          <div className="mx-auto mb-8 w-24 h-24 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">

            <svg
              width="46"
              height="46"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <circle cx="9" cy="10" r="2" />
              <path d="M3 16l5-4 4 3 3-2 6 4" />
              <path d="M16 8h2" />
            </svg>

          </div>

          {/* CÓDIGO DE ERROR */}
          <p className="text-sm font-bold tracking-[0.25em] text-gray-400 mb-4">
            ERROR 404
          </p>

          {/* TÍTULO */}
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
            Esta tarjeta no está disponible
          </h1>

          {/* DESCRIPCIÓN */}
          <p className="mt-5 text-base sm:text-lg leading-7 text-gray-500 max-w-lg mx-auto">
            Lo sentimos, no pudimos encontrar la tarjeta digital que estás buscando.
            Es posible que haya sido eliminada, desactivada o que su enlace haya cambiado.
          </p>

          {/* BLOQUE DE AYUDA */}
          <div className="mt-9 rounded-2xl bg-white border border-gray-200 p-5 sm:p-6 text-left shadow-sm">

            <div className="flex items-start gap-4">

              <div className="w-10 h-10 shrink-0 rounded-full bg-gray-100 flex items-center justify-center">

                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="text-gray-600"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 11v5" />
                  <path d="M12 8h.01" />
                </svg>

              </div>

              <div>
                <h2 className="text-sm font-bold text-gray-800">
                  ¿Qué puedes hacer?
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Verifica que el enlace esté escrito correctamente
                  o solicita a tu contacto que te comparta su
                  tarjeta digital actualizada.
                </p>
              </div>

            </div>

          </div>

          {/* BOTONES */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">

            <Link
              href="/landing/josaneth-rojas-lopez"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 text-white px-7 py-4 text-sm font-semibold transition-all duration-200 hover:bg-gray-700 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>

              Volver a la tarjeta principal
            </Link>

            <a
              href="https://edelco.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 px-7 py-4 text-sm font-semibold transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
            >
              Visitar Edelco
            </a>

          </div>

        </div>

      </section>

      {/* PIE DE PÁGINA */}
      <footer className="w-full bg-white border-t border-gray-200">

        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-6">

          <p className="text-center text-xs text-gray-400">
            Una experiencia digital desarrollada por{" "}
            <a
              href="https://blackgolden.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-600 hover:text-gray-900 transition-colors"
            >
              Black Golden
            </a>
          </p>

        </div>

      </footer>

    </main>
  );
}
