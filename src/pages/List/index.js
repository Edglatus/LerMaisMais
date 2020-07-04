import React,{Component} from "react";
import api from '../../services/api';
// import { Container } from './styles';

export default class List extends Component {
  state = {
    textos: [],
  } ;

  async componentDidMount(){
    const response = await api.get('/livros');
    this.setState({filmes: response.data});
  }



  render(){
    const {textos} = this.state;


    return (
      <div className="container">
        <div class="alert alert-info text-center mt-4 mb-5" role="alert">
          Ler++
        </div>
        <div class="card mb-4">
          <div class="card-header text-center">
          {textos.map(texto =>(
                <li key={texto.Titulo}>
                  <p>Titulo: </p>
                  {texto.Titulo}
                </li>
              ))}
          </div>
          <div class="card-body">
            <p class="card-text text-light">
              {textos.map(texto =>(
                <li key={texto.descricao}>
                  <p>Descricao: </p>
                  {texto.descricao}
                </li>
              ))}
            </p>
          </div>
          <div class="card-footer text-muted">Progresso 50%</div>
        </div>
        <div class="card mb-4">
          <div class="card-header text-center">O nome do vento</div>
          <div class="card-body">
            <p class="card-text text-light">
              With supporting text below as a natural lead-in to additional
              content. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Animi libero distinctio numquam, quasi, quo vero modi voluptatum
            </p>
          </div>
          <div class="card-footer text-muted">Progresso 50%</div>
        </div>
        <div class="card mb-4">
          <div class="card-header text-center">O nome do vento</div>
          <div class="card-body">
            <p class="card-text text-light">
              With supporting text below as a natural lead-in to additional
              content. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Animi libero distinctio numquam, quasi, quo vero modi voluptatum
            </p>
          </div>
          <div class="card-footer text-muted">Progresso 50%</div>
        </div>
        <div class="card mb-4">
          <div class="card-header text-center">O nome do vento</div>
          <div class="card-body">
            <p class="card-text text-light">
              With supporting text below as a natural lead-in to additional
              content. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Animi libero distinctio numquam, quasi, quo vero modi voluptatum
            </p>
          </div>
          <div class="card-footer text-muted">Progresso 50%</div>
        </div>
        <div class="card mb-4">
          <div class="card-header text-center">O nome do vento</div>
          <div class="card-body">
            <p class="card-text text-light">
              With supporting text below as a natural lead-in to additional
              content. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Animi libero distinctio numquam, quasi, quo vero modi voluptatum
            </p>
          </div>
          <div class="card-footer text-muted">Progresso 50%</div>
        </div>
      </div>
    );
  }
}


