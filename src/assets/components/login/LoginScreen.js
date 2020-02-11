import React from 'react';
import Login from './Login.jsx';
import './Login.css'


export function LoginScreen() {
  
    return (
      <div className="login-screen">
          <div className="login-box-left">
          <img src={require('./01_logo-ae.png')} className="login-logo" />
          <h1 className="login-h1">Encuentra a tu equipo ideal</h1>
          <Login />
          <div className="section-7">
              <h6 className="h6">¿No tienes cuenta? <a className="link-login">Regístrate</a></h6>
          </div>
          </div>

          <div className="login-box-right">
          <img src={require('./02_img-login.png')} className="login-photo" />
          </div>
      </div>
    );
  }  
