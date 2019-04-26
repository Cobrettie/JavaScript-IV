// CODE here for your Lambda Classes


class Person {
    constructor(personTraits) {
        this.name = personTraits.name;
        this.age = personTraits.name;
        this.location = personTraits.location;
        this.gender = personTraits.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}


class Instructor extends Person {
    constructor(instructorTraits) {
        super(instructorTraits);
        this.specialty = instructorTraits.specialty;
        this.favLanguage = instructorTraits.favLanguage;
        this.catchPhrase = instructorTraits.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}


class Student extends Person {
    constructor(studentTraits) {
        super(studentTraits);
        this.previousBackground = studentTraits.previousBackground;
        this.className = studentTraits.className;
        this.favSubjects = studentTraits.favSubjects;
    }

    // method that logs out all of the student's favoriteSubjects one by one.
    listsSubjects() {
        return `My favorite subjects are ${this.favSubjects}.`;
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun the sprint challenge on ${subject}.`;
    }
}


class ProjectManager extends Instructor {
    constructor(pmTraits) {
        super(pmTraits);
        this.gradClassName = pmTraits.gradClassName;
        this.favInstructor = pmTraits.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standup times!`;
    }

    debugsCode() {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}


// Person


const jimmy = new Person({
    name: 'Jimmy',
    age: 62,
    location: 'Florida',
    gender: 'male'
});

// console.log(jimmy);
console.log(jimmy.speak());


const kaybear = new Person({
    name: 'Kay Bear',
    age: 16,
    location: 'Florida',
    gender: 'female'
});

// console.log(kaybear);
console.log(kaybear.speak());


const happyMan = new Person({
    name: 'Happy Man',
    age: 784,
    location: 'Everywhere',
    gender: 'male'
});

// console.log(happyMan);
console.log(happyMan.speak());


// Instructor


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-End',
    catchPhrase: `Don't forget the homies`
});

// console.log(fred);
// console.log(fred.speak());
console.log(fred.demo('JavaScript IV'));
console.log(fred.grade(fred, 'JavaScript IV'));


const keiran = new Instructor({
    name: 'Keiran',
    age: 28,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Full-Stack',
    catchPhrase: 'These are just hot dogs'
});

// console.log(keiran);
console.log(keiran.demo('Python!'));
console.log(keiran.grade(keiran, 'Python'));


const dan = new Instructor({
    name: 'Dan Frehner',
    age: 32,
    gender: 'male',
    favLanguage: 'Everything',
    specialty: 'UI/UX',
    catchPhrase: `I'll see you guys tomorrow`
});

// console.log(dan);
console.log(dan.demo('UI/UX!!!'));
console.log(dan.grade(dan, 'UI/UX'));


// Student


const cobrettie = new Student({
    name: 'Cobrettie',
    age: 24,
    location: 'Florida',
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Full-Stack',
    previousBackground: 'Park Ranger',
    className: 'WEBPT6',
    favSubjects: ['Computer Science, AI, Software Engineering']
});


// console.log(cobrettie);
console.log(cobrettie.listsSubjects());
console.log(cobrettie.PRAssignment('JavaScript-IV'));
console.log(cobrettie.sprintChallenge('JavaScript-IV'));


const lynn = new Student({
    name: 'Lynn',
    age: 25,
    location: 'Florida',
    gender: 'female',
    favLanguage: 'CSS',
    specialty: 'Photography',
    previousBackground: 'Sweetheart Photographer',
    className: 'Garner Full-Stack 1',
    favSubjects: [`Garner's course, HTML, CSS, Design, Blogging, Traveling, Photography`]
});

// console.log(lynn);
console.log(lynn.listsSubjects());
console.log(lynn.PRAssignment('Photography 101'));
console.log(lynn.sprintChallenge('Photography'));


const john = new Student({
    name: 'John',
    age: 24,
    location: 'Orlando',
    gender: 'male',
    favLanguage: 'Soccer',
    specialty: 'Fifa',
    previousBackground: 'Accountant',
    className: 'Fifa 19',
    favSubjects: ['Fifa, Madden, Rocket League, Call Of Duty']
});

// console.log(john);
console.log(john.listsSubjects());
console.log(john.PRAssignment('Fifa 19'));
console.log(john.sprintChallenge('Fifa'));