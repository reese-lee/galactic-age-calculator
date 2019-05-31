// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/scss/bootstrap.scss';
// import './sass/styles.scss';
//
export class Galactic {
  constructor(birthday) {
    this.birthday = new Date(birthday);
  }

  getAge() {
    let currentDate = new Galactic();
    let currentYear = currentDate.getFullYear();
    let age = currentYear - (this.birthday.GetFullYear());
    return age;
  }
}
