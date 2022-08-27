import { Person } from './person';

let me: Person = new Person();
me.firstname = 'Ricardo';
me.middlename = 'Pupo';
me.lastname = 'Larguesa';
me.age = 43;
me.emails.push('mail-one@domain.com');
me.emails.push('mail-two@domain.com');

let e: HTMLElement;
e = document.getElementById('person-name');
e.innerText = me.getFullName();
e = document.getElementById('person-emails');
e.innerText = me.emails.toString();
e = document.getElementById('person-age');
e.innerText = me.age.toString();
e = document.getElementById('person-birthday');
e.innerText = me.getBirthdayYear().toString();
