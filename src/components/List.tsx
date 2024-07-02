type Props = {
        children?: React.ReactNode;
    }

export function List({ children }: Props) {

    return (
        <ul>
            {children}
        </ul>
    );
}
