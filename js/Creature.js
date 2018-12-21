// Creature.js
// dnd-helper Creature class

class Creature {

  constructor(maxHitPoints, armor, speed, strength, dexterity, constitution, intelligence, wisdom, charisma) {
          this.maxHitPoints = maxHitPoints;
          this.hitPoints = maxHitPoints;
          this.armor = armor;
          this.speed = speed;

          this.strength = strength;
          this.dexterity = dexterity;
          this.constitution = constitution;
          this.intelligence = intelligence;
          this.wisdom = wisdom;
          this.charisma = charisma;
}

  heal(value) {
    this.hitPoints+=value;
    if (this.hitPoints > this.maxHitPoints) {
      this.hitPoints = this.maxHitPoints;
    }
    return this.hitPoints;
  }

  damage(value) {
    this.hitPoints-=value;
    if (this.hitPoints > this.maxHitPoints) {
      this.hitPoints = this.maxHitPoints;
    }
    return this.hitPoints;
  }

}
