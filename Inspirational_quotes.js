const quotes = ['Never Give up!!','Dream Big','Go big or Go Home'];

const randomGen = arr => {
    /*
    const first = 'Never Give up!!';
    const second = 'Dream Big';
    const third = 'Go big or Go Home';
    */
    const numberGen = Math.floor(Math.random()* 3);
    console.log(numberGen);
    let quote = arr[numberGen];
    //return quote;
    switch(numberGen){
        case 0:
            return `You Should ${quote}`;
            break;
        case 1: 
            return `Always ${quote}!!`;
            break;
        case 2: 
            return `Remember ${quote}!!`;
            break;
        default: 'Suck it Up!!';
            break;
    }
    
};


console.log(randomGen(quotes));