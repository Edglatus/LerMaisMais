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
          <TextCapsule key={texto.id} onClick={() => { 
                history.push('livro/', { textTitle: texto.title, textID: texto.id 
            }) }}>
            <h2>{texto.title}</h2>
            <p>
              {texto.description}
            </p>
          </TextCapsule>
        ))}

      </ListWrapper>
    </Container>
  );
}
