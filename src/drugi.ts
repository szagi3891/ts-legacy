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
