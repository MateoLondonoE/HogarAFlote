import React from 'react';
import HeaderPP from './headerView';
import FooterPP from './footerView';

function PaginaPrincipal() {
  return (
    <>
    <HeaderPP/>
      <section class="hero">
          <div class="content">
              <h1>Bienvenido a Hogar a Flote</h1>
              <p>Conecta con los mejores proveedores de servicios de mantenimiento del hogar en el Valle de Aburrá</p>
          </div>
      </section>
    <FooterPP/>
    </>
  )
}

export default PaginaPrincipal;
