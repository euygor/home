import { Center } from "../../components/Center";
import construction from "../../assets/construction.png";

export const Services = () => {
    document.title = 'Serviços :: Ygor Oliveira';

    return (
        <Center>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={construction} alt="" />
                <strong>Services em construção...</strong>
            </div>
        </Center>
    );
}