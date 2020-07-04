import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import api from "../../services/api";
import { Container } from '../../components/Container';
import { TextCapsule } from '../../components/TextCapsule';
import { ListWrapper } from './styles';

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
    <Container>
        <TextCapsule>
            <h1>Ler++</h1>
        </TextCapsule>

        {textos.map((texto) => (        
            <ListWrapper>
                <TextCapsule>   
                    <Link to={`/livro/${texto.id}`}>
                        <h2>{texto.title}</h2>
                        <p>
                            {texto.descricao}
                        </p>
                    </Link>
                </TextCapsule>
            </ListWrapper>
        ))}
        <ListWrapper>
            <TextCapsule>   
                <Link to={`/livro/1`}>
                    <h2>O Nome do Vento</h2>
                    <p>
                        With supporting text below as a natural lead-in to additional
                        content. Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Animi libero distinctio numquam, quasi, quo vero modi
                        voluptatum
                    </p>
                </Link>
            </TextCapsule>        
            <TextCapsule>   
                <h2>O Nome do Vento</h2>
                <p>
                    With supporting text below as a natural lead-in to additional
                    content. Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Animi libero distinctio numquam, quasi, quo vero modi
                    voluptatum
                </p>
            </TextCapsule>
            <TextCapsule>   
                <h2>O Nome do Vento</h2>
                <p>
                    With supporting text below as a natural lead-in to additional
                    content. Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Animi libero distinctio numquam, quasi, quo vero modi
                    voluptatum
                </p>
            </TextCapsule>
            <TextCapsule>   
                <h2>O Nome do Vento</h2>
                <p>
                    With supporting text below as a natural lead-in to additional
                    content. Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Animi libero distinctio numquam, quasi, quo vero modi
                    voluptatum
                </p>
            </TextCapsule>
            <TextCapsule>   
                <h2>O Nome do Vento</h2>
                <p>
                    With supporting text below as a natural lead-in to additional
                    content. Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Animi libero distinctio numquam, quasi, quo vero modi
                    voluptatum
                </p>
            </TextCapsule>
            <TextCapsule>   
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
