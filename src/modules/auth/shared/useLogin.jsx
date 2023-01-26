import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = (data) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const users =
      user.username &&
      data.find(
        (item) =>
          item.username.toLocaleLowerCase() ===
          user.username.toLocaleLowerCase()
      );
    const password = users && users.password;
    if (password === user.password && users.role === "admin") {
      localStorage.setItem("user", JSON.stringify(users));
      navigate("/administracion/inventario");
    }
  };
  return { navigate, handleChange, handleSubmit };
};
export default useLogin;
