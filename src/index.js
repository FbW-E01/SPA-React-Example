import { useState } from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock.jsx';

function Wrapper() {
    // useState is a hook that provides state informations for functional components
    // destructuring the result of useState
    const [showClock, setShowClock] = useState(true);

    return <div>

        {false && <Clock />}

        <button onClick={() => setShowClock(!showClock)}>
            Toggle clock
        </button>

    </div>;
}

ReactDOM.render(
    <Wrapper />,
    document.querySelector("#root")
);