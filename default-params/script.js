// Lecture: Default Parameters

/**
 * Default parameters are the parameters that are assigned value  
 * automatically when we don't assign them manually.
 */

// ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName = (lastName === undefined) ? 'Smith' : lastName;
    nationality = (nationality === undefined) ? 'American' : nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1987, 'Miller', 'Spanish');
*/

// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1987, 'Miller', 'Spanish');



