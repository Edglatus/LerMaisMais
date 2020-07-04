import React, { useEffect, useState } from "react";
import api from "../../services/api";
// import { Container } from './styles';

export default function List() {
  const [textos, setTextos] = useState([]);

  useEffect(() => {
    async function loadTexts() {
      const response = await api.get("/livros");
      setTextos(response.data);
    }

    loadTexts();
  }, []);

  return (
    <div className="container">
      <div class="alert alert-info text-center mt-4 mb-5" role="alert">
        <h1 className="m-0">Ler++</h1>
      </div>
      <div class="row">
        <div className="col-md-6">
          <div class="card mb-4">
            <div class="card-header text-center">
              {textos.map((texto) => (
                <li key={texto.Titulo}>
                  <p>Titulo: </p>
                  {texto.Titulo}
                </li>
              ))}
            </div>
            <div class="card-body">
              <p class="card-text text-light">
                {textos.map((texto) => (
                  <li key={texto.descricao}>
                    <p>Descricao: </p>
                    {texto.descricao}
                  </li>
                ))}
              </p>
            </div>
            <div class="card-footer text-muted">
              <div className="d-flex justify-content-between">
                <small>Progresso</small>
                <small>50%</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div class="card mb-4">
            <div class="card-header text-center">O nome do vento</div>
            <div class="card-body">
              <p class="card-text text-light">
                With supporting text below as a natural lead-in to additional
                content. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Animi libero distinctio numquam, quasi, quo vero modi
                voluptatum
              </p>
            </div>
            <div class="card-footer text-muted">
              <div className="d-flex justify-content-between">
                <small>Progresso</small>
                <small>50%</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div className="col-md-6 col-xl-4">
          <div class="card mb-4">
            <div class="card-header text-center">O nome do vento</div>
            <div class="card-body">
              <p class="card-text text-light">
                With supporting text below as a natural lead-in to additional
                content. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Animi libero distinctio numquam, quasi, quo vero modi
                voluptatum
              </p>
            </div>
            <div class="card-footer text-muted">
              <div className="d-flex justify-content-between">
                <small>Progresso</small>
                <small>50%</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-4">
          <div class="card mb-4">
            <div class="card-header text-center">O nome do vento</div>
            <div class="card-body">
              <p class="card-text text-light">
                With supporting text below as a natural lead-in to additional
                content. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Animi libero distinctio numquam, quasi, quo vero modi
                voluptatum
              </p>
            </div>
            <div class="card-footer text-muted">
              <div className="d-flex justify-content-between">
                <small>Progresso</small>
                <small>50%</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div className="col-md-6 col-xl-4">
          <div class="card mb-4">
            <div class="card-header text-center">O nome do vento</div>
            <div class="card-body">
              <p class="card-text text-light">
                With supporting text below as a natural lead-in to additional
                content. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Animi libero distinctio numquam, quasi, quo vero modi
                voluptatum
              </p>
            </div>
            <div class="card-footer text-muted">
              <div className="d-flex justify-content-between">
                <small>Progresso</small>
                <small>50%</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-4">
          <div class="card mb-4">
            <div class="card-header text-center">O nome do vento</div>
            <div class="card-body">
              <p class="card-text text-light">
                With supporting text below as a natural lead-in to additional
                content. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Animi libero distinctio numquam, quasi, quo vero modi
                voluptatum
              </p>
            </div>
            <div class="card-footer text-muted">
              <div className="d-flex justify-content-between">
                <small>Progresso</small>
                <small>50%</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
