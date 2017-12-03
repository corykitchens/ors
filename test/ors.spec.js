const expect = require('chai').expect;
const OnlineRegistration = require('../lib/ors.js');

//Test Fixtures
const classData = {
  "enrollmentCapacity": 10,
  "reservations": [
    {
      "reservationCapacity": 4,
      "sequenceId": "1",
      "effectiveStartDate": "2017-12-01"
    },
    {
      "reservationCapacity": 2,
      "sequenceId": "2",
      "effectiveStartDate": "2017-12-08"
    },
  ],
  "currentEnrollment": {
    "effectiveDate": "2017-12-06",
    "reservedSeatsEnrolled": 2,
    "openSeatsEnrolled": 1
  }
}

const expectedData = {
  totalReservedSeats: 6,
  enabledReserevedSeats: 4,
  reservedSeatsAvailable: 2,
  totalOpenSeats: 4,
  openSeatsAvailable: 3
};

const osr = new OnlineRegistration(classData);

describe('Online Registration System - Reserved Seaats', function() {
  it('should return the total sum of all reserved seats despite start date', function() {
    expect(osr.getTotalReservedSeats()).to.equal(expectedData.totalReservedSeats);
  });
  it('should return the total sum of all reserved seats that are available based on start date', function() {
    expect(osr.getEnabledReservedSeats()).to.equal(expectedData.enabledReserevedSeats);
  });
  it('should return the total sum of reserved seats available', function() {
    expect(osr.getReservedSeatsAvailable()).to.equal(expectedData.reservedSeatsAvailable);
  });
});

describe('Online Registration System - Open Seating', function() {
  it('should return the total sum of open seats within a course', function() {
    expect(osr.getTotalOpenSeats()).to.equal(expectedData.totalOpenSeats);
  });
  it('should return the total sum of open seats available', function() {
    expect(osr.getOpenSeatsAvailable()).to.equal(expectedData.openSeatsAvailable);
  });
});

describe('Online Registration System - Course Enrollment Statistics', function() {
  it('should return an object containing the correct course enrollment statistics', function() {
    const obj = osr.showCourseEnrollment(classData);
    expect(obj.openSeatsAvailable).to.equal(expectedData.openSeatsAvailable);
    expect(obj.reservedSeatsAvailable).to.equal(expectedData.reservedSeatsAvailable);
  });
})