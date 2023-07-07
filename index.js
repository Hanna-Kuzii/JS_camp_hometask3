// ---------#1-------
function subtraction (array) {
    if (array.length <= 0) {
        return 0;
    }

    return Math.max(...array) - Math.min(...array);
}

console.log('1. subtraction:', subtraction([65, 12, 2, -4, 222, -39, 3, 10]))

// ---------#2----------
function stringLength (text, lenght) {
    const stringArray = text.toLowerCase().split(/[ (,.!"\/?\\\-)]/);


    return stringArray.filter(word => word.length > lenght);
}

console.log('2. stringLength:', stringLength('My mother! She is so beautiful) Do you love her?', 5))

// ---------#3----------
function endString (firstString, secondString) {
    return firstString.endsWith(secondString);
}

console.log('3. endString:', endString('abc', 'jc'), endString('abs', 'bs'))

// ---------#4----------
function  averages (array) {
    const averageArray = [];

    for (let i = 0; i < array.length - 1; i++) {
        averageArray.push((array[i] + array[i + 1]) / 2)
    }

    return averageArray;
}

console.log('4. averages:', averages([12, 10, 5, 6, 0, 60]));

// ---------#5.1---------
function countVowels (text) {
    const textArray = text.toLowerCase().split('');

    let vowels = 0;

    textArray.forEach(letter => {
        if (letter === 'a' || letter === 'e' || letter === 'y' || letter === 'u' || letter === 'i' || letter === 'o' ) {
            vowels++;
        }
    })

    return vowels;
}

console.log('5.1. countVowels:', countVowels('Hi! What are you doing?'))

// ---------#5.2-----------
function removeABC (text) {
    const textArray = text.split('');

    const regexArray = [/a/, /b/, /c/, /A/, /B/, /C/];

    const arrayWithoutABC = textArray.filter(letter => !regexArray.some(regex => regex.test(letter)));

    return arrayWithoutABC.join('');
}

console.log('5.2. removeABC:', removeABC('Hi! What are you doing?'))

// ----------#6----------
function difference (firstArray, secondArray) {
    const uniqueArray = [...firstArray];

    secondArray.forEach(item => {
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item);
        }
    })

    return uniqueArray.sort((a, b) => a - b);
}

console.log('6. difference:', difference([1, 7, 2, 3, 10], [10, 7, 100, 1, 9]))

// ---------#7---------
function objectReverse (object) {
    const copyObject = {};

    for (let key in object) {
        copyObject[object[key]] = key;
    }

    return copyObject;
}

console.log('7. objectReverse:', objectReverse({red: '#FF0000', green: '#00FF00', white: '#FFFFFF'}));

// -------#8---------
function calculateDifference (things, insurance) {
    let sumThings = 0;

    for (let key in things) {
        sumThings += things[key];
    }

    return sumThings - insurance;
}

console.log('8. calculateDifference:', calculateDifference({ball: 20, skate: 100}, 10))

// ---------#9-----------
function doesBrickFit (a, b, c, w, h) {
    const holeArea = w * h;

    const brickArea = [a * b, b * c, a * c];

    return brickArea.some(area => area <= holeArea);
}

console.log('9. doesBrickFit:', doesBrickFit(1, 2, 1, 1, 1))

// --------#10--------
function  getFileName (adress) {
    const adressArray = adress.split(/[ (,:.!"\/?\\\-)]/);

    return adressArray[adressArray.length - 2];
}

console.log('10. getFileName:', getFileName('c:/WebServers/home/testsite/www/myfile.txt'));

// ---------#11-----------
function cycleStrings(firstString, secondString) {
    if (firstString.length !== secondString.length) {
        return false;
    }

    const doubleString = secondString + secondString;

    return doubleString.includes(firstString);
}

console.log('11. cycleStrings:', cycleStrings('abcd', 'cdab'), cycleStrings('abcd', 'dcab'));

// ---------#12-----------
function doubleArray (binateArray) {
    const lessArray = [];
    const moreArray = [];

    binateArray.sort((a, b) => b - a);

    for (let i = 0; i < binateArray.length - 1; i += 2) {
        lessArray.push(binateArray[i]);
        moreArray.push(binateArray[i + 1])
    }
    
    return {b: lessArray, c: moreArray}
}

console.log('12. doubleArray:', doubleArray([7,8,10,2,-4,0,-36,100,4,11]))

// ------#13----------
function replace(text) {
    const textArray = text.toLowerCase().split(' ');
    textArray[0] = textArray[0].charAt(0).toUpperCase() + textArray[0].slice(1);

    const filteredArray = textArray.filter(word => {
        if (!(/[0-9]/.test(word) && !/[a-z]/.test(word) && word.length > 3)) {
            return word;
        }
    });

    for (let i = 0; i < filteredArray.length; i++) {
        if (filteredArray[i].includes('http')) {
            filteredArray[i] = "[посилання заборонено]";
        } else if (filteredArray[i].includes('@')) {
            filteredArray[i] = "[контакти заборонені]";
        }
    }

    const newText = filteredArray.join(' ');

    if (newText.length > text.length) {
        setInterval(() => {
            alert("Do you need any help?");
        }, 5000);
    }


    return newText;
}

console.log('13. replace:', replace('hi What do you want my e-mail ankuziy@gmail.com and my repositories https://github.com/Hanna-Kuzii?tab=repositories 12587 8888971 477g5r 23 '))
// --------#14----------
function showBrackets(text) {
    const stack = [];

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }

    if (stack.length === 0) {
        document.body.innerHTML = text;
        document.addEventListener('contextmenu', function (event) {
            event.preventDefault();
        });
        document.addEventListener('selectstart', function(event) {
            event.preventDefault();
        });

        return true;
    } else {
        document.body.innerHTML = "Unbalanced parentheses!";
        return false;
    }
}

console.log('14. showBrackets:', showBrackets('((fhfgh)(ghd(h)))'))

// --------#15----------
function password () {
    const passwordArray = [];
    const length = Math.floor(Math.random() * 15) + 6;

    let upperWordCount = 0;
    let digitCount = 0;
    let frequencyDigits = 0;

    while (passwordArray.length < length) {
        let charType = Math.floor(Math.random() * 3);

        if (charType === 0 && upperWordCount <= 2) {
            passwordArray.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
            upperWordCount++;
            frequencyDigits = 0;
        } else if (charType === 1 && digitCount < 5 && frequencyDigits < 2) {
            let digit = Math.floor(Math.random() * 10);
            passwordArray.push(digit);
            digitCount++;
            frequencyDigits++;
        } else {
            let char = String.fromCharCode(Math.floor(Math.random() * 95) + 33);
            if (char !== '_') {
                passwordArray.push(char);
                frequencyDigits = 0;
            }
        }
    }

    passwordArray[Math.floor(Math.random() * (length + 1))] = '_';

    return passwordArray.join('');
}

console.log('15. password:', password())

// ---------#16----------
function sortLessArray (array) {
    array.sort((a, b) => a - b);

    const newArray = [];

    if (array.length % 2 === 1) {
        for (let i = 0; i < array.length; i += 2) {
            if (i !== Math.floor(array.length / 2)) {
                newArray[i / 2] = array[i];
                newArray[array.length - 1 - i / 2] = array[i + 1]
            }

            newArray[Math.floor(array.length / 2)] = array[array.length - 1];
        }
    } else {
        for (let i = 0; i < array.length; i += 2) {
            newArray[i / 2] = array[i];
            newArray[array.length - 1 - i / 2] = array[i + 1]
        }
    }

    return newArray;
}

console.log('16. sortLessArray:', sortLessArray([7, 6, 1, 9, 11, 78, 2, 12, 15, 23, 55]))

// --------#17----------
function frequencySymbols(text) {
    let textObj = {};

    const textArray = text.split('');

  textArray.forEach(letter =>  {
        textObj = {
            ...textObj,
            [letter]: 0,
        }
    })

    for (let key in textObj) {
        for (let i = 0; i < textArray.length; i++)
        if (key === textArray[i]) {
            textObj[key] = textObj[key] + 1;
        }
    }

    const sortedObject = Object.entries(textObj)
        .sort(([, a], [, b]) => b - a)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    return Object.keys(sortedObject)
}

console.log('17. frequencySymbols:', frequencySymbols('Aaaaaaaaaaaaaa Hi! how  are you? Do you want eat something? Or do not want?'));

// --------#18----------
function findString(firstString, secondString) {
    let maxLength = 0;
    let endIndex = 0;

    let lengths = [];

    for (let i = 0; i < firstString.length; i++) {
        lengths[i] = [];

        for (let j = 0; j < secondString.length; j++) {
            if (firstString[i] === secondString[j]) {
                if (i === 0 || j === 0) {
                    lengths[i][j] = 1;
                } else {
                    lengths[i][j] = lengths[i - 1][j - 1] + 1;
                }

                if (lengths[i][j] > maxLength) {
                    maxLength = lengths[i][j];
                    endIndex = i;
                }
            } else {
                lengths[i][j] = 0;
            }
        }
    }

    if (maxLength === 0) {
        return '';
    }

    let startIndex = endIndex - maxLength + 1;
    return firstString.substring(startIndex, endIndex + 1);
}

console.log('18. findString:', findString('abcde', 'abdec') )

// --------#19----------
function cesar (string, number) {
    const stringArray = string.split('');
    const cesarArray = [];
    cesarArray.length = stringArray.length;

    for (let i = 0; i < stringArray.length; i++) {

        if  (i + number < 0) {
            cesarArray[stringArray.length - i + number] = stringArray[i];
        } else if (i + number > stringArray.length - 1) {
            cesarArray[(stringArray.length - i - number) * -1] = stringArray[i];
        } else {
            cesarArray[i + number] = stringArray[i];
        }
    }

    return cesarArray.join('');
}

console.log('19. cesar:', cesar('12 345 6 7 890', 3));

// --------#20----------
function anagramString(firstString, secondString) {
    const secondStringReverse = secondString.split('').reverse().join('');

    return firstString === secondStringReverse;
}

console.log('20. anagramString:', anagramString('key', 'yek'), anagramString('mama', 'amaa'))

// --------#21----------
class University {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    removeStudent(studentId) {
        this.students = this.students.filter(student => student.id !== studentId);
    }
    getStudentById(studentId) {
        return this.students.find(student => student.id === studentId) || null;
    }
    getStudentsByCourse(course) {
        return this.students.filter(student => student.course === course);
    }
    getStudentsByFaculty(faculty) {
        return this.students.filter(student => student.faculty === faculty);
    }
}

const university = new University();

university.addStudent({ id: 1, name: 'Ann', course: 2, faculty: 'Computer Science' });
university.addStudent({ id: 2, name: 'Ivan', course: 3, faculty: 'Mathematics' });
university.addStudent({ id: 3, name: 'Kate', course: 1, faculty: 'Computer Science' });
university.addStudent({ id: 4, name: 'Sasha', course: 1, faculty: 'Mathematics' });

console.log('21. by id:',university.getStudentById(2));

console.log('21. by course:', university.getStudentsByCourse(1));

console.log('21. by faculty:', university.getStudentsByFaculty('Computer Science'));

university.removeStudent(1);

// --------#22----------
function analiseText (text) {
    const wordsArray = text.toLowerCase().split(/[ (,.!"\/?\\\-)]/).filter(item => item.length !== 0);
    const sentencesArray = text.split(/[.?!]/).filter(item => item.length !== 0);
    const symbolsArray = text.split(/[A-Z a-z ]/).filter(item => item.length !== 0);

    let textObj = {};

    wordsArray.forEach(word =>  {
        textObj = {
            ...textObj,
            [word]: 0,
        }
    })

    for (let key in textObj) {
        for (let i = 0; i < wordsArray.length; i++)
            if (key === wordsArray[i]) {
                textObj[key] = textObj[key] + 1;
            }
    }

    const sortedObject = Object.entries(textObj)
        .sort(([, a], [, b]) => b - a)
        .filter(([value]) => value > 1)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {})

    const statistic = {
        'amount words': wordsArray.length,
        'amount sentences': sentencesArray.length,
        'amount symbols': symbolsArray.length,
        'most frequent words': sortedObject,
    }

    return statistic;
}

console.log('22. analiseText:', analiseText('Hi! What do you want now? Coffee or tea? I am fine, and you? Do you need to sleep more maybe?'))
