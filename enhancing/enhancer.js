module.exports = {
  succeed,
  fail,
  repair,
  get
};

//item model :
/*
const item = {
  name:name,
  enhancement:enhancement,    from 0 to 20
  durability:durability,    from 0 to 100

}
*/

/*
When enhancement succeeds
The item's enhancement increases by 1.
If the item enhancement level is 20, the enhancement level is not changed.
The durability of the item is not changed.
*/
function succeed(item) {
  if (
    typeof item.name !== "string" ||
    typeof item.durability !== "number" ||
    typeof item.enhancement !== "number" ||
    item.enhancement > 20 ||
    item.enhancement < 0 ||
    item.durability > 100 ||
    item.durability < 0
  ) {
    return { error: "Incorect data" };
  } else if (item.enhancement === 20) {
    return { error: "Cannot enhace item level over 20" };
  }
  return {
    ...item,
    enhancement: enhancement + 1
  };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
