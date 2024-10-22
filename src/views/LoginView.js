import React from 'react';
import PaginaPrincipalView from "./PaginaPrincipalView"
import HeaderPP from './headerView';
import FooterPP from './footerView';
import { Link } from 'react-router-dom';

function Login(){
    return(
        <>
        <HeaderPP/>
        <main>
            <div class="login-container">
                <h1>Inicio Sesión</h1>
                <form class="login-form">
                    <div class="form-group full-width">
                        <input type="email" id="email" placeholder="Correo Electrónico" />
                    </div>
                    <div class="form-group full-width">
                        <input type="password" id="password" placeholder="Contraseña" />
                    </div>
                    <div class="radio-group-genero">
                        <label><input type="radio" name="genero" value="hombre" /> Cliente</label>
                        <label><input type="radio" name="genero" value="mujer" /> Proveedor</label>
                        <label><input type="radio" name="genero" value="otro" /> Administrador</label>
                    </div>
                    
                    <div class="extra-options">
                        <button class="login-btn" type="submit">Iniciar sesión</button>
                    </div>
                    <div>
                        <Link to="/ot" class="forgot-password">¿Olvidaste tu contraseña?</Link>
                    </div>
                    <div class="raya"></div>
                    <div class="extra-options">
                        <Link to="/reg" class="crear-btn" type="submit">Crear cuenta nueva</Link>
                    </div>
                </form>
            </div>        
        </main>
        <FooterPP/>
        </>
    )
}

export default Login;