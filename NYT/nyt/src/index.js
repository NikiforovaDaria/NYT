import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';

const App = () =>{
    return (
        <div>
            <Main />
        </div>
    )
}  

ReactDOM.render(<App />, document.getElementById('root'));

