import { useState } from 'react';

export default function App() {
    return <ClickCounter />
}

function ClickCounter() {
    // Array destructuring used here
    // const [counter, setCount] = useState(0);

    const resultOfUseState = useState(777);
    const counter = resultOfUseState[0];
    const setCount = resultOfUseState[1];

    return <button onClick={() => setCount(counter + 1)}>
        Click {counter} times
    </button>
}








// export default function App() {
//     return <LuckyNumbersList numbers={[4,5,9,10]} />
// }

// function LuckyNumbersList({ numbers }) {
//     return numbers.map(n => <Number out={n} add="HI" />)
// }

// function Number({ out, add }) {
//     return <button>{out} {add}</button>
// }