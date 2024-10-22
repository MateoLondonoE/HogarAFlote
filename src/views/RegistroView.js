import React, { useState, useEffect } from 'react';
import HeaderPP from './headerView';
import FooterPP from './footerView';
import { Link } from 'react-router-dom';

function Registro() {
  // Estado para almacenar la lista de años
  const [years, setYears] = useState([]);

  useEffect(() => {
    // Definir el rango de años (desde 1905 hasta el actual)
    const startYear = 1905;
    const currentYear = new Date().getFullYear();
    const yearList = [];

    // Generar las opciones de los años
    for (let year = currentYear; year >= startYear; year--) {
      yearList.push(year);
    }

    // Actualizar el estado con la lista de años
    setYears(yearList);
  }, []);

  return (
    <>
      <HeaderPP />
      <main>
        <div className="registro-container">
          <h1>Crea una cuenta</h1>
          <form>
            <div className="form-group">
              <input type="text" placeholder="# Cédula" />
              <input type="text" placeholder="Primer Nombre" />
            </div>

            <div className="form-group">
              <input type="text" placeholder="Segundo Nombre" />
              <input type="text" placeholder="Apellidos" />
            </div>

            <label id="campo">Fecha de nacimiento</label>
            <div className="form-group">
              <div className="form-row">
                <select id="day" name="day">
                  {[...Array(31)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>

                <select id="month" name="month">
                  <option value="1">Enero</option>
                  <option value="2">Febrero</option>
                  <option value="3">Marzo</option>
                  <option value="4">Abril</option>
                  <option value="5">Mayo</option>
                  <option value="6">Junio</option>
                  <option value="7">Julio</option>
                  <option value="8">Agosto</option>
                  <option value="9">Septiembre</option>
                  <option value="10">Octubre</option>
                  <option value="11">Noviembre</option>
                  <option value="12">Diciembre</option>
                </select>

                {/* Aquí generamos el select de los años dinámicamente */}
                <select id="year" name="year">
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <label id="campo">Género</label>
            <div className="radio-group-genero">
              <label>
                <input type="radio" name="genero" value="hombre" /> Hombre
              </label>
              <label>
                <input type="radio" name="genero" value="mujer" /> Mujer
              </label>
              <label>
                <input type="radio" name="genero" value="otro" /> Otro
              </label>
            </div>

            <div className="form-group">
              <input type="text" placeholder="Dirección" />
              <input type="text" placeholder="Teléfono" />
            </div>

            <div className="form-group full-width">
              <input type="email" placeholder="Correo Electrónico" />
            </div>

            <div className="form-group">
              <input type="text" placeholder="Usuario" />
              <input type="password" placeholder="Contraseña" />
            </div>

            <div className="radio-group">
              <label id="campo">Rol</label>
              <label>
                <input type="radio" name="rol" value="cliente" /> Cliente
              </label>
              <label>
                <input type="radio" name="rol" value="proveedor" /> Proveedor
              </label>
            </div>

            <div className="btn-container">
              <button type="submit">Registrarse</button>
            </div>
            <div>
            <Link to="/login" className="ya-tiene-cuenta">¿Ya tienes una cuenta?</Link>
            </div>
          </form>
        </div>
      </main>
      <FooterPP />
    </>
  );
}

export default Registro;
