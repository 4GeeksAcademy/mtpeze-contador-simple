import React, { useState } from "react";

export const Counter = () => {
  // Estados
  const [counter, setCounter] = useState(0);
  const [intervaloId, setIntervaloId] = useState(null);

  // Funciones
  const handleIniciar = () => {
    if (intervaloId) return;

    const id = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    setIntervaloId(id);
  };

  const handlePausar = () => {
    clearInterval(intervaloId);
    setIntervaloId(null);
  };

  const handleReset = () => {
    clearInterval(intervaloId);
    setIntervaloId(null);
    setCounter(0);
  };

  // Variable auxiliar
  const estaContando = intervaloId !== null;

  // Renderizado
  return (
    <div className="container text-center mt-5">
      {/* Indicador de estado */}
      <div className="mb-3">
        {estaContando ? (
          <span className="badge bg-success fs-5">⏱️ Contando...</span>
        ) : (
          <span className="badge bg-secondary fs-5">⏸️ Pausado</span>
        )}
      </div>

      {/* Número del contador */}
      <h1 className="display-1 fw-bold">{counter}</h1>
      <p className="lead text-muted">segundos</p>

      {/* Botones de control */}
      <div className="btn-group mt-4" role="group">
        <button
          onClick={handleIniciar}
          className="btn btn-success btn-lg"
          disabled={estaContando}
        >
          ▶️ Iniciar
        </button>
        <button
          onClick={handlePausar}
          className="btn btn-warning btn-lg"
          disabled={!estaContando}
        >
          ⏸️ Pausar
        </button>
        <button onClick={handleReset} className="btn btn-danger btn-lg">
          🔄 Reset
        </button>
      </div>
    </div>
  );
};
