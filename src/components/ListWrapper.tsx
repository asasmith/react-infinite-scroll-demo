type ListWrapperProps = {
    children: React.ReactNode;
};

const classes = 'h-1/2 w-96 border border-white overflow-y-auto';

export function ListWrapper({ children }: ListWrapperProps): JSX.Element {
    return (
        <div className={classes}>
            {children}
        </div>
    );
}
