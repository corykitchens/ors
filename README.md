# Online Registration System

## Installation
```
$ npm install ors-cp --save
```

## Running Tests
If you have mocha installed globally, e.g. ``` npm install -g mocha```
```
$ mocha
```

Or

```
$ node node_modules/mocha/bin/mocha
```

## Usage
First, import the module via `require`
```
const OnlineRegistration = require('osr-cp');
```
Instantiate the instance of the class and pass in the assumed classData object
```
const classData = {
  "enrollmentCapacity": 8,
  "reservations": [
    {
      "reservationCapacity": 4,
      "sequenceId": "1",
      "effectiveStartDate": "2017-12-01"
    },
    ....
  ],
  "currentEnrollment": {
    "effectiveDate": "2017-12-06",
    "reservedSeatsEnrolled": 1,
    "openSeatsEnrolled": 1
  }
}

//Instantiate instance of OnlineRegistration
//Since os is a native Node module, I use osr for the naming convention
//e.g. OnlineRegistrationSystem
const osr = new OnlineRegistration(classData);
```

## API Docs
Most of the API usage is calling various getters. Optional parameters are available as per the method signature stated below.

### showCourseEnrollment
```osr.showCourseEnrollment();```
Returns an `Object` containing keys `reservedSeatsAvailable`, `openSeatsAvailable`

### getOpenSeatsAvailable
```osr.getOpenSeatsAvailable();```
Returns a `Number` containing the sum of all open seats available for students to enroll in for a course

### getTotalOpenSeats
```osr.getTotalOpenSeats();```
Returns a `Number` containing the sum of all open seats assigned to a course

### getReservedSeatsAvailable
```ors.getReservedSeatsAvailable();```
Returns a `Number` the sum of reserved seats available for a student to enroll (given their correct enrollment critier etc)

### getEnabledReservedSeats
```ors.getEnabledReservedSeats()```
Returns a `Number` containing the sum of all reserved seats enabled in a course e.g. the reserved seats who's effective start date is less than the date of the request.

### getTotalReservedSeats
```osr.getTotalReservedSeats(optionalReservationsArray);```
Returns a `Number` containing the sum of all reserved seats assigned to a course
regardless of the date of request/effective start date for each reservation object.