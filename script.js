document.getElementById("calorieForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const unit = document.getElementById("unit").value;
  const age = +document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  let weight = +document.getElementById("weight").value;
  let height = +document.getElementById("height").value;
  const activity = +document.getElementById("activity").value;
  const goal = document.getElementById("goal").value;

  if (unit === "imperial") {
    weight = weight * 0.4536;
    height = height * 2.54;
  }

  let bmr =
    gender === "male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;

  let tdee = bmr * activity;
  if (goal === "loss") tdee -= 500;
  else if (goal === "gain") tdee += 300;

  document.getElementById("results").innerHTML = `
    <h3>Recommended Daily Calories: ${Math.round(tdee)}</h3>
  `;
  document.getElementById("dietSection").style.display = "block";
});

function generateDietPlan() {
  const style = document.getElementById("dietStyle").value;
  const plans = {
    balanced: ["Oatmeal + Berries", "Grilled Chicken + Rice", "Salmon + Veggies"],
    keto: ["Eggs + Avocado", "Chicken Salad", "Zucchini Noodles + Beef"],
    vegan: ["Tofu Scramble", "Lentil Soup", "Chickpea Salad"],
    vegetarian: ["Greek Yogurt + Fruit", "Paneer Wrap", "Veggie Stir Fry"],
    mediterranean: ["Hummus + Pita", "Grilled Fish + Couscous", "Greek Salad"],
    "high-protein": ["Protein Shake", "Turkey Wrap", "Steak + Broccoli"],
    "low-carb": ["Boiled Eggs", "Zoodles + Chicken", "Cauliflower Rice Bowl"]
  };

  const meals = plans[style];
  document.getElementById("dietPlan").innerHTML = `
    <h4>Sample ${style} Diet Plan:</h4>
    <ul>${meals.map(m => `<li>${m}</li>`).join("")}</ul>
  `;
}