import { getLabel } from "../utils/labelUtils";
import { companhiasOptions } from "../data/companhiasOptions";
import { aeroportosOptions } from "../data/aeroportosOptions";

export function FlightHistory({ historico }) {
  return (
    <div className="w-full max-w-md border border-gray-400 p-4 rounded-lg text-gray-200 max-h-[460px] overflow-y-auto flex flex-col gap-3">
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
                  {new Date(item.voo.data_hora_partida).toLocaleString('pt-BR', 
                  {timeZone: 'UTC'})}
              </span>
            </div>

            <hr className="border-gray-600 my-1" />

            <div className="flex justify-between">
              <span
                className={`font-medium ${
                  item.resultado.status_predicao === "ATRASADO"
                    ? "text-orange-400"
                    : "text-green-400"
                }`}
              >
                {item.resultado.status_predicao}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Prob. atraso:</span>
              <span className="text-yellow-300 font-medium">
                {(item.resultado.probabilidade * 100).toFixed(0)}%
              </span>
            </div>

            <p className="text-gray-400 text-base">
              {item.resultado.mensagem}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-400 text-center">
          Resultado / Informações
        </p>
      )}
    </div>
  );
}
