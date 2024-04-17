interface ButtonText {
  buttonText: string;
}
export const Button: React.FC<ButtonText> = ({ buttonText }) => {
  return (
    <>
      <button
        className="bg-green-500 w-[300px] h-11 rounded-full text-black text-center font-bold"
        type="submit"
      >
        {buttonText}
      </button>
    </>
  );
};
