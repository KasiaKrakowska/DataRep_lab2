//create new class Vehicle
class Vehicle {
    //create constractor to class Vehicle
    //method  with 3 arguments, that will initialise data
    constructor(make, model, year) {
        //local instances
        this.make = make;
        this.model = model;
        this.year = year;
    }//end constructor

    //method Information that logs make model and year to the console
    Information() {
        //print to the screen
        console.log(`Make: ${this.make}, Model: ${this.model}, Year ${this.year}`);
    }//end method Information

}//end class Vehicle

//instance of the Vehicle class
//let myVehicle = new Vehicle('Ford', 'Fiesta', 2009);
//invoke the Information method
//let info = myVehicle.Information();

//class Cars, inherits from Vehicle class
class Cars extends Vehicle {
    //create constractor to class Cars with 4 arguments
    constructor(make, model, year, doors) {
        //constructor invoke the parents class constructor and pass 3 arguments
        super(make, model, year);
        //new variable
        this.doors = doors;
    }// end constructor

    //method Information that logs make model and year to the console
    Information() {
        //invoke method Information on the parent class
        super.Information();
        //wirite the number of doors to the console
        console.log(`Doors: ${this.doors}`);

    }//end methos Information
}//end Cars class

//new variable with instance of class Cars
let myCar = new Cars('Ford', 'Fiesta', 2009, 5);
myCar.Information();
