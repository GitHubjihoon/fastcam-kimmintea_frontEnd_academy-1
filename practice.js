JavaScript

let name = 'jonadan'
let age = 20;
let weight = 73;
let height = 173;

// 타입 스크립트에서는 변수의 타입을 선언해 줄 수 있다.


TypeScript

let name: string = 'jonadan'
let age: number = 20;
let weight: number = 73;
let height: number = 173;


TypeScript

type Centimeter = number;
type kilogram = Number; 

let name: string = 'jonadan'
let age: number = 20;
let weight: kilogram = 73;
let height: Centimeter = 173;

TypeScript

type rainbowColor = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple';
let color: rainbowColor = 'blue';

color = 'blck'; <----error
