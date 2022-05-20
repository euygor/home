import { Link } from 'react-router-dom';

import * as C from './styles';
import styles from '../../App.module.css';

import { useState } from 'react';

import home from '../../assets/home.png';
import service from '../../assets/service.png';
import education from '../../assets/education.png';
import portfolio from '../../assets/portfolio.png';
import contact from '../../assets/contact.png';
import certificates from '../../assets/certificates.png';
import menu from '../../assets/menu-2.png';
import close from '../../assets/close.png';

export const RightSide = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <C.Toggle onClick={() => toggle()}>
                <img src={isOpen ? close : menu} alt="" />
            </C.Toggle>

            <C.RightSide isOpen={isOpen}>
                <C.Menu>
                    <Link className={styles.tooltip} to="">
                        <span className={styles.tooltiptext}>Home</span>
                        <img src={home} alt="" />
                    </Link>
                    <Link className={styles.tooltip} to="/services">
                        <span className={styles.tooltiptext}>Serviços</span>
                        <img src={service} alt="" />
                    </Link>
                    <Link className={styles.tooltip} to="/education">
                        <span className={styles.tooltiptext}>Educação</span>
                        <img src={education} alt="" />
                    </Link>
                    <Link className={styles.tooltip} to="/certificates">
                        <span className={styles.tooltiptext}>Certificados</span>
                        <img src={certificates} alt="" />
                    </Link>
                    <Link className={styles.tooltip} to="/portfolio">
                        <span className={styles.tooltiptext}>Portfólio</span>
                        <img src={portfolio} alt="" />
                    </Link>
                    <Link className={styles.tooltip} to="/contact">
                        <span className={styles.tooltiptext}>Contato</span>
                        <img src={contact} alt="" />
                    </Link>
                </C.Menu>
            </C.RightSide>
        </div>
    );
}