//@ts-check
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { sayHello } from './drugi';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

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

@observer
class App extends React.Component {
    @observable counter = 0;

    constructor(props) {
        super(props);

        //this.counter = 0;

        setInterval(() => {
            this.counter++;

            console.info('Tick',  this.counter);
        }, 1000);
    }

    render() {
        return (
            <div>
                To jest jakiś kawałek apki reaktowej { this.counter }
            </div>
        );
    }
}

const root = document.getElementById('root');

if (root) {
    ReactDOM.render(<App />, document.getElementById('root'))
}

(() => {
    const a = {
        prop1: 'val1',
    };
    const b = {
        prop2: 'val2',
        ...a
    };
    console.info('Spred z JS', b);
})();