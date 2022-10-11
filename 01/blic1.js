
// 1)

let object1 = {
    '1': 'A',
};

let object2 = {
    '1': 'C',
    '2': 'A' 
};

let object3 = {
    '2': 'C'
};

function oneKeyObject(objectArray) {

    let oneKeyObjects = [];

    objectArray.forEach(object => {
        const keys = Object.keys(object);
        if (keys.length === 1) {
            oneKeyObjects.push(object);
        }
    });

    return oneKeyObjects;
}

console.log(oneKeyObject([object1, object2, object3]));







// 2) 

function halfOfString(str) {
    let halfStrLength = str.length / 2;
    return str.slice(halfStrLength, str.length); 
}

console.log(halfOfString("Javascript i nije tolko los"))











