import React, { useEffect, useState } from "react";

import api from "../../services/api";
import { Container } from '../../components/Container';
import { TextCapsule } from '../../components/TextCapsule';
import { ListWrapper } from './styles';

export default function List({ history }) {
  const [textos, setTextos] = useState([]);

  useEffect(() => {
    async function loadTexts() {
      const response = await api.get("/textos");
      setTextos(response.data);
    }

    loadTexts();
  }, []);

  return (
    <Container unlimited={true}>
      <TextCapsule className="mb-5">
        <h1>Ler++</h1>
      </TextCapsule>

      <ListWrapper>
        {textos.map((texto) => (
          <TextCapsule onClick={() => { history.push(`livro/${texto.id}`) }}>
            <h2>{texto.titulo}</h2>
            <p>
              {texto.descricao}
            </p>
          </TextCapsule>
        ))}

        <TextCapsule onClick={() => { history.push(`livro/1`) }}>
          <h2>O Nome do Vento</h2>
          <p>
            With supporting text below as a natural lead-in to additional
            content. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Animi libero distinctio numquam, quasi, quo vero modi
            voluptatum
        </p>
        </TextCapsule>
        
      </ListWrapper>
    </Container>
  );
}
