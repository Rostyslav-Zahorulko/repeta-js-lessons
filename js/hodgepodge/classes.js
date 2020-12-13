class Hero {
  constructor(name, health, xp) {
    this._name = name;
    this.health = health;
    this.xp = xp;
  }

  get name() {
    console.log(this._name);
  }

  set name(newName) {
    this._name = newName;
  }

  gainExperience(amount) {
    this.xp += amount;
    console.log(`${this._name} gained ${amount} experience`);
  }
}

class Warrior extends Hero {
  constructor(name, health, xp, weapon) {
    super(name, health, xp);

    this.weapon = weapon;
  }

  attack() {
    console.log(`${this._name} attacks with ${this.weapon}`);
  }
}

const ajax = new Warrior('Ajax', 1500, 120, 'sword');

console.log(ajax);

ajax.name;
ajax.name = 'Ajax the Mighty';
ajax.name;
ajax.gainExperience(100);

console.log(ajax);

ajax.attack();

class Priest extends Hero {
  constructor(name, health, xp, spell) {
    super(name, health, xp);

    this.spell = spell;
  }

  cast() {
    console.log(`${this._name} casts ${this.spell}`);
  }
}

const jeremy = new Priest('Jeremy', 800, 500, 'healing');

console.log(jeremy);

jeremy.name;
jeremy.name = 'Jeremy the Wise';
jeremy.name;
jeremy.gainExperience(150);

console.log(jeremy);

jeremy.cast();

console.log(
  'ajax.__proto__ === Warrior.prototype: ',
  ajax.__proto__ === Warrior.prototype,
);

console.log(
  'Warrior.prototype.__proto__ === Hero.prototype: ',
  Warrior.prototype.__proto__ === Hero.prototype,
);

console.log(
  'Hero.prototype.__proto__ === Object.prototype: ',
  Hero.prototype.__proto__ === Object.prototype,
);
