// CODE here for your Lambda Classes


class Person {
    constructor(personTraits) {
        this.name = personTraits.name;
        this.age = personTraits.name;
        this.location = personTraits.location;
        this.gender = personTraits.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
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
        return `Today we are learning about ${subject}.`
    }

    grade(student, subject) {
        `${student.name} receives a perfect score on ${subject}.`
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
        this.favSubjects.map(item => console.log(item));
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}