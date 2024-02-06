class Animal {
            
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.vaccineList = [];
    }

    vaccine(){
        let vaccinem2 = {
            name:"m2"
        }
        if(this.vaccineList.lengh>0){
            if(this.vaccineList=="m2"){
                this.vaccineList.push("m3")
            }else{
                this.vaccineList.push(vaccinem2)
            }
        }else{
            this.vaccineList.push(vaccinem2)
        }
    }

    allvacine(){
        if(this.vaccineList.lengh>0){
            this.vaccineList.forEach((vacinei =>{
                console.log(vacinei)
            }))
        }else{
            console.log("no hay ninguna vacuna");
        }

    }
    
  
    getName(){
      return this.name;
    }
    setName(name){
      return this.name=name;
    }
  
  }
  
  const animal1 = new Animal('Dog', 3);
  const animal2 = new Animal('Cat', 5);
   
  console.log(animal1.getName());
  animal1.vaccine()

  animal1.vaccine()
  console.log(animal1.allvacine())
  console.log(animal2.allvacine());