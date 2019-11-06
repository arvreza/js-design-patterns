var task = {
    title : 'My task',
    description: 'My description'
};

Object.defineProperty(task, 'toString', {
    value: function () {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: true,
    configurable: false
});

//because it is writable the following statement gets ignored
task.toString = 'hi';

var otherTask = Object.create(task); //create a new object using existing object as prototype
otherTask.description = 'Other task description';

console.log(Object.keys(task));
console.log(otherTask.toString());


class NewShape {
    constructor() {
        this.x = 'a';
    }

    toString() {
        return 'hello world';
    }
}

var shape = new Shape();
shape.toString = "hi";

console.log(shape.toString);

// Shape - superclass
function Shape() {
    this.x = 0;
    this.y = 0;
  }
  
  // superclass method
  Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
  };
  
  // Rectangle - subclass
  function Rectangle() {
    Shape.call(this); // call super constructor.
  }
  
  // subclass extends superclass
  Rectangle.prototype = Object.create(Shape.prototype);
  
  //If you don't set Object.prototype.constructor to Rectangle,
  //it will take prototype.constructor of Shape (parent).
  //To avoid that, we set the prototype.constructor to Rectangle (child).
  Rectangle.prototype.constructor = Rectangle;
  
  var rect = new Rectangle();

  Object.defineProperty(rect, 'toString', {
    value: function () {
        return "I am a rectangle!";
    },
    writable: false,
    enumerable: true,
    configurable: false
});

  
console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
  
// Square - subclass of Shapre
var square = Object.create(Shape.prototype);  
console.log('Is square an instance of Shape?', square instanceof Shape); // true

// Square - subclass of Rectangle
square = Object.assign(rect);
console.log('Is square an instance of Rectangle?', square instanceof Rectangle); // true

Object.prototype.valueOf = function() {
    if (this.hasOwnProperty('ToString')) {
        console.log('Already has the "ToString" Property!');
        return this['ToString'];
    } else {
        // It doesn't look like one of my objects, so let's fall back on 
        // the default behavior by reproducing the current behavior as best we can.
        // The apply behaves like "super" in some other languages.
        // Even though valueOf() doesn't take arguments, some other hook may.
        console.log('Does not have the "ToString" Property!');
        return current.apply(this, arguments);
    }
}

console.log(square.toString());

