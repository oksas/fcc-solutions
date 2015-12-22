/*
Fill in the object constructor with the methods specified in the tests.

Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).

All functions that take an argument have an arity of 1, and the argument will be a string.

These methods must be the only available means for interacting with the object.
*/

var Person = function(fullName) {
  var firstName = firstAndLast.split(" ")[0];
  var lastName = firstAndLast.split(" ")[1];
  var firstAndLast = fullName;
  this.getFullName = function() { return firstAndLast; };
  this.getFirstName = function() { return firstName; };
  this.getLastName = function() { return lastName; };
  this.setFullName = function(full) { firstAndLast = full; };
  this.setFirstName = function(first) { firstName = first; };
  this.setLastName = function(last) { lastName = last; };
};

var bob = new Person('Bob Ross');
bob.getFirstName();
