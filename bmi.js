//create new class BMI
class BMI {
    //create constractor to class BMI
    //method  with 2 arguments, that will initialise data
    constructor(height, weight) {
        //local instances
        this.height = height;
        this.weight = weight;
    }//end constructor

    //method calculateBMI
    calculateBMI() {
        //formula to calculate BMI
        let bmi = this.weight / (this.height ** 2);
        return bmi; //returns calculated BMI

    }//end calculateBMI method

}//end class BMI

//instance of BMI class
let MyBmi = new BMI(2, 70);
//invoke the calculateBMI method
let calclatedBMI = MyBmi.calculateBMI();
console.log(calclatedBMI); //print to screen