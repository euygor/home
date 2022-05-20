import * as C from './styles';

type Props = {
    children: React.ReactNode;
}

export const Center = (props: Props) => {
    const { children } = props;

    return (
        <C.Center>
            {children}
        </C.Center>
    );
}