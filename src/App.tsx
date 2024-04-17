import { BrowserRouter } from "react-router-dom";
import { RoutePages } from "./routes";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative">
          <Header />
          <RoutePages />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
