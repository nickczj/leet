const anExampleVariable:string = "Hello World"
console.log(anExampleVariable)

let holder2:string[] = [];

let isUniqueFion = (s: string): boolean => {
    
    interface Holder {
        [details: string]: string;
    }
    let holder: Holder = {};
    let strlen:number = anExampleVariable.length;

    for(var i = 0; i < strlen; i++)
    {
        let tmp:string = anExampleVariable[i];
        if (typeof holder[tmp] != 'undefined')
        {
            return false;
        }
        holder[tmp] = tmp;
    }
    return true;
}

console.log(isUnique(anExampleVariable));

let v:number = 'a'.charCodeAt(0) - 'a'.charCodeAt(0);
console.log(v);