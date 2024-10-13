// controllers/ContadorController.js
import React, { useState } from 'react';
import ContadorModel from '../models/ContadorModel';
import ContadorView from '../views/ContadorView';

function ContadorController() {
  const [estado, setEstado] = useState(ContadorModel.estadoInicial);

  const manejarIncremento = () => {
    const nuevoEstado = ContadorModel.incrementarContador(estado);
    setEstado(nuevoEstado);
  };

  const manejarReset = () => {
    const nuevoEstado = ContadorModel.resetearContador();
    setEstado(nuevoEstado);
  };

  return (
    <ContadorView
      contador={estado.contador}
      onIncrementar={manejarIncremento}
      onResetear={manejarReset}
    />
  );
}

export default ContadorController;
