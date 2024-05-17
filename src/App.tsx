import { useState } from 'react';
import { generateDictionary } from './utils/dictionary';
import { PageWrapper } from './components/PageWrapper';
import { useEffect } from 'react';
import './App.css';

function App() {
    const [dictionary, setDictionary] = useState<string[]>([]);

    useEffect(
        function () {
            setDictionary(generateDictionary(1000));
        },
        [setDictionary],
    );

    if (dictionary === undefined) {
        return null;
    }

    return <PageWrapper dictionary={dictionary} />;
}

export default App;
