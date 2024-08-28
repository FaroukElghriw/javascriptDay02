const arr=[
    8,
    "55",
    [2,
        "hello World",
        {
            a:2,
            b:5,
        },
        false,

    ],
    {
        arr:[true,1,NAN,new Array(2,33)],
        test:null,
        obj:{d:"Moha",last:[2,false,undefined]},
    },
];
const [, , , { arr: [, , , [, res33]], obj: { d: resMoha } }] = arr;

console.log(res33); 
console.log(resMoha); 

//2

const array = [2, 4, [22, "test"], false, null, { a: 2 }, [22, "test"], "null"];

const result = array.length !== new Set(array).size;

console.log(result); 
