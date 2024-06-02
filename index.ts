
//BMI Calculator using inquirer
import inquirer from "inquirer";
const question = [
    {
        type: "number",
        name: "weight",
        message: "weight(kg):"
    },
    {
        name: "height",
        type: "number",
        message: "height in meter"
    },
    
]
const BMI_calculator = (weight: number, height: number):number => weight/(height*height);

const main = async() => {
    const {weight, height} = await inquirer.prompt(question)
    console.log(`BMI ${BMI_calculator(weight, height).toFixed(2)}`);
    
}
main()

