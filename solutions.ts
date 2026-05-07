// P-1
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num: number) => num % 2 === 0);
}

const getInputNumbers: number[] = [1, 2, 3, 4, 5, 6];
const result: number[] = filterEvenNumbers(getInputNumbers);

//  * P-2:
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

const inputString: string = "typescript";
const reverseInputString: string = reverseString(inputString);

// p-3
type StringOrNumber = string | number;

function checkType(input: StringOrNumber): "String" | "Number" {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
}

// p-4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };

// p-5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}

const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

const updatedBook = toggleReadStatus(myBook);

// p-6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");

// p-7
function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((el) => arr2.includes(el));
}

const intersectionResult = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
