import './App.css';
import { List } from './components/List';
import { ListWrapper } from './components/ListWrapper';

function App() {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h2 className="mb-8 text-4xl">Dictionary</h2>
            <ListWrapper>
                <List />
            </ListWrapper>
        </div>
    );
}

export default App;
