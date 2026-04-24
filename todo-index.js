let player = {
  name: "Rimzss",
  level: 1,
  inventory: ["Healing salve", "Sword"],
  stamina: 100,
  hp: 100,
  attack: attack,
  damaged: damaged,
};

function attack() {
  player.stamina -= 10;
}

function damaged() {
  player.hp -= 5;
}
function useItem(item) {
  if (item === "Healing salve") {
    player.hp += 5;
    let remainItems = [];
    for (let i = 0; i < player.inventory.length; i++) {
      if (player.inventory[i] !== "Healing salve") {
        remainItems.push(player.inventory[i]);
      }
    }
    player.inventory = remainItems;
    s;
  }
}

player.attack();
player.damaged();

console.log("player", player);
useItem("Healing salve");
