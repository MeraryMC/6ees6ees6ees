class ForagerBee extends Grub {
  constructor (){
    super();

    this.age = 10;
    this.job = 'find pollen';
    this.color = 'yellow';
    this.canFly = true;
    this.treasureChest = [];

  }

  forage (){
    this.treasureChest.push('treasure');
  }
};