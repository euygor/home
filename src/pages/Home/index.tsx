import { useEffect, useState } from 'react';
import * as C from './styles';
import { Center } from '../../components/Center';

import front from '../../assets/front.png';
import back from '../../assets/back.png';
import maintenance from '../../assets/maintenance.png';
import construction from '../../assets/construction.png';

export const Home = () => {
    document.title = 'Home :: Ygor Oliveira';

    const [writer, setWriter] = useState('Ser desenvolvedor é uma viagem onde a próxima parada é a solução de um problema.');

    useEffect(() => {
        setInterval(() => {
            typeWriter();
        }, 15000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const typeWriter = () => {
        let text = writer.split('');

        text.forEach((letter, index) => {
            setTimeout(() => {
                setWriter(writer.substring(0, index) + letter);
            }, index * 100);
        }
        );
    }

    return (
        <Center>
            <C.Top>
                {writer}
            </C.Top>

            <C.Middle>
                <h2>Meus Serviços</h2>
                <p>Abaixo você encontra todos os serviços que ofereço</p>
            </C.Middle>

            <C.Bottom>
                <C.GridCard>
                    <img src={front} alt="" />
                    <p><strong>Desenvolvimento Front-End</strong></p>
                </C.GridCard>
                <C.GridCard>
                    <img src={back} alt="" />
                    <p><strong>Desenvolvimento Back-End</strong></p>
                </C.GridCard>
                <C.GridCard>
                    <img src={maintenance} alt="" />
                    <p><strong>Manutenção de Sistemas</strong></p>
                </C.GridCard>
                <C.GridCard>
                    <img src={construction} alt="" />
                    <p><strong>Em construção...</strong></p>
                </C.GridCard>
                <C.GridCard>
                    <img src={construction} alt="" />
                    <p><strong>Em construção...</strong></p>
                </C.GridCard>
                <C.GridCard>
                    <img src={construction} alt="" />
                    <p><strong>Em construção...</strong></p>
                </C.GridCard>
            </C.Bottom>
        </Center>
    );
}