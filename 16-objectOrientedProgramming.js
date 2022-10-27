// Unit 16-Object Oriented Programming  //
//////////////////////////////////////////////////////////////
//                      Unit 16.3-Objects Review             //
//////////////////////////////////////////////////////////////
const color = 'teal';

const obj = {};
obj.color = '#3723FF';
obj[color] = '#3723FF';  // [] when speaking of objects means the information is being evaluated.
obj[1+4-2*8] = '#3723FF'; // [] when speaking of objects means the information is being evaluated. Which means it will say that the key will be -11 and the value will be '#3723FF'.

Object.keys(obj)        //This reads as the Object keys of the object 'obj' & it returns as an array of the keys. Ex. ["color", "teal", "-11"]
Object.values(obj)      //This reads as teh Object values of the object 'obj' & it returns as an array the values of this particular obj. Ex. ['#3723FF', '#3723FF', '#3723FF']
Object.entries(obj)     //This reads as the Object key:value pair of the object 'obj' & it returns an array of the key:value pair.
                                // Ex.  
                                //        [ 
                                //          ['color, '#3723FF'],
                                //          ['teal', '#3723FF'], 
                                //          ['-11', '#3723FF'],
                                //            ]

for(let [k,v] of Object.entries(obj)){
    console.log(k,v)
}
//////////////////////////////////////////////////////////////
//      Unit 16.4-Methods Review- Class Notes                //
//////////////////////////////////////////////////////////////
const add   =   (x,y)   => x + y;
const mult  =   (x,y)   => x * y;
const square=   (x)     => x * x;
const power =   (x,y)   => x ** y;
// 
// const myMath = { add, mult, square, power };

//or you can do it like this:

// const myMath ={
    // add: function (x,y){
        // return x + y;
    // },
    // mult : (x,y)=> {
        // return x * y;
    // }
// };
// 
//or//////

const myMath = {
    add(x,y){
        return x + y;
    },
    square(x) {
        return x * x;
    }
};


//////////////////////////////////////////////////////////////
//      Unit 16.5-this and Methods-  Class Notes             //
//////////////////////////////////////////////////////////////

// function getHyoptenuse (a,b){
    // return Math.sqrt(a **2 + b **2);
// }
// function getArea(a,b) {
    // return  a * b / 2;
// }
// 
// const side1 =   4;
// const side2 =   3;
// const side3 =   getHyoptenuse(side1, side2);
// side1 =9;
// side2 =12;
// getHyoptenuse (9,12);

// Can take the above and turn it into an object. 

const rightTriangle = {
    a               : 9,
    b               : 12,
    printThis       : function () {
        console.log(this);
    },
    getArea         : function(){
        return this.a * this.b /2;
    },
    getHyoptenuse   : function (){
        return Math.sqrt(this.a **2 + this.b **2);
    }
}

// if command was 'rightTriangle.printThis' based on the call being from above object,
// returns==>   the entire object above:
//      { a               : 9,
//        b               : 12,
//        printThis       : function () {
//            console.log(this);
//        },
//        getArea         : function(){
//            return this.a * this.b /2;
//        },
//        getHyoptenuse   : function (){
//            return Math.sqrt(this.a **2 + this.b **2);
//        }

//if the printThis is changed slightly, such as below:

//      { a               : 9,
//        b               : 12,
//        printThis       : function () {
//            console.log(this);
//        },
//        getArea         : function(){
//            return this.a * this.b /2;
//        },
//        getHyoptenuse   : function (){
//            this.printThis();
//            return Math.sqrt(this.a **2 + this.b **2);
//        }

// if command was rightTriangle.getHypotenuse:
//  returns  ==> the following based on the immediate above code:

// The entire object & 
//  15 (this is from the math.squared line.)



//////////////////////////////////////////////////////////////
//      Unit 16.6-Constructor functions & new-  Class Notes //
//////////////////////////////////////////////////////////////

function Triangle (a,b) {
    this.a = 9,
    this.b = 12,
    this.getArea = function () {
        return this.a * this.b /2;
    },
    this. getHyoptenuse = function () {
        return Math.sqrt(this.a **2 + this.b **2);
    }
};

//  called in console...Triangle(3,4)   
//  returns 'undefined' because Triangle is a function instead of an object.

//  However, if you do the following:

function Triangle (a,b) {
    this.a = a,
    this.b = b,
    this.getArea = function () {
        return this.a * this.b /2;
    },
    this. getHyoptenuse = function () {
        return Math.sqrt(this.a **2 + this.b **2);
    }
};

new Set ()
//returns... {}

const t1 = new Triangle(3,4);
//return 'undefined' 

t1
//returns... 

{
    a: 3,
    b: 4,
    getArea: function () {
        return 3 * 4 /2;
    },
    getHyoptenuse : function () {
        return Math.sqrt(3 **2 + 4 **2);
    }
};

const t2 = new Triangle (9,12);
//returns... 'undefined'


//Also... the 'new' term in the above code says to make a new object and add all the key's from that object but using the (9,12).

t2

//returns...
{
    a: 9,
    b: 12,
    getArea: function () {
        return 9 * 12 /2;
    },
    getHyoptenuse : function () {
        return Math.sqrt(9 **2 + 12 **2);
    }
};


t1.getHyoptenuse()
//returns... 5

t2.getHyoptenuse()
//returns... 15

//////////////////////////////////////////////////////////////
//      Unit 16.7-Intro to Prototypes-  Class Notes //
//////////////////////////////////////////////////////////////


//... uhhhhh okay so yeah, if had dtrouble go back to this one.




//////////////////////////////////////////////////////////////
//      Unit 16.8-Class Intro-  Class Notes //
//////////////////////////////////////////////////////////////

//talking about creating classes

class Triangle {
    greet() {
        console.log('Hello!!!!')
    }
}
// When naming  a class, capitalize the first letter.


const firstTri   = new Triangle();
const secondTri = new Triangle();

//In console:

firstTri
//returns... Triangle{}

firstTri.greet()
//returns... Hello!!!!

secondTri.greet()
//returns.... Hello!!!!

//back to VSCode:

class Triangle {
    greet() {
        console.log('Hello!!!!')
    }
    display() {
        console.log(`Triangle with sides of ${this.a} and ${this.b}`);
    }
}

// in console:
firstTri.display()
//returns... Triangle with sides of undefined and undefined 

//undefined above is due to this.a & this.b were not defined in the original template, so they are not available to present when these prototypes are called for.


//back to VSCode:
firstTri.a = 3;
firstTri.b = 4;
secondTri.a = 9;
secondTri.b =12;

// When entering this data above to object, it is being added to the immediate object that is assigned to that variable (firstTri & secondTri), but it is not 
// updating the template, OR CLASS OBJECT of 'Triangle' that is part of this example. 

//in console:

// now that .a & .b have been added to firstTri & secondTri

firstTri.display
//returns... Triangle with sides of 3 and 4.

secondTri.display
//returns... Triangle with sides of 9 and 12


//////////////////////////////////////////////////////////////
//      Unit 16.9-Adding Constructors-          Class Notes //
//////////////////////////////////////////////////////////////

//forgot to take notes


//////////////////////////////////////////////////////////////
//      Unit 16.10-Adding Methods -          Class Notes //
//////////////////////////////////////////////////////////////


//Some code from previous units. 

//Main part from this video was how code has to be specific when it is inside of a class object vs. outside,
// specifically look at 'isBig', there are 2. 

Triangle = {
    this.a = a,
    this.b = b,
    getArea () {
        return this.a * this.b /2;
    },
    this. getHyoptenuse = function () {
        return Math.sqrt(this.a **2 + this.b **2);
    },
    isBig () {
        return getArea () > 50;     // This will return an error, because it is not calling 'this.getArea'

        ///So instead, it should look like this.
    }
    isBig () {
        return this.getArea () > 50;
    }

};


//////////////////////////////////////////////////////////////
//      Unit 16.11-Extends -                    Class Notes //
//////////////////////////////////////////////////////////////

//Example for this session is saying that specifications of a mammal and for a cat. Everything in the mammal section of a object would also fall into the cat section, but
//not all of the cat inforamtion needs to go into the mammal section. Therefore, 'extend' can be used. The mammal class can be added to the cat section using 'extend'

class RightTriangle extends Triangle {          //'extends' adds all methods from 'Triangle' class object to RightTriangle class. 
    constructor (a, b, c) {
        for (let side of [a, b, c]) {
            if(!Number.isFinite(side) || side <+ 0){
                throw new Error ('Sides must be positive numbers!');
            }
        }
        if (a * a + b * b !== c * c){
            throw new Error('Invalid C side for right triangle!');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    greet () {
        console.log('Hello from a triangle!!');
    }
    display(){
        console.log(`Triangle with sides of ${this.a}, ${this.b}, and ${this.c}`);
    }
    super();  // This will throw an error. It calls to the 'extends' class, however, it does not pull the constructor from the main class unless you use super. 

    //This is how you should really use it.
    super(a, b, c);

}

//If the heirarchy of a method is being demonstrated, the most immediate class-object-method will be returned & then the code will stop running.
//However, if ...Inside... of the method of the most immediate class, there is a 'super' it will call for the next 'extended' class's method.


class RightTriangle extends Triangle {    
    constructor (a, b, c) {
        for (let side of [a, b, c]) {
            if(!Number.isFinite(side) || side <+ 0){
                throw new Error ('Sides must be positive numbers!');
            }
        }
        if (a * a + b * b !== c * c){
            throw new Error('Invalid C side for right triangle!');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    greet () {
        console.log('Hello from a triangle!!');
    }
    display(){
        console.log(`Triangle with sides of ${this.a}, ${this.b}, and ${this.c}`);
        super.display();
        
        //or

        return 'Right' + super.display()
    }
    super(a, b, c);



