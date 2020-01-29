function solve(name, age, weight, height) {
    const bmi = weight / (height * height / 10000);

    const personalData = {name: name, personalInfo: {age: age, weight: weight, height: height}, BMI: Math.round(bmi)};

    if (bmi < 18.5) {
        personalData.status = 'underweight';
    } else if (bmi < 25) {
        personalData.status = 'normal';
    } else if (bmi < 30) {
        personalData.status = 'overweight';
    } else {
        personalData.status = 'obese';
        personalData.recommendation = 'admission required';
    }

    return personalData;
}
