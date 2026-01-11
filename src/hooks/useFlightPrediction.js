import { useState } from "react";
import axios from "axios";

export function useFlightPrediction() {
  const [historico, setHistorico] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function buscarDados(payload) {
    setLoading(true);
    setError(null);

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
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Erro ao realizar a predição. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  }

  return { historico, buscarDados, loading, error };
}
