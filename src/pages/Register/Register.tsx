import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../components/Button/Button";
import { schemaRegister } from "./schemaRegister";
import { UseShowPassword } from "../../components/ButtonPassword/ShowPassword";
import { ButtonPassword } from "../../components/ButtonPassword/ButtonPassword";
import useDataUser from "../../store/data-user";

type FormRegister = z.infer<typeof schemaRegister>;

export const Register = () => {
  const showPassword = UseShowPassword((state) => state.showPassword);
  const [dataUser, setDataUser] = useDataUser((state) => [
    state.dataUser,
    state.setDataUser,
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRegister>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schemaRegister),
  });

  const handleSubmitRegister = (data: FormRegister) => {
    setDataUser(data);
    localStorage.setItem("register", JSON.stringify(dataUser));
  };

  return (
    <>
      <form
        className="bg-black min-h-screen flex flex-col items-center justify-center p-8"
        onSubmit={handleSubmit((data) => handleSubmitRegister(data))}
      >
        <div className="border p-12 w-[400px] h-[700px] rounded-2xl flex flex-col items-center justify-center gap-[50px]">
          <h1 className="text-[28px] text-white">Register</h1>
          <div className="flex flex-col gap-2 items-center">
            <input
              className="w-64 h-12 rounded-full p-5 bg-veryDarkGrey caret-white text-white"
              type="text"
              {...register("name")}
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
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
              placeholder="password"
            />
            <ButtonPassword />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 items-center  relative">
            <input
              className="w-64 h-12 rounded-full p-5 bg-veryDarkGrey caret-white text-white"
              type={showPassword ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder="Confirm password"
            />
            <ButtonPassword />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <Button buttonText="Enviar" />
        </div>
      </form>
    </>
  );
};
