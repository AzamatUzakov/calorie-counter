document.getElementById('nutritionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('age').value);
    const goal = document.getElementById('goal').value;
    const workouts = document.getElementById('workouts').value;
    const fitnessLevel = document.getElementById('fitnessLevel').value;
    const activityLevel = document.getElementById('activityLevel').value;

    // Calculate BMR
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Activity level multiplier
    let activityMultiplier;
    switch (activityLevel) {
        case 'sedentary':
            activityMultiplier = 1.2;
            break;
        case 'lightlyActive':
            activityMultiplier = 1.375;
            break;
        case 'moderatelyActive':
            activityMultiplier = 1.55;
            break;
        case 'veryActive':
            activityMultiplier = 1.725;
            break;
        case 'superActive':
            activityMultiplier = 1.9;
            break;
        default:
            activityMultiplier = 1.2;
    }

    // Calculate TDEE
    const tdee = bmr * activityMultiplier;

    // Adjust TDEE based on goal
    let adjustedTdee;
    switch (goal) {
        case 'lose':
            adjustedTdee = tdee - 500;
            break;
        case 'maintain':
            adjustedTdee = tdee;
            break;
        case 'gain':
            adjustedTdee = tdee + 500;
            break;
        default:
            adjustedTdee = tdee;
    }

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Ваши ежедневные калории для достижения цели: ${Math.round(adjustedTdee)} ккал.`;
});
