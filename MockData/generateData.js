const _ = require('lodash');
const faker = require('faker');

module.exports.generate = (count = 100)=>{


  return _.times(count,(n)=>{
      let phoneFormat = faker.phone.phoneNumberFormat(1);
      return {
        id :n+1,
        username: faker.internet.userName(),
        email: faker.internet.email(),
        info:{
            firstName:faker.name.firstName(),
            lastName:faker.name.lastName(),
            jobTitle: faker.name.jobTitle(),
            avatar: faker.internet.avatar(),
            phoneNumber: faker.phone.phoneNumber(phoneFormat)
        }
      }
  });
};


