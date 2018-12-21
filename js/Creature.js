/*

DND HELPER v1.0.0

*/

class Creature {
    constructor(maxHitPoints, armor, strength, dexterity, constitution, intelligence, wisdom, charisma) {
        this.maxHitPoints = maxHitPoints;
        this.hitPoints = maxHitPoints;
        
        this.armor = armor;
        
        this.strength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
        this.intelligence = intelligence;
        this.wisdom = wisdom;
        this.charisma = charisma;
        
        this.bloodied = false;
    }
    
    heal(health) {
        if (this.hitPoints + health >= this.maxHitPoints) {
            this.hitPoints = this.maxHitPoints;
        } else {
            this.hitPoints += health;
        }
    }
    
    damage(health) {
        if (this.hitPoints - health <= 0) {
            this.hitPoints = 0;
        } else {
            this.hitPoints -= health;
        }
    }
}
