import React, { useEffect, useState } from "react";

import api from "../../services/api";
import SpeechComponent from '../../components/Speech';
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
        <h1 className="logo">Ler++</h1>
      </TextCapsule>

      <ListWrapper>
        {textos.map((texto) => (
          <TextCapsule key={texto.id}>
            <div onClick={() => { history.push('livro/', { textTitle: texto.title, textID: texto.id }) }}>
              <h2>{texto.title}</h2>
              <p>
                {texto.description}
              </p>
            </div>
            <SpeechComponent message={texto.title + '. ' + texto.description} />
          </TextCapsule>
        ))}

      </ListWrapper>
    </Container>
  );
}
