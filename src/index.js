import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

ReactDOM.render(
    <BrowserRouter><App/></BrowserRouter>,
    document.querySelector("#root")
);