import { useState } from "react";
import Button from "./Button";
import { SelectField } from "./SelectField";
import { companhiasOptions } from "../data/companhiasOptions";
import { aeroportosOptions } from "../data/aeroportosOptions";
import { toOffsetISOString } from "../utils/dateUtils";

export function FlightForm({ onSubmit, loading, error }) {
  const [codCompanhia, setCodCompanhia] = useState("");
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [dataHora, setDataHora] = useState("");
  const [formError, setFormError] = useState(null);

  function handleSubmit() {
    setFormError(null);

    if (!codCompanhia || !origem || !destino || !dataHora) {
      setFormError("Preencha todos os campos obrigatórios.");
      return;
    }

    if (origem === destino) {
      setFormError("Origem e destino não podem ser iguais.");
      return;
    }

    onSubmit({
      cod_companhia: codCompanhia,
      cod_aeroporto_origem: origem,
      cod_aeroporto_destino: destino,
      data_hora_partida: toOffsetISOString(dataHora),
    });

    setCodCompanhia("");
    setOrigem("");
    setDestino("");
    setDataHora("");
  }

  return (
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
        value={origem}
        onChange={(e) => setOrigem(e.target.value)}
      />

      <SelectField
        label="Destino"
        required
        options={aeroportosOptions}
        value={destino}
        onChange={(e) => setDestino(e.target.value)}
      />

      <div className="flex flex-col gap-2">
        <label className="text-indigo-200">
          Data e hora da partida*
        </label>
        <input
          type="datetime-local"
          value={dataHora}
          onChange={(e) => setDataHora(e.target.value)}
          className="rounded-md bg-transparent border border-gray-500 px-3 py-2 text-white"
        />
      </div>

      <Button
        type="button"
        name={loading ? "Processando..." : "Buscar"}
        onClick={handleSubmit}
        disabled={loading}
      />

      {(formError || error) && (
        <p className="text-red-400 text-sm text-center">
          {formError || error}
        </p>
      )}
    </div>
  );
}
