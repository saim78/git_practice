const randomGen = () => {
    const first = 'Never Give up!!';
    const second = 'Dream Big';
    const third = 'Go big or Go Home';
    const numberGen = Math.floor(Math.random()* 3);
    console.log(numberGen);
    switch(numberGen){
        case 0:
            return first;
            break;
        case 1: 
            return second;
            break;
        case 2: 
            return third;
            break;
        default: 'Suck it Up!!';
            break;
    }    
};


console.log(randomGen());