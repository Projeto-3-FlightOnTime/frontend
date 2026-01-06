import Button from "./components/Button";
import { SelectField } from "./components/SelectField";
import { useState } from "react";
import { companhiasOptions } from "./data/companhiasOptions";
import { aeroportosOptions } from "./data/aeroportosOptions";
import axios from "axios";

/* 🔹 Helper para pegar label pelo value */
function getLabel(options, value) {
  return options.find((opt) => opt.value === value)?.label || value;
}

export default function App() {
  const [codCompanhia, setCodCompanhia] = useState("");
  const [codAeroportoOrigem, setOrigem] = useState("");
  const [codAeroportoDestino, setDestino] = useState("");
  const [dataHoraPartida, setDataHoraPartida] = useState("");

  const [historico, setHistorico] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function buscarDados() {
    setLoading(true);
    setError(null);

    if (
      !codCompanhia ||
      !codAeroportoOrigem ||
      !codAeroportoDestino ||
      !dataHoraPartida
    ) {
      setError("Preencha todos os campos obrigatórios.");
      setLoading(false);
      return;
    }

    if (codAeroportoOrigem === codAeroportoDestino) {
      setError("Origem e destino não podem ser iguais.");
      setLoading(false);
      return;
    }

    const payload = {
      cod_companhia: codCompanhia,
      cod_aeroporto_origem: codAeroportoOrigem,
      cod_aeroporto_destino: codAeroportoDestino,
      data_hora_partida: new Date(dataHoraPartida).toISOString(),
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/predict`,
        payload
      );

      setHistorico((prev) => [
        {
          id: Date.now(),
          voo: payload,
          resultado: response.data,
        },
        ...prev,
      ]);

      /* 🔹 Reset dos inputs */
      setCodCompanhia("");
      setOrigem("");
      setDestino("");
      setDataHoraPartida("");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Erro ao realizar a predição. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen w-full bg-gray-800 flex flex-col items-center px-4">
      {/* HEADER */}
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
        {/* FORM */}
        <div className="w-full max-w-md border border-gray-400 p-6 rounded-lg flex flex-col gap-4">
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
            <label className="text-indigo-200">
              Data e hora da partida*
            </label>
            <input
              type="datetime-local"
              value={dataHoraPartida}
              onChange={(e) => setDataHoraPartida(e.target.value)}
              className="rounded-md bg-transparent border border-gray-500 px-3 py-2 text-white"
            />
          </div>

          <Button
            type="button"
            name={loading ? "Processando..." : "Buscar"}
            onClick={buscarDados}
            disabled={loading}
          />

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}
        </div>

        {/* RESULTADOS */}
        <div className="w-full max-w-md border border-gray-400 p-4 rounded-lg text-gray-200 max-h-[420px] overflow-y-auto flex flex-col gap-3">
          {historico.length > 0 ? (
            historico.map((item) => (
              <div
                key={item.id}
                className="border border-gray-600 rounded-md p-3 flex flex-col gap-2 text-sm"
              >
                <h2 className="text-indigo-300 font-semibold text-base">
                  Predição de Voo
                </h2>

                <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-gray-300">
                  <span className="text-gray-400">Companhia:</span>
                  <span>
                    {getLabel(
                      companhiasOptions,
                      item.voo.cod_companhia
                    )}
                  </span>

                  <span className="text-gray-400">Origem:</span>
                  <span>
                    {getLabel(
                      aeroportosOptions,
                      item.voo.cod_aeroporto_origem
                    )}
                  </span>

                  <span className="text-gray-400">Destino:</span>
                  <span>
                    {getLabel(
                      aeroportosOptions,
                      item.voo.cod_aeroporto_destino
                    )}
                  </span>

                  <span className="text-gray-400">Partida:</span>
                  <span>
                    {new Date(
                      item.voo.data_hora_partida
                    ).toLocaleString()}
                  </span>
                </div>

                <hr className="border-gray-600 my-1" />

                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-green-400 font-medium">
                    {item.resultado.status_predicao}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Prob. atraso:</span>
                  <span className="text-yellow-300 font-medium">
                    {(item.resultado.probabilidade * 100).toFixed(0)}%
                  </span>
                </div>

                <p className="text-gray-400 text-xs">
                  {item.resultado.messagem}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">
              Resultado / Informações
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
