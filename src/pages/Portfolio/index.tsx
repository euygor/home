import { Center } from "../../components/Center";
import construction from "../../assets/construction.png";

export const Portfolio = () => {
    document.title = 'Portfólio :: Ygor Oliveira';

    return (
        <Center>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={construction} alt="" />
                <strong>Portfolio em construção...</strong>
            </div>
        </Center>
    );
}