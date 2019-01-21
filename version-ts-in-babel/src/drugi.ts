const timeout = async (time: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    })
};

export const sayHello = async () => {
    console.info('DrugiTS: Hello');
    await timeout(2000);
    console.info('DrugiTS: TS world');
};

(() => {
    const a = {
        prop1: 'val1',
    };
    const b = {
        prop2: 'val2',
        ...a
    };
    console.info('Spred z TS', b);
})();