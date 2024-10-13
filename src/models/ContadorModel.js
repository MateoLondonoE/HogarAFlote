// models/ContadorModel.js

const ContadorModel = {
    estadoInicial: { contador: 0 },
  
    incrementarContador: (estado) => {
      return { contador: estado.contador + 1 };
    },
  
    resetearContador: () => {
      return { contador: 0 };
    }
  };
  
  export default ContadorModel;
  