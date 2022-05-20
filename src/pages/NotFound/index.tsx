import { Center } from '../../components/Center';
import * as C from './styles';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    document.title = 'Página não encontrada';

    return (
        <Center>
            <C.NotFound>
                <h1>404</h1>
                <h2>Page not found</h2>
                <Link to="/">Go to home page</Link>
            </C.NotFound>
        </Center>
    );
}