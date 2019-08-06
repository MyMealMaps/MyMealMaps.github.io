// // GLOBAL VARIABLES
// Data source from: https://www.canada.ca/en/health-canada/services/food-nutrition/healthy-eating/nutrient-data/nutrient-value-some-common-foods-2008.html


//Data in list goes by format [serving size, weight(g), calories, sodium, protein, sugar, carbs, img file]
var vegetables = {'Asparagus': ['6 spears', 90.0, 18.0, 8.0, 2.0, 1.0, 3.0, 'img.jpg'], 'Bean sprouts': ['125mL', 66.0, 33.0, 6.0, 3.0, 0.0, 7.0, 'img.jpg'], 'Lima beans': ['125mL', 95.0, 100.0, 28.0, 6.0, 1.0, 18.0, 'img.jpg'], 'Green beans': ['125mL', 71.0, 22.0, 4.0, 1.0, 1.0, 5.0, 'img.jpg'], 'Beets': ['125mL', 90.0, 40.0, 69.0, 2.0, 7.0, 9.0, 'img.jpg'], 'Brocolli': ['125mL', 46.0, 16.0, 15.0, 1.0, 1.0, 3.0, 'img.jpg'], 'Cabbage': ['125mL', 37.0, 9.0, 7.0, 1.0, 1.0, 2.0, 'img.jpg'], 'Carrots': ['1 medium', 61.0, 25.0, 42.0, 1.0, 3.0, 6.0, 'img.jpg'], 'Cauliflower': ['125mL', 53.0, 13.0, 16.0, 1.0, 1.0, 3.0, 'img.jpg'], 'Celery': ['1 stalk', 40.0, 6.0, 32.0, 0.01, 1.0, 1.0, 'img.jpg'], 'Corn': ['125mL', 87.0, 82.0, 8.0, 3.0, 3.0, 19.0, 'img.jpg'], 'Cucumber': ['4 slices', 28.0, 3.0, 1.0, 0.01, 0.01, 1.0, 'img.jpg'], 'Edamame': ['125mL', 82.0, 100.0, 5.0, 9.0, 2.0, 8.0, 'img.jpg'], 'Eggplant': ['125mL', 52.0, 18.0, 1.0, 0.01, 2.0, 5.0, 'img.jpg'], 'Kale': ['125mL', 69.0, 19.0, 16.0, 1.0, 1.0, 4.0, 'img.jpg'], 'Leek': ['125mL', 55.0, 17.0, 5.0, 0.01, 0.0, 4.0, 'img.jpg'], 'Iceberg lettuce': ['250mL', 58.0, 8.0, 6.0, 1.0, 1.0, 2.0, 'img.jpg'], 'Romain lettuce': ['250mL', 59.0, 10.0, 5.0, 1.0, 1.0, 2.0, 'img.jpg'], 'Mushrooms': ['3 medium', 54.0, 12.0, 2.0, 2.0, 1.0, 2.0, 'img.jpg'], 'Green onions': ['1 medium', 15.0, 5.0, 2.0, 0.01, 0.01, 1.0, 'img.jpg'], 'Green peas': ['125mL', 85.0, 66.0, 61.0, 4.0, 4.0, 12.0, 'img.jpg'], 'Green peppers': ['1/2 pepper', 82.0, 16.0, 2.0, 1.0, 2.0, 4.0, 'img.jpg'], 'Red peppers': ['1/2 pepper', 60.0, 15.0, 1.0, 1.0, 2.0, 4.0, 'img.jpg'], 'Yellow peppers': ['1/2 pepper', 93.0, 25.0, 2.0, 1.0, 0.0, 6.0, 'img.jpg'], 'Potatoes': ['1', 156.0, 156.0, 11.0, 3.0, 0.0, 36.0, 'img.jpg'], 'Radishes': ['3 medium', 14.0, 2.0, 5.0, 0.01, 0.01, 0.01, 'img.jpg'], 'Spinach': ['250mL', 32.0, 7.0, 25.0, 1.0, 0.01, 1.0, 'img.jpg'], 'Tomatoes': ['1', 123.0, 22.0, 6.0, 1.0, 3.0, 5.0, 'img.jpg'], 'Zucchini': ['4', 40.0, 6.0, 4.0, 0.01, 1.0, 1.0, 'img.jpg']}

var fruits = {'Apples': ['1', 138.0, 72.0, 1.0, 0.01, 14.0, 19.0, 'img.jpg'], 'Apricots': ['3', 105.0, 50.0, 1.0, 1.0, 10.0, 12.0, 'img.jpg'], 'Avocados': ['1/2 avocado', 101.0, 161.0, 7.0, 2.0, 1.0, 9.0, 'img.jpg'], 'Bananas': ['1', 118.0, 105.0, 1.0, 1.0, 14.0, 27.0, 'img.jpg'], 'Blackberries': ['125mL', 76.0, 33.0, 1.0, 1.0, 4.0, 7.0, 'img.jpg'], 'Blueberries': ['125mL', 77.0, 44.0, 1.0, 1.0, 8.0, 11.0, 'img.jpg'], 'Cherries': ['10', 68.0, 43.0, 0.0, 1.0, 9.0, 11.0, 'img.jpg'], 'Clementines': ['1', 74.0, 35.0, 1.0, 1.0, 7.0, 9.0, 'img.jpg'], 'Cranberries': ['60mL', 31.0, 95.0, 1.0, 0.01, 20.0, 25.0, 'img.jpg'], 'Dates': ['3', 25.0, 70.0, 0.01, 1.0, 16.0, 19.0, 'img.jpg'], 'Figs': ['1', 50.0, 37.0, 1.0, 0.01, 8.0, 10.0, 'img.jpg'], 'Grapefruit': ['1/2 grapefruit', 123.0, 52.0, 0.0, 1.0, 8.0, 13.0, 'img.jpg'], 'Grapes': ['20', 100.0, 69.0, 2.0, 1.0, 15.0, 18.0, 'img.jpg'], 'Kiwis': ['1', 76.0, 46.0, 2.0, 1.0, 7.0, 11.0, 'img.jpg'], 'Lychees': ['10', 96.0, 63.0, 1.0, 1.0, 15.0, 16.0, 'img.jpg'], 'Mango': ['1/2 mango', 104.0, 67.0, 2.0, 1.0, 15.0, 18.0, 'img.jpg'], 'Cantaloupe': ['125mL', 85.0, 29.0, 14.0, 1.0, 7.0, 7.0, 'img.jpg'], 'Honeydew': ['125mL', 90.0, 32.0, 16.0, 0.01, 7.0, 8.0, 'img.jpg'], 'Watermelon': ['125mL', 80.0, 24.0, 1.0, 0.01, 5.0, 6.0, 'img.jpg'], 'Nectarines': ['1', 136.0, 60.0, 0.0, 1.0, 11.0, 14.0, 'img.jpg'], 'Oranges': ['1', 131.0, 62.0, 0.0, 1.0, 12.0, 15.0, 'img.jpg'], 'Papayas': ['125mL', 74.0, 29.0, 2.0, 0.01, 4.0, 7.0, 'img.jpg'], 'Peaches': ['1', 98.0, 38.0, 0.0, 1.0, 8.0, 9.0, 'img.jpg'], 'Pears': ['1', 166.0, 96.0, 2.0, 1.0, 16.0, 26.0, 'img.jpg'], 'Pineapples': ['125mL', 82.0, 42.0, 1.0, 0.01, 8.0, 11.0, 'img.jpg'], 'Plums': ['1', 66.0, 30.0, 0.0, 0.01, 7.0, 8.0, 'img.jpg'], 'Pomegranates': ['1/2 pomegranate', 77.0, 53.0, 2.0, 1.0, 13.0, 13.0, 'img.jpg'], 'Raspberries': ['125mL', 65.0, 34.0, 1.0, 1.0, 3.0, 8.0, 'img.jpg'], 'Strawberries': ['7', 84.0, 27.0, 1.0, 1.0, 4.0, 6.0, 'img.jpg']}

var dairyGrains = {'Chocolate milk 2%': ['250mL', 264.0, 190.0, 0.6, 8.0, 26.0, 27.0, 'img.jpg'], 'White milk 2%': ['250mL', 258.0, 129.0, 0.1, 9.0, 13.0, 12.0, 'img.jpg'], 'Soy milk': ['250mL', 257.0, 110.0, 1.1, 7.0, 9.0, 13.0, 'img.jpg'], 'Fruit or Vanilla Yogourt': ['175mL', 185.0, 183.0, 0.1, 7.0, 25.0, 30.0, 'img.jpg'], 'Butter': ['5mL', 5.0, 34.0, 28.0, 0.01, 0.0, 0.01, 'img.jpg'], 'Plain Bagels': ['1', 71.0, 195.0, 379.0, 7.0, 4.0, 38.0, 'img.jpg'], 'White Bread': ['1 slice', 35.0, 93.0, 238.0, 3.0, 2.0, 18.0, 'img.jpg'], 'French toast': ['1 slice', 65.0, 149.0, 311.0, 5.0, 8.0, 16.0, 'img.jpg'], 'Pancakes': ['1', 50.0, 112.0, 211.0, 3.0, 2.0, 20.0, 'img.jpg'], 'Waffles': ['1', 37.0, 103.0, 146.0, 3.0, 2.0, 14.0, 'img.jpg'], 'Oatmeal': ['2', 26.0, 117.0, 100.0, 2.0, 6.0, 18.0, 'img.jpg'], 'Croissants': ['1', 57.0, 231.0, 424.0, 5.0, 6.0, 26.0, 'img.jpg'], 'Cheddar': ['50g', 50.0, 202.0, 311.0, 12.0, 0.01, 1.0, 'img.jpg'], 'Cream cheese': ['30mL', 29.0, 103.0, 87.0, 2.0, 0.01, 1.0, 'img.jpg'], 'Mozzarella': ['50g', 50.0, 141.0, 187.0, 10.0, 1.0, 1.0, 'img.jpg']}

var protein = {'Fried eggs': ['2 large', 92.0, 173.0, 322.0, 12.0, 0.0, 2.0, 'img.jpg'], 'Hard-boiled eggs': ['1 large', 50.0, 78.0, 62.0, 6.0, 0.0, 1.0, 'img.jpg'], 'Egg yolk- Cooked': ['1 large', 17.0, 59.0, 34.0, 3.0, 0.0, 1.0, 'img.jpg'], 'Scrambled eggs': ['2 eggs', 124.0, 189.0, 476.0, 13.0, 0.0, 4.0, 'img.jpg'], 'Salmon': ['75g', 75.0, 155.0, 46.0, 17.0, 0.0, 0.0, 'img.jpg'], 'Rainbow trout': ['75g', 75.0, 127.0, 32.0, 18.0, 0.0, 0.0, 'img.jpg'], 'Tuna': ['75g', 75.0, 87.0, 254.0, 19.0, 0.0, 0.0, 'img.jpg'], 'Crab': ['125mL', 62.0, 72.0, 431.0, 15.0, 0.0, 0.0, 'img.jpg'], 'Lobster': ['125mL', 77.0, 75.0, 291.0, 16.0, 0.0, 1.0, 'img.jpg'], 'Shrimp': ['6 medium', 30.0, 30.0, 67.0, 6.0, 0.0, 0.0, 'img.jpg'], 'Ground beef': ['75g', 75.0, 243.0, 78.0, 22.0, 0.0, 0.0, 'img.jpg'], 'Rib eye steak': ['75g', 75.0, 230.0, 40.0, 20.0, 0.0, 0.0, 'img.jpg'], 'Striploin steak': ['75g', 75.0, 191.0, 43.0, 23.0, 0.0, 0.0, 'img.jpg'], 'T-Bone steak': ['75g', 75.0, 216.0, 51.0, 22.0, 0.0, 0.0, 'img.jpg'], 'Tenderloin steak': ['75g', 75.0, 170.0, 50.0, 24.0, 0.0, 0.0, 'img.jpg'], 'Sirloin steak': ['75g', 75.0, 146.0, 43.0, 21.0, 0.0, 0.0, 'img.jpg'], 'Pork': ['75g', 75.0, 201.8, 54.8, 20.3, 0.0, 0.0, 'img.jpg'], 'Lamb': ['75g', 75.0, 209.1, 45.9, 18.5, 0.0, 0.0, 'img.jpg'], 'Chicken breast': ['75g', 75.0, 119.0, 56.0, 25.0, 0.0, 0.0, 'img.jpg'], 'Chicken Wing or Thigh': ['75g', 75.0, 218.0, 62.0, 20.0, 0.0, 0.0, 'img.jpg'], 'Turkey - Dark': ['75g', 75.0, 139.0, 62.0, 19.0, 0.0, 0.0, 'img.jpg'], 'Turkey-Light': ['75g', 75.0, 143.0, 50.0, 21.0, 0.0, 0.0, 'img.jpg'], 'Bacon': ['3 slices', 24.0, 130.0, 554.0, 9.0, 0.0, 0.01, 'img.jpg'], 'Ham': ['75g', 75.0, 118.0, 995.0, 19.0, 0.0, 1.0, 'img.jpg'], 'Tofu': ['150g', 150.0, 189.0, 26.0, 21.0, 1.0, 3.0, 'img.jpg'], 'Peanuts': ['60mL', 37.0, 217.0, 2.0, 9.0, 2.0, 8.0, 'img.jpg'], 'Almonds': ['60mL', 35.0, 209.0, 119.0, 8.0, 2.0, 7.0, 'img.jpg'], 'Cashews': ['60mL', 35.0, 199.0, 222.0, 5.0, 2.0, 11.0, 'img.jpg'], 'Pistachios': ['60mL', 31.0, 177.0, 126.0, 7.0, 2.0, 8.0, 'img.jpg'], 'Walnuts': ['60mL', 25.0, 166.0, 1.0, 4.0, 1.0, 3.0, 'img.jpg'], 'Hazelnuts': ['60mL', 34.0, 215.0, 0.0, 5.0, 1.0, 6.0, 'img.jpg'], 'Sunflower seeds': ['60mL', 32.0, 189.0, 133.0, 6.0, 1.0, 8.0, 'img.jpg'], 'Black beans': ['175mL', 178.0, 162.0, 682.0, 11.0, 0.0, 29.0, 'img.jpg'], 'Soybeans': ['175mL', 127.0, 220.0, 1.0, 21.0, 4.0, 13.0, 'img.jpg'], 'Chickpeas': ['175mL', 178.0, 211.0, 531.0, 9.0, 0.0, 40.0, 'img.jpg']}

var more = {'Peanut butter': ['30mL', 32.0, 191.0, 158.0, 8.0, 3.0, 7.0, 'img.jpg'], 'Caesar dressing': ['15mL', 15.0, 79.0, 161.0, 0.01, 0.0, 0.01, 'img.jpg'], 'Ranch dressing': ['15mL', 15.0, 71.0, 120.0, 0.01, 0.0, 1.0, 'img.jpg'], 'Coffee': ['250mL', 256.0, 101.0, 79.0, 5.0, 9.0, 7.0, 'img.jpg'], 'Tea': ['250mL', 250.0, 3.0, 8.0, 0.0, 0.0, 1.0, 'img.jpg'], 'Ketchup': ['15mL', 15.0, 15.0, 169.0, 0.01, 3.0, 4.0, 'img.jpg'], 'Mustard': ['15mL', 16.0, 11.0, 180.0, 1.0, 0.01, 1.0, 'img.jpg'], 'Chocolate chip muffin': ['1', 113.0, 366.0, 341.0, 8.0, 16.0, 53.0, 'img.jpg'], 'Granola bars': ['1', 26.0, 109.0, 90.0, 1.0, 6.0, 20.0, 'img.jpg'], 'Apple pie': ['1/8th slice', 125.0, 411.0, 327.0, 4.0, 0.0, 58.0, 'img.jpg'], 'Pumpkin pie': ['1/6th slice', 109.0, 229.0, 307.0, 4.0, 15.0, 30.0, 'img.jpg']}

var age;
var height;
var weight;
var idealWeight;
var timeframe;
var activity;
var gender;
var calIntakeGoal;
var receiptDict = {};

// FUNCTIONS
function values() {
   // Gets all values
   var a = document.getElementById('age').value;
   var h = document.getElementById('height').value;
   var w = document.getElementById('weight').value;
   var iW = document.getElementById('ideal').value;
   var t = document.getElementById('timeframe').value;
   timeframe = parseInt(t);
   var act = document.getElementById('activity').value;
   activity = parseInt(act);
   var g = document.getElementsByName('gender');
   // Checks if a gender is selected
   for (var i = 0; i < 2; i++) {
      if (g[i].checked) {
         gender = g[i];
         document.getElementById('genderError').innerText = "";
         break;
      } else {
         document.getElementById('genderError').innerText = "Please select your gender!";
      }
   }

   // Checks if all input is valid
   if (!Number.isInteger(parseInt(a)) || !Number.isInteger(parseInt(h)) || !Number.isInteger(parseInt(w)) || !Number.isInteger(parseInt(iW))) {
      document.getElementById('intError').innerText = "Please input a valid value!";
   } else {
      document.getElementById('intError').innerText = "";
      document.getElementById('ageError').innerText = "";
      age = parseInt(a);
      height = parseInt(h);
      weight = parseInt(w);
      idealWeight = parseInt(iW);
   }

   // Checks if input is "healthy"
   // Sets the pa coefficient used in the calories burned equation
   switch (activity) {
      case 1:
         var pa = 1;
         break;
      case 2:
         var pa = 1.11;
         break;
      case 3:
         var pa = 1.25;
         break;
      case 4:
         var pa = 1.48;
         break;
      default:
         var pa = 1.25;
   }

   // Calories burned equations
   // Equations come from: https://www.canada.ca/en/health-canada/services/food-nutrition/healthy-eating/dietary-reference-intakes/tables.html
   if (gender == "male") {
      var calBurned = (662 - (9.53 * age) + pa * ((15.91 * weight / 2.20462) + (539.6 * height * 100)));
   } else {
      var calBurned = (354 - (6.91 * age) + pa * ((9.36 * weight / 2.20462) + (726 * height * 100)));
   }

   var weightChange = (idealWeight - weight);
   var poundsPerWeek = weightChange / timeframe;
   console.log(poundsPerWeek);
   if (poundsPerWeek < -2 || poundsPerWeek > 2) {
      document.getElementById('healthError').innerText = "This exceeds the recommended pounds needed to be lost/gained per week, please note that this is an unhealthy weight loss goal!"
   } else {
      // 3500 comes from average calories per pound
      calIntakeGoal = (-calBurned) + int((poundsPerWeek / 7) * 3500);
      document.getElementById('healthError').innerText = "";
   }
}

// Loads data based on chosen tab
function changeTab() {
   // Resets directory to be empty first 
   var directory = document.getElementById('directory');
   while (directory.firstChild) {
      directory.removeChild(directory.firstChild);
   }

   // Finds which dictionary to use
   var category = event.target.innerText;
   switch (category) {
      case "Fruits":
         dictionary = fruits;
         break;
      case "Vegetables":
         dictionary = vegetables;
         break;
      case "Protein":
         dictionary = protein;
         break;
      case "Dairy & Grains":
         dictionary = dairyGrains;
         break;
      case "More":
         dictionary = more;
   }

   // Loops through array and creates each container
   var len = dictionary.length;
   for (food in dictionary) {
      var name = food;
      foodData = dictionary[food]
      var serving = foodData[0];
      var weight = foodData[1];
      var calories = foodData[2];
      var sodium = foodData[3];
      var sugar = foodData[4];
      var proteing = foodData[5];
      var carbs = foodData[6];
      var img = foodData[7];

      // Creates child elements in container
      var nameNode = document.createElement('h3');
      nameNode.innerText = name;

      var servNode = document.createElement('p');
      servNode.innerText = "Serving: " + serving;

      var weightNode = document.createElement('p');
      weightNode.innerText = "Weight: " + weight;

      var imgNode = document.createElement('img');
      imgNode.setAttribute('src', img);

      var calNode = document.createElement('p');
      calNode.innerText = "Calories: " + calories;

      var sodiumNode = document.createElement('p');
      sodiumNode.innerText = "Sodium: " + sodium;

      var sugarNode = document.createElement('p');
      sugarNode.innerText = "Sugar: " + sugar;

      var proteinNode = document.createElement('p');
      proteinNode.innerText = "Protein: " + proteing;

      var carbsNode = document.createElement('p');
      carbsNode.innerText = "Carbohydrates: " + carbs;

      var addNode = document.createElement('button');
      addNode.setAttribute('type', 'button');
      addNode.setAttribute('onclick', "add(\'" + name + "\')");
      addNode.innerText = "+";

      var subtractNode = document.createElement('button');
      subtractNode.setAttribute('type', 'button');
      subtractNode.setAttribute('onclick', "subtract(\'" + name + "\')");
      subtractNode.innerText = "-";

      var quantityNode = document.createElement('h4')
      if (name in receiptDict) {
         quantityNode.innerText = String(receiptDict[name])
      }
      else {
         quantityNode.innerText = "0"
      }
      quantityNode.setAttribute("id", name)



      // Creates container and appends children
      var node = document.createElement('div');
      node.append(nameNode, servNode, weightNode, imgNode, calNode, sodiumNode, sugarNode, proteinNode, carbsNode, subtractNode, quantityNode, addNode);
      node.setAttribute('class', 'container');

      // Adds container to directory
      directory.appendChild(node);
   }
}

// Function adds to the total food count
function add(food) {
   // Changes the container quantity display text
   var quantity = document.getElementById(food);
   var newQuantity = parseInt(quantity.innerHTML) + 1;
   quantity.innerHTML = String(newQuantity);


   if (food in receiptDict) {
      receiptDict[food] += 1;
   } else {
      receiptDict[food] = 1;
   }
}

// Function adds to the total food count
function subtract(food) {
   // Changes the container quantity display text
   var quantity = document.getElementById(food);
   var newQuantity = parseInt(quantity.innerHTML) - 1;
   if (newQuantity < 0) {
      newQuantity = 0;
   }
   quantity.innerHTML = String(newQuantity);

   if (food in receiptDict) {
      if (receiptDict[food] == 1) {
         delete receiptDict[food];
      } else {
         receiptDict[food] -= 1;
      }
   }
}


// Generate receipt based on quantities in receiptDict
function receipt() {
   var list = document.getElementById('receiptFood');
   var list_2 = document.getElementById('receiptCal');
   list.innerHTML = "<li>Qtn &emsp; Food Items</li>";
   list_2.innerHTML = "<li>Calories</li>";
   var calorieTotal = 0
   for (foods in receiptDict) {
      var quantity = receiptDict[foods]
      list.innerHTML += "<li>" + String(quantity)+ "&emsp;&emsp;&nbsp;&nbsp; " + foods +  "</li>";
      if (foods in fruits){
         var data = fruits[foods];
      } else if (foods in vegetables) {
         var data = vegetables[foods];
      } else if(foods in dairyGrains) {
         var data = dairyGrains[foods];
      } else if (foods in protein) {
         var data = protein[foods];
      } else {
         var data = more[foods];
      }

      calorieTotal += data[2] * quantity
      // Currently the calories will show up below the items because of the styling of our lists in html
      // But if we just style our lists to be left and right but on the same line then it will look proper
      list_2.innerHTML += "<li>" + String(data[2] * quantity) + "</li>"


   }
   //temporary alert, will change so total is displayed on receipt
   alert("Your Calories Total is: " + String(calorieTotal))
}

// Resets receipt
function receiptReset() {
   var list = document.getElementById('receiptFood');
   var list_2 = document.getElementById('receiptCal');
   list.innerHTML = "";
   list_2.innerHTML = "";
   receiptDict = {};
   changeTab();
}
