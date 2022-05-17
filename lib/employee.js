class employee {
    constructor(name, email, id) {
      this.name = name;
      this.email = email;
      this.id = id;
    }
    getRole() {
      return this.constructor.name;
    }
    getName() {
      return this.name;
    }
    getEmail() {
        return this.email;
      }
    getId() {
      return this.id;
    }
  }
  
  module.exports = employee;