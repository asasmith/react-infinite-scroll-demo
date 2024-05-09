import { generateDictionary } from '../utils/dictionary';
import { ListItem } from './ListItem';

export function List() {
    const wordsArr = generateDictionary(500);

    return (
        <div>
            <ul>
                {wordsArr.map((word) => (
                    <ListItem data={word} key={word} />
                ))}
            </ul>
        </div>
    );
}
