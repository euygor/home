import { Center } from "../../components/Center";
import construction from "../../assets/construction.png";

export const Contact = () => {
    document.title = 'Contato :: Ygor Oliveira';

    return (
        <Center>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={construction} alt="" />
                <strong>Contact em construção...</strong>
            </div>
        </Center>
    );
}