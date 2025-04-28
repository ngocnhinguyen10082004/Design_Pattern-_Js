class Singleton {
    constructor() {
      if (Singleton.instance) {
        return Singleton.instance;
      }
      this.data = "Tôi là instance duy nhất";
      Singleton.instance = this;
      return this;
    }
  
    getData() {
      return this.data;
    }
  }

  const instance1 = new Singleton();
  const instance2 = new Singleton();

  console.log(instance1 === instance2); 
  console.log(instance1.getData()); 
  console.log(instance2.getData()); 
  