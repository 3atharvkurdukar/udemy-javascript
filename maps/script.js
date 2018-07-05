// Lecture: Maps

/**
 * Maps is a data structure that stores data in a key-value pair.
 * The key can be of any type: number, string, boolean, etc.
 * Maps are iterable. They can be iterated using forEach() or for-of.
 * It has following methods:
 *  1. get():       To get value from key
 *  2. set():       To set key-value pair
 *  3. delete():    To delete an entry
 *  4. clear():     To delete all entries
 *  5. entries():   For destructuring the data
 *  6. size:        To get the size of map
 */

const question = new Map();
question.set('question', 'What\'s the latest version of JavaScript?')
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES7');
question.set(4, 'ES8');
question.set('correct', 3);
question.set(true, 'Correct!');
question.set(false, 'Wrong!');


console.log(question.get('question'));
/*
question.forEach(
    (value, key) => console.log(`${key}: ${value}`)
);
*/
for (const [key, value] of question.entries()) {
    
    if (typeof(key) === 'number') {
        console.log(`Option ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write correct answer:'));
console.log(question.get(ans === question.get('correct')));



