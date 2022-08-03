function max(iterable, key) {
    var maximum = 1000;
    for (var i in iterable) {
      var currKey = key(iterable[i]);
    //   console.log(iterable[i], maximum);
      if (currKey >= key(maximum)) {
       maximum = iterable[i];
      }
    }
    return maximum;
  }


const reverser = (number) => number*-1;
let iter = [1,2,3,4,5];

// console.log(max(iter, reverser));

function changer(object, key, value) {
    var prev = object[key];
    if (Array.isArray(prev)) {
      prev.push(value);
    } else if (typeof prev == 'object' && prev != null) {
      prev[key] = value;
    } else {
        object[key] = value;
    }
    return null;
  }

var obj = {
    a:1,
    b:[1,2,3],
    c: {
        d:4, 
        e:5
    }
};

changer(obj, "a", 10);
changer(obj, "b", 20);
changer(obj, "c", 6);
console.log(obj)
