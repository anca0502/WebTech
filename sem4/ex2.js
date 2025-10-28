// class Robot {
//   constructor(name) {
//     this.name = name;
//   }

//   move() {
//     console.log(`${this.name} is moving`);
//   }
// }

// const r0 = new Robot("some robot");
// r0.move();

// class Weapon {
//   constructor(description) {
//     this.description = description;
//   }

//   fire() {
//     console.log(`${this.description} is firing`);
//   }
// }

// const w0 = new Weapon("laser");
// w0.fire();

// class CombatRobot extends Robot {
//   constructor(name) {
//     super(name);
//     this.weapons = [];
//   }

//   addWeapons(w) {
//     this.weapons.push(w);
//   }

//   fire() {
//     console.log("firing all weapons");
//     this.weapons.forEach((element) => {
//       element.fire();
//     });
//   }
// }

// const r1 = new CombatRobot("some combat robot");
// r1.addWeapons(w0);
// r1.move();
// r1.fire();

// Robot.prototype.fly = function () {
//   console.log(`${this.name} is flying`);
// };

// r1.fly();
// implementați următoarea structură de tipuri.
//  Software este un tip care are metoda 'run'.
//   Browser moștenește Software și poate adăuga și
// instala
//    Plugin.
//  Un Browser poate avea multiple Plugin.

class Software {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`${this.name} is running`);
  }
}

class MyPlugin {
  constructor(description) {
    this.description = description;
  }

  install() {
    console.log(`${this.description}  installed`);
  }
}
class Browser extends Software {
  constructor(name) {
    super(name);
    this.plugins = [];
  }

  addPlugin(p) {
    this.plugins.push(p);
  }

  install() {
    console.log("installing all plugins");
    this.plugins.forEach((element) => {
      element.install();
    });
  }
}
const p = new MyPlugin("Plugin1");

const b = new Browser("Browser1");
b.addPlugin(p);
b.run();
b.install();
