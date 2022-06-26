class Car {
  constructor(numpulley, enginecapacity, color) {
    this.numpulley = numpulley;
    this.enginecapacity = enginecapacity;
    this.color = color;
  }
  cardetails() {
    return `${this.numpulley} + ${this.enginecapacity} + ${this.color}`;
  }
}
const jeep = new Car(4, 154, "black");

// console.log(jeep);
// console.log(jeep.cardetails());

class Bus extends Car {
  constructor(numpulley, enginecapacity, color,name) {
    super(numpulley, enginecapacity, color)
    this.name;
  }

}

class MiniBus extends Car {
  constructor(numpulley, enginecapacity, color,name,){
    super(numpulley, enginecapacity, color,)
    this.name = name;
  }
  callBusDetails(){
    return super.cardetails() +`${this.name}`  
  }

  changeCharToUp(){ 
    return(
      this.name[0].toUpperCase()+
      this.name.substring(1, this.name.length-1) +
      this.name[this.name.length - 1].toUpperCase()
    );
    
  }
  get returnFunc(){
    return this.changeCharToUp();
  }
}

// class Train extends Car {
//     constructor(numpulley, enginecapacity, color,name,model,year,nickName){
//     super(numpulley, enginecapacity, color,name,model);
//     this.name=nickName 
//     }
//     callMiniBusDetails(){
//     return super.cardetails() `${this.name}`
// }

// }
const myTin = new MiniBus ("aaaa","vhh","black","skoda")
console.log(myTin)



    
    
 