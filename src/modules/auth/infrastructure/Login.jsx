import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../shared/data.json";
import { IllustrationLogin } from "../shared/Image";
import useLogin from "../shared/useLogin";

export const Login = () => {
  const { navigate, handleChange, handleSubmit } = useLogin(data);

  useEffect(() => {
    const isAuth = localStorage.getItem("user");
    if (isAuth) {
      navigate("/administracion/inventario");
    }
  }, []);
  return (
    <div className="card__layout ">
      <form className="form__login" onSubmit={handleSubmit}>
        <div>
          <label>E-mail o Usuario</label>
          <input
            className="input__text__login"
            type="username"
            placeholder="Escribe tu e-mail o usuario"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            className="input__text__login"
            type="password"
            placeholder="Escribe tu contraseña"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button className="btn__login__submit" type="submit">
          Iniciar sesion
        </button>
      </form>
      <IllustrationLogin />
    </div>
  );
};
