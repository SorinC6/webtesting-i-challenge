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
    enhancement: item.enhancement + 1
  };
}

/*
When enhancement fails
If the item's enhancement is less than 15, the durability of the item is decreased by 5.
If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
*/
function fail(item) {
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
  } else if (item.enhancement < 15) {
    return {
      ...item,
      durability: item.durability - 5
    };
  } else if (item.enhancement >= 15) {
    return {
      ...item,
      durability: item.durability - 10
    };
  }
  if (item.enhancement > 16) {
    return {
      ...item,
      enhancement: item.enhancement - 1
    };
  }
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
