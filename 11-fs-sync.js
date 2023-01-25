const {readFile, writeFile} = require('fs')

readFile('./content/firstText.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result;
    
    readFile('./content/firstText.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        const second = result; 

        writeFile('./content/result-sync.txt',
    `here is the result: ${first}, ${second}`,
    (err, result) => {
        if(err)
        {
            console.log(err);
            return;
        }
        console.log(result)
    }
    )

    
    }
    )
    
}
)