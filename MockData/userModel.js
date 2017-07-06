module.exports.UserModel = class {

  constructor(){
    this.id=undefined;
    this.username = '';
    this.email = '';
    this.info = new userInfo();

  }
};

class userInfo{

  constructor(){
    this.firstName='';
    this.lastName = '';
    this.jobTitle='';
    this.avatar = '';
    this.phoneNumber = '';
  }
}



