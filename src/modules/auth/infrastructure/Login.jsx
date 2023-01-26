import React from "react";
export const Login = () => {
  return (
    <div className="card__layout ">
      <div className="form__login">
        <div>
          <label>E-mail o Usuario</label>
          <input
            className="input__text__login"
            type="username"
            placeholder="Escribe tu e-mail o usuario"
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            className="input__text__login"
            type="password"
            placeholder="Escribe tu contraseña"
          />
        </div>
        <button className="btn__login__submit" type="submit">
          Iniciar sesion
        </button>
        <img
          className="logo__login__enerbit"
          src="https://cdn.discordapp.com/attachments/630944122609467392/1067557205483720735/image_4_1.png"
          alt="enerbitlogo"
        />
      </div>
    </div>
  );
};
