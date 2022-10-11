
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






// 3) 
let someArray = [321, 63, "Marmelada", 4, "Kruh", 1, 1234, "Tanjur", 50];

function arrayFunc(array) {

    let numberArray = [];
    let stringArray = [];

    array.forEach(item => {
        (typeof(item) === "number") ? numberArray.push(item) : stringArray.push(item);
    })

    numberArray.sort(function(a, b) {return a-b});

    let finalArray = numberArray.concat(stringArray);
    console.log(finalArray)
}
arrayFunc(someArray)







// 4) 

let someObject = {
    '1': [143, 'A', 21],
    '2': 'B',
    '3': [12, 11, 'C']
};


function func(object) {
    Object.entries(object).forEach(([key, value]) => {
        console.log(key, value)
    })
}

func(someObject)








