import React from 'react';
import { SearchBar } from './SearchBar';

export const AuthBar = () => (
  <div className="auth-bar">
    <div className="auth-bar-container">      
      <div className="auth-bar-left">
        <SearchBar />
      </div>
      <div className="auth-bar-right">
        <button className="btn btn-secondary">Iniciar Sesión</button>
        <button className="btn btn-primary">Registrarse</button>
      </div>
    </div>
  </div>
); 