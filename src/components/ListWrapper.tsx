import { forwardRef } from 'react';

interface Props {
    children?: React.ReactNode;
}

const classes = 'h-1/2 max-h-[1000px] w-96 border border-white overflow-y-auto';

export const ListWrapper = forwardRef(function (
    props: Props,
    ref: React.Ref<HTMLDivElement>,
) {
    return (
        <div className={classes} ref={ref}>
            {props.children}
        </div>
    );
});
