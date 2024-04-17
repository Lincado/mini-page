import { Link } from "react-router-dom";
import { FaFile, FaGithub, FaList, FaWpforms } from "react-icons/fa";

export const Feed = () => {
  return (
    <>
      <div className="bg-black min-h-screen flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col rounded-lg border gap-5 p-12">
          <Link
            to="https://github.com/Lincado"
            target="_blank"
            className="flex flex-row item-center center gap-5"
          >
            <FaGithub size={30} className="text-green-500" />{" "}
            <h3 className="text-white text-lg">Perfil GitHub</h3>
          </Link>
          <Link
            to="https://task-list-sepia.vercel.app/"
            target="_blank"
            className="flex flex-row item-center center gap-5"
          >
            <FaList size={30} className="text-green-500" />{" "}
            <h3 className="text-white text-lg">Task list</h3>
          </Link>
          <Link
            to="https://form-bills.vercel.app/"
            target="_blank"
            className="flex flex-row item-center center gap-5"
          >
            <FaWpforms size={30} className="text-green-500" />
            <h3 className="text-white text-lg"> Projeto form-bills</h3>{" "}
          </Link>
          <Link
            to="https://file-modal.vercel.app/"
            target="_blank"
            className="flex flex-row item-center center gap-5"
          >
            <FaFile size={30} className="text-green-500" />{" "}
            <h3 className="text-white text-lg">File modal</h3>
          </Link>
        </div>
      </div>
    </>
  );
};
