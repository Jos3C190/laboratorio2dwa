import React from 'react';

function CardAutomovil({ marca, modelo, anno, color }) {
  return (
    <div className="card-automovil" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>Información del Automóvil</h3>
      <p><strong>Marca:</strong> {marca}</p>
      <p><strong>Modelo:</strong> {modelo}</p>
      <p><strong>Año:</strong> {anno}</p>
      <p><strong>Color:</strong> {color}</p>
    </div>
  );
}

export default CardAutomovil;