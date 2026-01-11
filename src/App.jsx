import { FlightForm } from "./components/FlightForm";
import { FlightHistory } from "./components/FlightHistory";
import { useFlightPrediction } from "./hooks/useFlightPrediction";

export default function App() {
  const { historico, buscarDados, loading, error } =
    useFlightPrediction();

  return (
    <section className="min-h-screen w-full bg-gray-800 flex flex-col items-center px-4">
      <header className="w-full max-w-6xl flex items-center justify-center gap-3 py-10">
        <img
          src="/icon.svg"
          alt="Flight On Time"
          className="w-10 h-10 invert brightness-200"
        />
        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          Flight On Time
        </h1>
      </header>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 justify-center">
        <FlightForm
          onSubmit={buscarDados}
          loading={loading}
          error={error}
        />
        <FlightHistory historico={historico} />
      </div>
    </section>
  );
}
