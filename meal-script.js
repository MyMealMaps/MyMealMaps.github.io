// DATA
var vegetables = {'Vegetables': ['0', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], 'Asparagus': ['6 spears', 90.0, 18.0, 8.0, 2.0, 1.0, 3.0], 'Bean sprouts': ['125mL', 66.0, 33.0, 6.0, 3.0, 0.0, 7.0], 'Lima beans': ['125mL', 95.0, 100.0, 28.0, 6.0, 1.0, 18.0], 'Green beans': ['125mL', 71.0, 22.0, 4.0, 1.0, 1.0, 5.0], 'Beets': ['125mL', 90.0, 40.0, 69.0, 2.0, 7.0, 9.0], 'Brocolli': ['125mL', 46.0, 16.0, 15.0, 1.0, 1.0, 3.0], 'Cabbage': ['125mL', 37.0, 9.0, 7.0, 1.0, 1.0, 2.0], 'Carrots': ['1 medium', 61.0, 25.0, 42.0, 1.0, 3.0, 6.0], 'Cauliflower': ['125mL', 53.0, 13.0, 16.0, 1.0, 1.0, 3.0], 'Celery': ['1 stalk', 40.0, 6.0, 32.0, 0.01, 1.0, 1.0], 'Corn': ['125mL', 87.0, 82.0, 8.0, 3.0, 3.0, 19.0], 'Cucumber': ['4 slices', 28.0, 3.0, 1.0, 0.01, 0.01, 1.0], 'Edamame': ['125mL', 82.0, 100.0, 5.0, 9.0, 2.0, 8.0], 'Eggplant': ['125mL', 52.0, 18.0, 1.0, 0.01, 2.0, 5.0], 'Kale': ['125mL', 69.0, 19.0, 16.0, 1.0, 1.0, 4.0], 'Leek': ['125mL', 55.0, 17.0, 5.0, 0.01, 0.0, 4.0], 'Iceberg lettuce': ['250mL', 58.0, 8.0, 6.0, 1.0, 1.0, 2.0], 'Romain lettuce': ['250mL', 59.0, 10.0, 5.0, 1.0, 1.0, 2.0], 'Mushrooms': ['3 medium', 54.0, 12.0, 2.0, 2.0, 1.0, 2.0], 'Green onions': ['1 medium', 15.0, 5.0, 2.0, 0.01, 0.01, 1.0], 'Green peas': ['125mL', 85.0, 66.0, 61.0, 4.0, 4.0, 12.0], 'Green peppers': ['1/2 pepper', 82.0, 16.0, 2.0, 1.0, 2.0, 4.0], 'Red peppers': ['1/2 pepper', 60.0, 15.0, 1.0, 1.0, 2.0, 4.0], 'Yellow peppers': ['1/2 pepper', 93.0, 25.0, 2.0, 1.0, 0.0, 6.0], 'Potatoes': ['1', 156.0, 156.0, 11.0, 3.0, 0.0, 36.0], 'Radishes': ['3 medium', 14.0, 2.0, 5.0, 0.01, 0.01, 0.01], 'Spinach': ['250mL', 32.0, 7.0, 25.0, 1.0, 0.01, 1.0], 'Tomatoes': ['1', 123.0, 22.0, 6.0, 1.0, 3.0, 5.0], 'Zucchini': ['4', 40.0, 6.0, 4.0, 0.01, 1.0, 1.0]}

var fruits = {'Apples': ['1', 138.0, 72.0, 1.0, 0.01, 14.0, 19.0], 'Apricots': ['3', 105.0, 50.0, 1.0, 1.0, 10.0, 12.0], 'Avocados': ['1/2 avocado', 101.0, 161.0, 7.0, 2.0, 1.0, 9.0], 'Bananas': ['1', 118.0, 105.0, 1.0, 1.0, 14.0, 27.0], 'Blackberries': ['125mL', 76.0, 33.0, 1.0, 1.0, 4.0, 7.0], 'Blueberries': ['125mL', 77.0, 44.0, 1.0, 1.0, 8.0, 11.0], 'Cherries': ['10', 68.0, 43.0, 0.0, 1.0, 9.0, 11.0], 'Clementines': ['1', 74.0, 35.0, 1.0, 1.0, 7.0, 9.0], 'Cranberries': ['60mL', 31.0, 95.0, 1.0, 0.01, 20.0, 25.0], 'Dates': ['3', 25.0, 70.0, 0.01, 1.0, 16.0, 19.0], 'Figs': ['1', 50.0, 37.0, 1.0, 0.01, 8.0, 10.0], 'Grapefruit': ['1/2 grapefruit', 123.0, 52.0, 0.0, 1.0, 8.0, 13.0], 'Grapes': ['20', 100.0, 69.0, 2.0, 1.0, 15.0, 18.0], 'Kiwis': ['1', 76.0, 46.0, 2.0, 1.0, 7.0, 11.0], 'Lychees': ['10', 96.0, 63.0, 1.0, 1.0, 15.0, 16.0], 'Mango': ['1/2 mango', 104.0, 67.0, 2.0, 1.0, 15.0, 18.0], 'Cantaloupe': ['125mL', 85.0, 29.0, 14.0, 1.0, 7.0, 7.0], 'Honeydew': ['125mL', 90.0, 32.0, 16.0, 0.01, 7.0, 8.0], 'Watermelon': ['125mL', 80.0, 24.0, 1.0, 0.01, 5.0, 6.0], 'Nectarines': ['1', 136.0, 60.0, 0.0, 1.0, 11.0, 14.0], 'Oranges': ['1', 131.0, 62.0, 0.0, 1.0, 12.0, 15.0], 'Papayas': ['125mL', 74.0, 29.0, 2.0, 0.01, 4.0, 7.0], 'Peaches': ['1', 98.0, 38.0, 0.0, 1.0, 8.0, 9.0], 'Pears': ['1', 166.0, 96.0, 2.0, 1.0, 16.0, 26.0], 'Pineapples': ['125mL', 82.0, 42.0, 1.0, 0.01, 8.0, 11.0], 'Plums': ['1', 66.0, 30.0, 0.0, 0.01, 7.0, 8.0], 'Pomegranates': ['1/2 pomegranate', 77.0, 53.0, 2.0, 1.0, 13.0, 13.0], 'Raspberries': ['125mL', 65.0, 34.0, 1.0, 1.0, 3.0, 8.0], 'Strawberries': ['7', 84.0, 27.0, 1.0, 1.0, 4.0, 6.0]}

var dairyGrains = {'Chocolate milk 2%': ['250mL', 264.0, 190.0, 0.6, 8.0, 26.0, 27.0], 'White milk 2%': ['250mL', 258.0, 129.0, 0.1, 9.0, 13.0, 12.0], 'Soy milk': ['250mL', 257.0, 110.0, 1.1, 7.0, 9.0, 13.0], 'Fruit or Vanilla Yogourt': ['175mL', 185.0, 183.0, 0.1, 7.0, 25.0, 30.0], 'Butter': ['5mL', 5.0, 34.0, 28.0, 0.01, 0.0, 0.01], 'Plain Bagels': ['1', 71.0, 195.0, 379.0, 7.0, 4.0, 38.0], 'White Bread': ['1 slice', 35.0, 93.0, 238.0, 3.0, 2.0, 18.0], 'French toast': ['1 slice', 65.0, 149.0, 311.0, 5.0, 8.0, 16.0], 'Pancakes': ['1', 50.0, 112.0, 211.0, 3.0, 2.0, 20.0], 'Waffles': ['1', 37.0, 103.0, 146.0, 3.0, 2.0, 14.0], 'Oatmeal': ['2', 26.0, 117.0, 100.0, 2.0, 6.0, 18.0], 'Croissants': ['1', 57.0, 231.0, 424.0, 5.0, 6.0, 26.0], 'Cheddar': ['50g', 50.0, 202.0, 311.0, 12.0, 0.01, 1.0], 'Cream cheese': ['30mL', 29.0, 103.0, 87.0, 2.0, 0.01, 1.0], 'Mozzarella': ['50g', 50.0, 141.0, 187.0, 10.0, 1.0, 1.0]}

var protein = {'Fried eggs': ['2 large', 92.0, 173.0, 322.0, 12.0, 0.0, 2.0], 'Hard-boiled eggs': ['1 large', 50.0, 78.0, 62.0, 6.0, 0.0, 1.0], 'Egg yolk- Cooked': ['1 large', 17.0, 59.0, 34.0, 3.0, 0.0, 1.0], 'Scrambled eggs': ['2 eggs', 124.0, 189.0, 476.0, 13.0, 0.0, 4.0], 'Salmon': ['75g', 75.0, 155.0, 46.0, 17.0, 0.0, 0.0], 'Rainbow trout': ['75g', 75.0, 127.0, 32.0, 18.0, 0.0, 0.0], 'Tuna': ['75g', 75.0, 87.0, 254.0, 19.0, 0.0, 0.0], 'Crab': ['125mL', 62.0, 72.0, 431.0, 15.0, 0.0, 0.0], 'Lobster': ['125mL', 77.0, 75.0, 291.0, 16.0, 0.0, 1.0], 'Shrimp': ['6 medium', 30.0, 30.0, 67.0, 6.0, 0.0, 0.0], 'Ground beef': ['75g', 75.0, 243.0, 78.0, 22.0, 0.0, 0.0], 'Rib eye steak': ['75g', 75.0, 230.0, 40.0, 20.0, 0.0, 0.0], 'Striploin steak': ['75g', 75.0, 191.0, 43.0, 23.0, 0.0, 0.0], 'T-Bone steak': ['75g', 75.0, 216.0, 51.0, 22.0, 0.0, 0.0], 'Tenderloin steak': ['75g', 75.0, 170.0, 50.0, 24.0, 0.0, 0.0], 'Sirloin steak': ['75g', 75.0, 146.0, 43.0, 21.0, 0.0, 0.0], 'Pork': ['75g', 75.0, 201.8, 54.8, 20.3, 0.0, 0.0], 'Lamb': ['75g', 75.0, 209.1, 45.9, 18.5, 0.0, 0.0], 'Chicken breast': ['75g', 75.0, 119.0, 56.0, 25.0, 0.0, 0.0], 'Chicken Wing or Thigh': ['75g', 75.0, 218.0, 62.0, 20.0, 0.0, 0.0], 'Turkey - Dark': ['75g', 75.0, 139.0, 62.0, 19.0, 0.0, 0.0], 'Turkey - Light': ['75g', 75.0, 143.0, 50.0, 21.0, 0.0, 0.0], 'Bacon': ['3 slices', 24.0, 130.0, 554.0, 9.0, 0.0, 0.01], 'Ham': ['75g', 75.0, 118.0, 995.0, 19.0, 0.0, 1.0], 'Tofu': ['150g', 150.0, 189.0, 26.0, 21.0, 1.0, 3.0], 'Peanuts': ['60mL', 37.0, 217.0, 2.0, 9.0, 2.0, 8.0], 'Almonds': ['60mL', 35.0, 209.0, 119.0, 8.0, 2.0, 7.0], 'Cashews': ['60mL', 35.0, 199.0, 222.0, 5.0, 2.0, 11.0], 'Pistachios': ['60mL', 31.0, 177.0, 126.0, 7.0, 2.0, 8.0], 'Walnuts': ['60mL', 25.0, 166.0, 1.0, 4.0, 1.0, 3.0], 'Hazelnuts': ['60mL', 34.0, 215.0, 0.0, 5.0, 1.0, 6.0], 'Sunflower seeds': ['60mL', 32.0, 189.0, 133.0, 6.0, 1.0, 8.0], 'Black beans': ['175mL', 178.0, 162.0, 682.0, 11.0, 0.0, 29.0], 'Soybeans': ['175mL', 127.0, 220.0, 1.0, 21.0, 4.0, 13.0], 'Chickpeas': ['175mL', 178.0, 211.0, 531.0, 9.0, 0.0, 40.0]}

var more = {'Peanut butter': ['30mL', 32.0, 191.0, 158.0, 8.0, 3.0, 7.0], 'Caesar dressing': ['15mL', 15.0, 79.0, 161.0, 0.01, 0.0, 0.01], 'Ranch dressing': ['15mL', 15.0, 71.0, 120.0, 0.01, 0.0, 1.0], 'Coffee': ['250mL', 256.0, 101.0, 79.0, 5.0, 9.0, 7.0], 'Tea': ['250mL', 250.0, 3.0, 8.0, 0.0, 0.0, 1.0], 'Ketchup': ['15mL', 15.0, 15.0, 169.0, 0.01, 3.0, 4.0], 'Mustard': ['15mL', 16.0, 11.0, 180.0, 1.0, 0.01, 1.0], 'Chocolate chip muffin': ['1', 113.0, 366.0, 341.0, 8.0, 16.0, 53.0], 'Granola bars': ['1', 26.0, 109.0, 90.0, 1.0, 6.0, 20.0], 'Apple pie': ['1/8th slice', 125.0, 411.0, 327.0, 4.0, 0.0, 58.0], 'Pumpkin pie': ['1/6th slice', 109.0, 229.0, 307.0, 4.0, 15.0, 30.0]}

// FUNCTIONS
function start() {
   var profile = document.getElementById("profile"); 
   var height = document.getElementById("height").value;
   var weight = document.getElementById("weight").value;
   var idealWeight = document.getElementById("ideal").value;
   var timeframe = document.getElementById("timeframe").value;
   var activity = document.getElementById("activity").value;
   var gender = document.getElementById("gender").value;
   
   switch(activity) {
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
   if (gender == "male"){
      var calBurned = int(662 - (9.53 * age) + pa * ((15.91 * weight) + (539.6 * height)));
   } else{
      var calBurned = int(354 - (6.91 * age) + pa * ((9.36 * weight) + (726 * height)));
   }

   
}

function changeTab() {
   
}

function check() {
   var name = event.target.firstChild.nextElementSibling.innerText;
   var attrName = "data-name=\"" + name + "\""; 
   event.target.toggleAttribute('checked');
   event.target.setAttribute('data-name', name);
   event.target.classList.toggle('checked');
}

function receipt() {
   var len = document.getElementById('directory').childNodes.length;
   var child = document.getElementById('directory').childNodes;
   var list = document.getElementById('receiptItems');
   list.innerHTML = "";
   for (var i = 1; i < len; i += 2) {
      if (child[i].getAttribute('checked') != null) {
         var name = child[i].getAttribute('data-name');
         list.innerHTML += "<li>" + name + "</li>";
      }
   }
}