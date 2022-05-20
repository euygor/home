import { Center } from "../../components/Center";
import construction from "../../assets/construction.png";

export const Certificates = () => {
    document.title = 'Certificados :: Ygor Oliveira';

    return (
        <Center>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={construction} alt="" />
                <strong>Certificates em construção...</strong>
            </div>
        </Center>
    );
}