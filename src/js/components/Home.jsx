import React from "react";
import { Counter } from "./Counter.jsx";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary mb-3">
          Bienvenido al contador TURBOGOD de JS de Mtpeze
        </h1>
        <p className="lead text-muted">
          Contador automático usando React Hooks (useState) y setInterval (Sin
          useEffect así que lo que se puede)
        </p>
        <hr className="my-4" />
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow-lg border-0">
            <div className="card-body p-5">
              <Counter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
