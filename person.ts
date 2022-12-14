export class Person {
  firstname: string;
  middlename: string;
  lastname: string;
  age: number;
  emails: Array<string> = new Array();
  getFullName() {
    return this.firstname + ' ' + this.middlename + ' ' + this.lastname;
  }
  getBirthdayYear() {
    return new Date().getFullYear() - this.age;
  }
}
