import { List } from './List';
import { ListItem } from './ListItem';
import { ListWrapper } from './ListWrapper';
import { useEffect, useRef, useState } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';

type Props = {
    dictionary: string[];
};

// TODO: detect which direction user is scrolling and clean up displayed list accordingly

export function PageWrapper({ dictionary }: Props) {
    const [sliceEnd, setSliceEnd] = useState<number>(10);
    const [sliceStart, setSliceStart] = useState<number>(0);
    const [index, setIndex] = useState<number>(1);
    const [displaySlice, setDisplaySlice] = useState<string[]>([]);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(function() {
        setDisplaySlice(dictionary.slice(sliceStart, sliceEnd));
    }, [dictionary, sliceStart, sliceEnd]);

    const position = useScrollPosition(wrapperRef);

    if (position > (index * 64)) {
        setIndex(index + 1)
        setSliceStart(sliceStart + 1);
        setSliceEnd(sliceEnd + 3);
        setDisplaySlice(dictionary.slice(sliceStart, sliceEnd));
    }

    if (dictionary === undefined) {
        return <p>Loading...</p>;
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h2 className="mb-8 text-4xl">Dictionary</h2>
            <ListWrapper ref={wrapperRef}>
                <List>
                    {displaySlice.map((word, index) => (
                        <ListItem key={index} data={word} />
                    ))}
                </List>
            </ListWrapper>
        </div>
    );
}
