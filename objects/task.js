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
    configurable: true
});

//because it is writable the following statement gets ignored
task.toString = 'hi';

console.log(Object.keys(task));
