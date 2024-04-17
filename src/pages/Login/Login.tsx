import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/Button/Button";
import { ButtonPassword } from "../../components/ButtonPassword/ButtonPassword";
import { loginSchema } from "./loginSchema";
import { useNavigate } from "react-router-dom";
import { UseIsLoggedIn } from "../../store/logged-in";
import { UseShowPassword } from "../../components/ButtonPassword/ShowPassword";
import useDataUser from "../../store/data-user";

type FormLogin = z.infer<typeof loginSchema>;

export const Login = () => {
  const login = UseIsLoggedIn((state) => state.login);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string>("");
  const showPassword = UseShowPassword((state) => state.showPassword);
  const [dataUser, setDataUser] = useDataUser((state) => [
    state.dataUser,
    state.setDataUser,
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLogin>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(loginSchema),
  });

  // Função para recuperar os dados do localStorage
  const getData = () => {
    const item = localStorage.getItem("register");
    if (item !== null) {
      const registerUser = JSON.parse(item);
      setDataUser(registerUser);
    }
  };

  // Função para lidar com o envio do formulário de login
  const handleSubmitLogin = (data: FormLogin) => {
    getData(); // Chamada para recuperar os dados do localStorage
    console.log(dataUser);
    const { email, password } = dataUser;
    if (email === data.email && password === data.password) {
      login();
      navigate("/feed");
    } else {
      setLoginError("Email/Senha incorretos");
    }
  };

  return (
    <>
      <form
        className="bg-black min-h-screen flex flex-col items-center justify-center"
        onSubmit={handleSubmit(handleSubmitLogin)}
      >
        <div className="border p-12 w-[400px] h-[500px] rounded-2xl flex flex-col items-center justify-center gap-[50px]">
          <h1 className="text-[28px] text-white">Sign in</h1>
          <div className="flex flex-col gap-2 items-center">
            <input
              className="w-64 h-12 rounded-full p-5 bg-veryDarkGrey caret-white text-white"
              type="text"
              {...register("email")}
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 items-center relative">
            <input
              className="w-64 h-12 rounded-full p-5 bg-veryDarkGrey caret-white text-white"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Password"
            />
            <ButtonPassword />
            {errors.password && (
              <p className="text-red-500 text-sm justify-content-center">
                {errors.password.message}
              </p>
            )}
          </div>
          {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
          <Button buttonText="login" />
        </div>
      </form>
    </>
  );
};
