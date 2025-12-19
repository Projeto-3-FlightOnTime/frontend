import Button from "./components/Button";
import { SelectField } from "./components/SelectField";
import { useState } from "react";
import { companhiasOptions } from "./data/companhiasOptions";
import { aeroportosOptions } from "./data/aeroportosOptions";
import axios from "axios";

export default function App() {
  const [codCompanhia, setCodCompanhia] = useState("");
  const [codAeroportoOrigem, setOrigem] = useState("");
  const [codAeroportoDestino, setDestino] = useState("");
  const [dataHoraPartida, setDataHoraPartida] = useState("");
  const [resultado, setResultado] = useState(null);

  async function buscarDados() {
    const payload = {
      codCompanhia,
      codAeroportoOrigem,
      codAeroportoDestino,
      dataHoraPartida
    };

    try {
      const response = await axios.post("/predict", payload);
      setResultado(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados", error);
    }
  }

  return (
    <section className="min-h-screen w-full bg-gray-800 flex flex-col items-center px-4">

      <header className="w-full max-w-6xl flex items-center justify-center gap-3 py-10">
        <img
          src="/icon.svg"
          alt="Flight On Time"
          className="w-10 h-10 invert brightness-200"
        />
        <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-wide">
          Flight On Time
        </h1>
      </header>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 items-start justify-center">

        <div className="w-full max-w-md mx-auto border border-gray-400 p-6 rounded-lg flex flex-col gap-4">
          <SelectField
            label="Empresa Aérea"
            required
            options={companhiasOptions}
            value={codCompanhia}
            onChange={(e) => setCodCompanhia(e.target.value)}
          />

          <SelectField
            label="Origem"
            required
            options={aeroportosOptions}
            value={codAeroportoOrigem}
            onChange={(e) => setOrigem(e.target.value)}
          />

          <SelectField
            label="Destino"
            required
            options={aeroportosOptions}
            value={codAeroportoDestino}
            onChange={(e) => setDestino(e.target.value)}
          />

          <div className="flex flex-col gap-2">
            <label className="text-indigo-200">Data partida*</label>
            <input
              type="date"
              value={dataHoraPartida}
              onChange={(e) => setDataHoraPartida(e.target.value)}
              className="rounded-md bg-transparent border border-gray-500 px-3 py-2 text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <Button type="button" name="Buscar" onClick={buscarDados} />
        </div>

        <div className="w-full max-w-md mx-auto border border-gray-400 p-6 rounded-lg text-gray-300 h-60">
          {resultado ? (
            <pre className="text-sm overflow-auto">
              {JSON.stringify(resultado, null, 2)}
            </pre>
          ) : (
            "Resultado / Informações"
          )}
        </div>
      </div>
    </section>
  );
}
