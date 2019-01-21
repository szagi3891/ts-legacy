//@ts-check
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { sayHello } from './drugi';

console.info('przywitujem się');

sayHello();

setTimeout(() => {
    console.info('Kłuniec przywitania');
}, 5000);

const timeout = (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

class a {
    hell = () => {
        console.info('hell');
    }
}

const aa = new a();
aa.hell();

((async () => {
    console.info('Tick1');
    await timeout(1000);
    console.info('Tick2');
    await timeout(1000);
    console.info('Tick3');
    await timeout(1000);
    console.info('Tick4');
    await timeout(1000);
    console.info('Tick5');
})());

class App extends React.Component {
    render() {
        return (
            <div>
                To jest jakiś kawałek apki reaktowej
            </div>
        );
    }
}

const root = document.getElementById('root');

if (root) {
    ReactDOM.render(<App />, document.getElementById('root'))
}