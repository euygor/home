import { useState } from 'react';

import * as C from './styles';

import avatar from '../../assets/avatar.jpeg';
import email from '../../assets/email.png';
import whatsapp from '../../assets/whatsapp.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import menu from '../../assets/menu.png';
import close from '../../assets/close.png';

export const LeftSide = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <C.Toggle onClick={() => toggle()}>
                <img src={isOpen ? close : menu} alt="" />
            </C.Toggle>

            <C.LeftSide isOpen={isOpen}>
                <C.Card>
                    <C.Avatar src={avatar} alt="" />
                    <C.Name href="">Ygor Oliveira</C.Name>
                    <C.Category>Desenvolvedor FullStack</C.Category>
                    <C.Contacts>
                        <a href="mailto:ygor.oliveiragb@gmail.com">
                            <img src={email} alt="" />
                        </a>
                        <a href="https://wa.me/5587991047609?text=Olá Ygor, desejo fazer um orçamento." target="_blank" rel="noreferrer noopener">
                            <img src={whatsapp} alt="" />
                        </a>
                        <a href="https://github.com/euygor" target="_blank" rel="noreferrer noopener">
                            <img src={github} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/euygor" target="_blank" rel="noreferrer noopener">
                            <img src={linkedin} alt="" />
                        </a>
                    </C.Contacts>
                    <C.CV>
                        <a href="https://download1488.mediafire.com/n5q77v06e0kg/a2acg1wjh97gxg7/Curr%C3%ADculo+Ygor+Oliveira.pdf" download={true} rel="noreferrer noopener">Download CV</a>
                    </C.CV>
                </C.Card>
                <hr />
                <C.Content>
                    <h5>Tecnologias</h5>
                    <C.Techs>
                        <p>HTML5</p>
                        <span>100%</span>
                    </C.Techs>
                    <C.Techs>
                        <p>CSS3</p>
                        <span>100%</span>
                    </C.Techs>
                    <C.Techs>
                        <p>JavaScript</p>
                        <span>100%</span>
                    </C.Techs>
                    <C.Techs>
                        <p>Node</p>
                        <span>100%</span>
                    </C.Techs>
                    <C.Techs>
                        <p>React</p>
                        <span>100%</span>
                    </C.Techs>
                    <C.Techs>
                        <p>TypeScript</p>
                        <span>100%</span>
                    </C.Techs>
                    <C.Techs>
                        <p>PHP</p>
                        <span>100%</span>
                    </C.Techs>
                    <C.Techs>
                        <p>Laravel</p>
                        <span>100%</span>
                    </C.Techs>
                    <C.Techs>
                        <p>MySQL</p>
                        <span>100%</span>
                    </C.Techs>
                    <C.Techs>
                        <p>Git</p>
                        <span>100%</span>
                    </C.Techs>
                    <C.Techs>
                        <p>GitHub</p>
                        <span>100%</span>
                    </C.Techs>
                </C.Content>
            </C.LeftSide>
        </div>
    );
}