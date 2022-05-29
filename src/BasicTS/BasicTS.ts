// declaring primitive type data 
const age: number = 23;
let myName: string | boolean = 'wahid';
myName = 'something';
myName = false;
console.log(myName);

// declaring non-primitive type data 
const numbers: number[] = [12, 31, 42, 42, 5, 3, 5, 5, 57, 7, 7, 7];

// declaring object type with interface 
interface Information {
    name: string;
    age: number | string;
    profession: string;
    isActive?: boolean;
    number: number[];
}

const information: Information = {
    name: 'wahidul alam',
    age: '24',
    profession: 'Web Developer',
    number: numbers
};
console.log(information);

// declaring object type with type 
type Formate = {
    first: string;
    last?: string;
    count: number;
    arr: number[];
}

const formateObj: Formate = {
    first: 'something',
    count: 69,
    arr: [53, 46, 45, 7, 6, 7, 67, 65]
};
console.log(formateObj);

const add = (num1: number, num2: number): void => {
    console.log(num1 + num2);
};
add(2, 4);

const multiply = (num1: number, num2: number): number => {
    const result = num1 + num2;
    return result;
};

const result = multiply(2, 5);
console.log(result);

export { };

