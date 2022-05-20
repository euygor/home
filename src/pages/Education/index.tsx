import { Center } from "../../components/Center";
import construction from "../../assets/construction.png";

export const Education = () => {
    document.title = 'Educação :: Ygor Oliveira';

    return (
        <Center>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={construction} alt="" />
                <strong>Education em construção...</strong>
            </div>
        </Center>
    );
}