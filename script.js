let n;
let m;
let cat = {
  make: (m = prompt("cat's name")),
  weight: (n = prompt("cat's weight")) + "kg",
  check: function (n) {
    if (n < 4 && n > 0) {
      alert("You need to feed your cat");
      cat.feed();
    } else if (n > 4) {
      alert("Your cat need a diet");
      cat.diet();
    } else if (n == 4) {
      alert("Your cat is normal");
    } else {
      alert("Your cat have died please buy a new one");
    }
  },
  feed: function () {
    while (n != 4) {
      n++;
    }
    alert(n + "kg");
  },
  diet: function () {
    while (n != 4) {
      n--;
    }
    alert(n + "kg");
  },
  toString: function () {
    return "Cat " + " " + this.make + " " + this.weight;
  },
};

alert(cat.make);
alert(cat.check(n));

alert(cat);
