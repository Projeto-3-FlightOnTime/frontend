import { FlightForm } from "./components/FlightForm";
import { FlightHistory } from "./components/FlightHistory";
import { useFlightPrediction } from "./hooks/useFlightPrediction";

export default function App() {
  const { historico, buscarDados, loading, error } =
    useFlightPrediction();

  return (
    <section className="min-h-screen w-full bg-gray-800 flex flex-col items-center px-4">
      {/* Header */}
      <header className="w-full max-w-6xl flex items-center justify-center gap-2 py-2">
        <img
          src="/icon.png"
          alt="Flight On Time"
          className="w-32 h-32"
        />
        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          Flight On Time
        </h1>
      </header>

      {/* Main */}
      <main className="w-full max-w-6xl flex flex-col md:flex-row gap-6 justify-center flex-1">
        <FlightForm
          onSubmit={buscarDados}
          loading={loading}
          error={error}
        />
        <FlightHistory historico={historico} />
      </main>

      {/* Footer */}
      <footer className="w-full py-2 mt-10 border-t border-gray-700 text-center">
        <p className="text-sm text-gray-400">
          TechFlight — Projeto desenvolvido no Hackathon
        </p>
      </footer>
    </section>
  );
}
