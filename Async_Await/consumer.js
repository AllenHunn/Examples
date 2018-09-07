const firstStep = require('./firstStep');
const secondStep = require('./secondStep');
const thirdStep = require('./thirdStep');

(async () => {
    const toDos = [];
    
    for(let i = 0; i < 10; i++){
        toDos.push(i);
    }

    try{

        for(let i = 0; i < toDos.length; i++){
            try {
                const num = await firstStep();
                const finalNum = await secondStep(num);
                const msg = await thirdStep(finalNum);
                console.log(msg);
            } catch (err) {
                console.log("INNER ERROR", err);
            }
        }
        
        console.log("Moving to foreach");
        
        toDos.forEach(async (todo) => {
            try {
                const num = await firstStep();
                const finalNum = await secondStep(num);
                const msg = await thirdStep(finalNum);
                console.log(msg);
            } catch (err) {
                console.log("FOREACH INNER ERROR", err);
            }
        });

    } catch (err) {
        console.log("ERROR!", err);
    }
})();