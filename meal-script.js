// // GLOBAL VARIABLES
// Data source from: https://www.canada.ca/en/health-canada/services/food-nutrition/healthy-eating/nutrient-data/nutrient-value-some-common-foods-2008.html

var vegetables = [ 
   {name: "Asparagus", serving: "6 spears", weight: 90.0, calories: 18.0, sodium: 8.0, proteing: 2.0, sugar: 1.0, carbs: 3.0, img: "img.jpg"}, 
   {name: "Bean sprouts", serving: "125mL", weight: 66.0, calories: 33.0, sodium: 6.0, proteing: 3.0, sugar: 0.0, carbs: 7.0, img: "img.jpg"},
   {name: "Lima beans", serving: "125mL", weight: 95.0, calories: 100.0, sodium: 28.0, proteing: 6.0, sugar: 1.0, carbs: 18.0, img: "img.jpg"}, 
   {name: "Green beans", serving: "125mL", weight: 71.0, calories: 22.0, sodium: 4.0, proteing: 1.0, sugar: 1.0, carbs: 5.0, img: "img.jpg"}, 
   {name: "Beets", serving: "125mL", weight: 90.0, calories: 40.0, sodium: 69.0, proteing: 2.0, sugar: 7.0, carbs: 9.0, img: "img.jpg"},
   {name: "Brocolli", serving: "125mL", weight: 46.0, calories: 16.0, sodium: 15.0, proteing: 1.0, sugar: 1.0, carbs: 3.0, img: "img.jpg"}, 
   {name: "Cabbage", serving: "125mL", weight: 37.0, calories: 9.0, sodium: 7.0, proteing: 1.0, sugar: 1.0, carbs: 2.0, img: "img.jpg"}, 
   {name: "Carrots", serving: "1 medium", weight: 61.0, calories: 25.0, sodium: 42.0, proteing: 1.0, sugar: 3.0, carbs: 6.0, img: "img.jpg"},
   {name: "Cauliflower", serving: "125mL", weight: 53.0, calories: 13.0, sodium: 16.0, proteing: 1.0, sugar: 1.0, carbs: 3.0, img: "img.jpg"}, 
   {name: "Celery", serving: "1 stalk", weight: 40.0, calories: 6.0, sodium: 32.0, proteing: 0.01, sugar: 1.0, carbs: 1.0, img: "img.jpg"}, 
   {name: "Corn", serving: "125mL", weight: 87.0, calories: 82.0, sodium: 8.0, proteing: 3.0, sugar: 3.0, carbs: 19.0, img: "img.jpg"},
   {name: "Cucumber", serving: "4 slices", weight: 28.0, calories: 3.0, sodium: 1.0, proteing: 0.01, sugar: 0.01, carbs: 1.0, img: "img.jpg"}, 
   {name: "Edamame", serving: "125mL", weight: 82.0, calories: 100.0, sodium: 5.0, proteing: 9.0, sugar: 2.0, carbs: 8.0, img: "img.jpg"}, 
   {name: "Eggplant", serving: "125mL", weight: 52.0, calories: 18.0, sodium: 1.0, proteing: 0.01, sugar: 2.0, carbs: 5.0, img: "img.jpg"},
   {name: "Kale", serving: "125mL", weight: 69.0, calories: 19.0, sodium: 16.0, proteing: 1.0, sugar: 1.0, carbs: 4.0, img: "img.jpg"}, 
   {name: "Leek", serving: "125mL", weight: 55.0, calories: 17.0, sodium: 5.0, proteing: 0.01, sugar: 0.0, carbs: 4.0, img: "img.jpg"}, 
   {name: "Iceberg lettuce", serving: "250mL", weight: 58.0, calories: 8.0, sodium: 6.0, proteing: 1.0, sugar: 1.0, carbs: 2.0, img: "img.jpg"},
   {name: "Romain lettuce", serving: "250mL", weight: 59.0, calories: 10.0, sodium: 5.0, proteing: 1.0, sugar: 1.0, carbs: 2.0, img: "img.jpg"}, 
   {name: "Mushrooms", serving: "3 medium", weight: 54.0, calories: 12.0, sodium: 2.0, proteing: 2.0, sugar: 1.0, carbs: 2.0, img: "img.jpg"}, 
   {name: "Green onions", serving: "1 medium", weight: 15.0, calories: 5.0, sodium: 2.0, proteing: 0.01, sugar: 0.01, carbs: 1.0, img: "img.jpg"}, 
   {name: "Green peas", serving: "125mL", weight: 85.0, calories: 66.0, sodium: 61.0, proteing: 4.0, sugar: 4.0, carbs: 12.0, img: "img.jpg"}, 
   {name: "Green peppers", serving: "1/2 pepper", weight: 82.0, calories: 16.0, sodium: 2.0, proteing: 1.0, sugar: 2.0, carbs: 4.0, img: "img.jpg"}, 
   {name: "Red peppers", serving: "1/2 pepper", weight: 60.0, calories: 15.0, sodium: 1.0, proteing: 1.0, sugar: 2.0, carbs: 4.0, img: "img.jpg"}, 
   {name: "Yellow peppers", serving: "1/2 pepper", weight: 93.0, calories: 25.0, sodium: 2.0, proteing: 1.0, sugar: 0.0, carbs: 6.0, img: "img.jpg"}, 
   {name: "Potatoes", serving: "1", weight: 156.0, calories: 156.0, sodium: 11.0, proteing: 3.0, sugar: 0.0, carbs: 36.0, img: "img.jpg"}, 
   {name: "Radishes", serving: "3 medium", weight: 14.0, calories: 2.0, sodium: 5.0, proteing: 0.01, sugar: 0.01, carbs: 0.01, img: "img.jpg"}, 
   {name: "Spinach", serving: "250mL", weight: 32.0, calories: 7.0, sodium: 25.0, proteing: 1.0, sugar: 0.01, carbs: 1.0, img: "img.jpg"}, 
   {name: "Tomatoes", serving: "1", weight: 123.0, calories: 22.0, sodium: 6.0, proteing: 1.0, sugar: 3.0, carbs: 5.0, img: "img.jpg"}, 
   {name: "Zucchini", serving: "4", weight: 40.0, calories: 6.0, sodium: 4.0, proteing: 0.01, sugar: 1.0, carbs: 1.0, img: "img.jpg"}
]
var fruits = [
   {name: "Apples", serving: "1", weight: 138.0, calories: 72.0, sodium: 1.0, proteing: 0.01, sugar: 14.0, carbs: 19.0, img: "img.jpg"}, 
   {name: "Apricots", serving: "3", weight: 105.0, calories: 50.0, sodium: 1.0, proteing: 1.0, sugar: 10.0, carbs: 12.0, img: "img.jpg"}, 
   {name: "Avocados", serving: "1/2 avocado", weight: 101.0, calories: 161.0, sodium: 7.0, proteing: 2.0, sugar: 1.0, carbs: 9.0, img: "img.jpg"},
   {name: "Bananas", serving: "1", weight: 118.0, calories: 105.0, sodium: 1.0, proteing: 1.0, sugar: 14.0, carbs: 27.0, img: "img.jpg"}, 
   {name: "Blackberries", serving: "125mL", weight: 76.0, calories: 33.0, sodium: 1.0, proteing: 1.0, sugar: 4.0, carbs: 7.0, img: "img.jpg"}, 
   {name: "Blueberries", serving: "125mL", weight: 77.0, calories: 44.0, sodium: 1.0, proteing: 1.0, sugar: 8.0, carbs: 11.0, img: "img.jpg"},
   {name: "Cherries", serving: "10", weight: 68.0, calories: 43.0, sodium: 0.0, proteing: 1.0, sugar: 9.0, carbs: 11.0, img: "img.jpg"}, 
   {name: "Clementines", serving: "1", weight: 74.0, calories: 35.0, sodium: 1.0, proteing: 1.0, sugar: 7.0, carbs: 9.0, img: "img.jpg"}, 
   {name: "Cranberries", serving: "60mL", weight: 31.0, calories: 95.0, sodium: 1.0, proteing: 0.01, sugar: 20.0, carbs: 25.0, img: "img.jpg"},
   {name: "Dates", serving: "3", weight: 25.0, calories: 70.0, sodium: 0.01, proteing: 1.0, sugar: 16.0, carbs: 19.0, img: "img.jpg"}, 
   {name: "Figs", serving: "1", weight: 50.0, calories: 37.0, sodium: 1.0, proteing: 0.01, sugar: 8.0, carbs: 10.0, img: "img.jpg"}, 
   {name: "Grapefruit", serving: "1/2 grapefruit", weight: 123.0, calories: 52.0, sodium: 0.0, proteing: 1.0, sugar: 8.0, carbs: 13.0, img: "img.jpg"},
   {name: "Grapes", serving: "20", weight: 100.0, calories: 69.0, sodium: 2.0, proteing: 1.0, sugar: 15.0, carbs: 18.0, img: "img.jpg"}, 
   {name: "Kiwis", serving: "1", weight: 76.0, calories: 46.0, sodium: 2.0, proteing: 1.0, sugar: 7.0, carbs: 11.0, img: "img.jpg"}, 
   {name: "Lychees", serving: "10", weight: 96.0, calories: 63.0, sodium: 1.0, proteing: 1.0, sugar: 15.0, carbs: 16.0, img: "img.jpg"}, 
   {name: "Mango", serving: "1/2 mango", weight: 104.0, calories: 67.0, sodium: 2.0, proteing: 1.0, sugar: 15.0, carbs: 18.0, img: "img.jpg"}, 
   {name: "Cantaloupe", serving: "125mL", weight: 85.0, calories: 29.0, sodium: 14.0, proteing: 1.0, sugar: 7.0, carbs: 7.0, img: "img.jpg"}, 
   {name: "Honeydew", serving: "125mL", weight: 90.0, calories: 32.0, sodium: 16.0, proteing: 0.01, sugar: 7.0, carbs: 8.0, img: "img.jpg"},
   {name: "Watermelon", serving: "125mL", weight: 80.0, calories: 24.0, sodium: 1.0, proteing: 0.01, sugar: 5.0, carbs: 6.0, img: "img.jpg"}, 
   {name: "Nectarines", serving: "1", weight: 136.0, calories: 60.0, sodium: 0.0, proteing: 1.0, sugar: 11.0, carbs: 14.0, img: "img.jpg"}, 
   {name: "Oranges", serving: "1", weight: 131.0, calories: 62.0, sodium: 0.0, proteing: 1.0, sugar: 12.0, carbs: 15.0, img: "img.jpg"},
   {name: "Papayas", serving: "125mL", weight: 74.0, calories: 29.0, sodium: 2.0, proteing: 0.01, sugar: 4.0, carbs: 7.0, img: "img.jpg"}, 
   {name: "Peaches", serving: "1", weight: 98.0, calories: 38.0, sodium: 0.0, proteing: 1.0, sugar: 8.0, carbs: 9.0, img: "img.jpg"}, 
   {name: "Pears", serving: "1", weight: 166.0, calories: 96.0, sodium: 2.0, proteing: 1.0, sugar: 16.0, carbs: 26.0, img: "img.jpg"}, 
   {name: "Pineapples", serving: "125mL", weight: 82.0, calories: 42.0, sodium: 1.0, proteing: 0.01, sugar: 8.0, carbs: 11.0, img: "img.jpg"}, 
   {name: "Plums", serving: "1", weight: 66.0, calories: 30.0, sodium: 0.0, proteing: 0.01, sugar: 7.0, carbs: 8.0, img: "img.jpg"}, 
   {name: "Pomegranates", serving: "1/2 pomegranate", weight: 77.0, calories: 53.0, sodium: 2.0, proteing: 1.0, sugar: 13.0, carbs: 13.0, img: "img.jpg"},
   {name: "Raspberries", serving: "125mL", weight: 65.0, calories: 34.0, sodium: 1.0, proteing: 1.0, sugar: 3.0, carbs: 8.0, img: "img.jpg"}, 
   {name: "Strawberries", serving: "7", weight: 84.0, calories: 27.0, sodium: 1.0, proteing: 1.0, sugar: 4.0, carbs: 6.0, img: "img.jpg"}
]
var dairyGrains = [
   {name: "Chocolate milk 2%", serving: "250mL", weight: 264.0, calories: 190.0, sodium: 0.6, proteing: 8.0, sugar: 26.0, carbs: 27.0, img: "img.jpg"}, 
   {name: "White milk 2%", serving: "250mL", weight: 258.0, calories: 129.0, sodium: 0.1, proteing: 9.0, sugar: 13.0, carbs: 12.0, img: "img.jpg"}, 
   {name: "Soy milk", serving: "250mL", weight: 257.0, calories: 110.0, sodium: 1.1, proteing: 7.0, sugar: 9.0, carbs: 13.0, img: "img.jpg"}, 
   {name: "Fruit or Vanilla Yogourt", serving: "175mL", weight: 185.0, calories: 183.0, sodium: 0.1, proteing: 7.0, sugar: 25.0, carbs: 30.0, img: "img.jpg"}, 
   {name: "Butter", serving: "5mL", weight: 5.0, calories: 34.0, sodium: 28.0, proteing: 0.01, sugar: 0.0, carbs: 0.01, img: "img.jpg"}, 
   {name: "Plain Bagels", serving: "1", weight: 71.0, calories: 195.0, sodium: 379.0, proteing: 7.0, sugar: 4.0, carbs: 38.0, img: "img.jpg"}, 
   {name: "White Bread", serving: "1 slice", weight: 35.0, calories: 93.0, sodium: 238.0, proteing: 3.0, sugar: 2.0, carbs: 18.0, img: "img.jpg"}, 
   {name: "French toast", serving: "1 slice", weight: 65.0, calories: 149.0, sodium: 311.0, proteing: 5.0, sugar: 8.0, carbs: 16.0, img: "img.jpg"},
   {name: "Pancakes", serving: "1", weight: 50.0, calories: 112.0, sodium: 211.0, proteing: 3.0, sugar: 2.0, carbs: 20.0, img: "img.jpg"}, 
   {name: "Waffles", serving: "1", weight: 37.0, calories: 103.0, sodium: 146.0, proteing: 3.0, sugar: 2.0, carbs: 14.0, img: "img.jpg"}, 
   {name: "Oatmeal", serving: "2", weight: 26.0, calories: 117.0, sodium: 100.0, proteing: 2.0, sugar: 6.0, carbs: 18.0, img: "img.jpg"},
   {name: "Croissants", serving: "1", weight: 57.0, calories: 231.0, sodium: 424.0, proteing: 5.0, sugar: 6.0, carbs: 26.0, img: "img.jpg"}, 
   {name: "Cheddar", serving: "50g", weight: 50.0, calories: 202.0, sodium: 311.0, proteing: 12.0, sugar: 0.01, carbs: 1.0, img: "img.jpg"}, 
   {name: "Cream cheese", serving: "30mL", weight: 29.0, calories: 103.0, sodium: 87.0, proteing: 2.0, sugar: 0.01, carbs: 1.0, img: "img.jpg"}, 
   {name: "Mozzarella", serving: "50g", weight: 50.0, calories: 141.0, sodium: 187.0, proteing: 10.0, sugar: 1.0, carbs: 1.0, img: "img.jpg"}
]
var protein = [
   {name: "Fried eggs", serving: "2 large", weight: 92.0, calories: 173.0, sodium: 322.0, proteing: 12.0, sugar: 0.0, carbs: 2.0, img: "img.jpg"}, 
   {name: "Hard-boiled eggs", serving: "1 large", weight: 50.0, calories: 78.0, sodium: 62.0, proteing: 6.0, sugar: 0.0, carbs: 1.0, img: "img.jpg"}, 
   {name: "Egg yolk- Cooked", serving: "1 large", weight: 17.0, calories: 59.0, sodium: 34.0, proteing: 3.0, sugar: 0.0, carbs: 1.0, img: "img.jpg"}, 
   {name: "Scrambled eggs", serving: "2 eggs", weight: 124.0, calories: 189.0, sodium: 476.0, proteing: 13.0, sugar: 0.0, carbs: 4.0, img: "img.jpg"}, 
   {name: "Salmon", serving: "75g", weight: 75.0, calories: 155.0, sodium: 46.0, proteing: 17.0, sugar: 0.0, carbs: 0.0, img: "img.jpg"}, 
   {name: "Rainbow trout", serving: "75g", weight: 75.0, calories: 127.0, sodium: 32.0, proteing: 18.0, sugar: 0.0, carbs: 0.0, img: "img.jpg"}, 
   {name: "Tuna", serving: "75g", weight: 75.0, calories: 87.0, sodium: 254.0, proteing: 19.0, sugar: 0.0, carbs: 0.0, img: "img.jpg"}, 
   {name: "Crab", serving: "125mL", weight: 62.0, calories: 72.0, sodium: 431.0, proteing: 15.0, sugar: 0.0, carbs: 0.0, img: "img.jpg"}, 
   {name: "Lobster", serving: "125mL", weight: 77.0, calories: 75.0, sodium: 291.0, proteing: 16.0, sugar: 0.0, carbs: 1.0, img: "img.jpg"}, 
   {name: "Shrimp", serving: "6 medium", weight: 30.0, calories: 30.0, sodium: 67.0, proteing: 6.0, sugar: 0.0, carbs: 0.0, img: "img.jpg"}, 
   {name: "Ground beef", serving: "75g", weight: 75.0, calories: 243.0, sodium: 78.0, proteing: 22.0, sugar: 0.0, carbs: 0.0, img: "img.jpg"}, 
   {name: "Rib eye steak", serving: "75g", weight: 75.0, calories: 230.0, sodium: 40.0, proteing: 20.0, sugar: 0.0, carbs: 0.0, img: "img.jpg"}, 
   {name: "Striploin steak", serving: "75g", weight: 75.0, calories: 191.0, sodium: 43.0, proteing: 23.0, sugar: 0.0, carbs: 0.0, img: "img.jpg"}, 
   {name: "T-Bone steak", serving: "75g", weight: 75.0, calories: 216.0, sodium: 51.0, proteing: 22.0, sugar: 0.0, carbs: 0.0, img: "img.jpg"}, 
   {name: "Tenderloin steak", serving: "75g", weight: 75.0, calories: 170.0, sodium: 50.0, proteing: 24.0, sugar: 0.0, carbs: 0.0, img: "img.jpg"}, 
   {name: "Sirloin steak", serving: "75g", weight: 75.0, calories: 146.0, sodium: 43.0, proteing: 21.0, sugar: 0.0, carbs: 0.0, img: "img.jpg"}, 
   {name: "Pork", serving: "75g", weight: 75.0, calories: 201.8, sodium: 54.8, proteing: 20.3, sugar: 0.0, carbs: 0.0, img: "img.jpg"},
   {name: "Lamb", serving: "75g", weight: 75.0, calories: 209.1, sodium: 45.9, proteing: 18.5, sugar: 0.0, carbs: 0.0, img: "img.jpg"}, 
   {name: "Chicken breast", serving: "75g", weight: 75.0, calories: 119.0, sodium: 56.0, proteing: 25.0, sugar: 0.0, carbs: 0.0, img: "img.jpg"}, 
   {name: "Chicken Wing or Thigh", serving: "75g", weight: 75.0, calories: 218.0, sodium: 62.0, proteing: 20.0, sugar: 0.0, carbs: 0.0, img: "img.jpg"}, 
   {name: "Turkey - Dark", serving: "75g", weight: 75.0, calories: 139.0, sodium: 62.0, proteing: 19.0, sugar: 0.0, carbs: 0.0, img: "img.jpg"}, 
   {name: "Turkey - Light", serving: "75g", weight: 75.0, calories: 143.0, sodium: 50.0, proteing: 21.0, sugar: 0.0, carbs: 0.0, img: "img.jpg"}, 
   {name: "Bacon", serving: "3 slices", weight: 24.0, calories: 130.0, sodium: 554.0, proteing: 9.0, sugar: 0.0, carbs: 0.01, img: "img.jpg"}, 
   {name: "Ham", serving: "75g", weight: 75.0, calories: 118.0, sodium: 995.0, proteing: 19.0, sugar: 0.0, carbs: 1.0, img: "img.jpg"}, 
   {name: "Tofu", serving: "150g", weight: 150.0, calories: 189.0, sodium: 26.0, proteing: 21.0, sugar: 1.0, carbs: 3.0, img: "img.jpg"}, 
   {name: "Peanuts", serving: "60mL", weight: 37.0, calories: 217.0, sodium: 2.0, proteing: 9.0, sugar: 2.0, carbs: 8.0, img: "img.jpg"}, 
   {name: "Almonds", serving: "60mL", weight: 35.0, calories: 209.0, sodium: 119.0, proteing: 8.0, sugar: 2.0, carbs: 7.0, img: "img.jpg"}, 
   {name: "Cashews", serving: "60mL", weight: 35.0, calories: 199.0, sodium: 222.0, proteing: 5.0, sugar: 2.0, carbs: 11.0, img: "img.jpg"}, 
   {name: "Pistachios", serving: "60mL", weight: 31.0, calories: 177.0, sodium: 126.0, proteing: 7.0, sugar: 2.0, carbs: 8.0, img: "img.jpg"}, 
   {name: "Walnuts", serving: "60mL", weight: 25.0, calories: 166.0, sodium: 1.0, proteing: 4.0, sugar: 1.0, carbs: 3.0, img: "img.jpg"}, 
   {name: "Hazelnuts", serving: "60mL", weight: 34.0, calories: 215.0, sodium: 0.0, proteing: 5.0, sugar: 1.0, carbs: 6.0, img: "img.jpg"}, 
   {name: "Sunflower seeds", serving: "60mL", weight: 32.0, calories: 189.0, sodium: 133.0, proteing: 6.0, sugar: 1.0, carbs: 8.0, img: "img.jpg"}, 
   {name: "Black beans", serving: "175mL", weight: 178.0, calories: 162.0, sodium: 682.0, proteing: 11.0, sugar: 0.0, carbs: 29.0, img: "img.jpg"}, 
   {name: "Soybeans", serving: "175mL", weight: 127.0, calories: 220.0, sodium: 1.0, proteing: 21.0, sugar: 4.0, carbs: 13.0, img: "img.jpg"}, 
   {name: "Chickpeas", serving: "175mL", weight: 178.0, calories: 211.0, sodium: 531.0, proteing: 9.0, sugar: 0.0, carbs: 40.0, img: "img.jpg"}
]
var more = [
   {name: "Peanut butter", serving: "30mL", weight: 32.0, calories: 191.0, sodium: 158.0, proteing: 8.0, sugar: 3.0, carbs: 7.0, img: "img.jpg"}, 
   {name: "Caesar dressing", serving: "15mL", weight: 15.0, calories: 79.0, sodium: 161.0, proteing: 0.01, sugar: 0.0, carbs: 0.01, img: "img.jpg"}, 
   {name: "Ranch dressing", serving: "15mL", weight: 15.0, calories: 71.0, sodium: 120.0, proteing: 0.01, sugar: 0.0, carbs: 1.0, img: "img.jpg"}, 
   {name: "Coffee", serving: "250mL", weight: 256.0, calories: 101.0, sodium: 79.0, proteing: 5.0, sugar: 9.0, carbs: 7.0, img: "img.jpg"}, 
   {name: "Tea", serving: "250mL", weight: 250.0, calories: 3.0, sodium: 8.0, proteing: 0.0, sugar: 0.0, carbs: 1.0, img: "img.jpg"}, 
   {name: "Ketchup", serving: "15mL", weight: 15.0, calories: 15.0, sodium: 169.0, proteing: 0.01, sugar: 3.0, carbs: 4.0, img: "img.jpg"}, 
   {name: "Mustard", serving: "15mL", weight: 16.0, calories: 11.0, sodium: 180.0, proteing: 1.0, sugar: 0.01, carbs: 1.0, img: "img.jpg"}, 
   {name: "Chocolate chip muffin", serving: "1", weight: 113.0, calories: 366.0, sodium: 341.0, proteing: 8.0, sugar: 16.0, carbs: 53.0, img: "img.jpg"}, 
   {name: "Granola bars", serving: "1", weight: 26.0, calories: 109.0, sodium: 90.0, proteing: 1.0, sugar: 6.0, carbs: 20.0, img: "img.jpg"}, 
   {name: "Apple pie", serving: "1/8th slice", weight: 125.0, calories: 411.0, sodium: 327.0, proteing: 4.0, sugar: 0.0, carbs: 58.0, img: "img.jpg"}, 
   {name: "Pumpkin pie", serving: "1/6th slice", weight: 109.0, calories: 229.0, sodium: 307.0, proteing: 4.0, sugar: 15.0, carbs: 30.0, img: "img.jpg"}
]

var age; 
var height; 
var weight; 
var idealWeight; 
var timeframe; 
var activity;
var gender;
var calIntakeGoal;

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

   // Calories burned equations
   // Equations come from: https://www.canada.ca/en/health-canada/services/food-nutrition/healthy-eating/dietary-reference-intakes/tables.html
   if (gender == "male"){
      var calBurned = (662 - (9.53 * age) + pa * ((15.91 * weight / 2.20462) + (539.6 * height * 100)));
   } else {
      var calBurned = (354 - (6.91 * age) + pa * ((9.36 * weight / 2.20462) + (726 * height * 100)));
   }

   var weightChange = (idealWeight - weight);
   var poundsPerWeek = weightChange / timeframe;
   console.log(poundsPerWeek);
   if (poundsPerWeek <= -3 || poundsPerWeek >= 3) {
      document.getElementById('healthError').innerText = "This exceeds the recommended pounds needed to be lost/gained per week, please note that this is an unhealthy weight loss goal!"
   } else {
      // 3500 comes from average calories per pound
      calIntakeGoal =  (-calBurned) + ((poundsPerWeek / 7) * 3500);
      document.getElementById('healthError').innerText = "";
   }
}

// Loads data based on chosen tab
function changeTab() {
   // Resets directory to be empty first 
   var directory = document.getElementById('directory');
   while(directory.firstChild) {
      directory.removeChild(directory.firstChild);
   }

   // Finds which dictionary to use
   var category = event.target.innerText; 
   switch(category) {
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
   for (var i = 0; i < len; i++) {
      var name = dictionary[i].name;
      var serving = dictionary[i].serving;
      var weight = dictionary[i].weight;
      var calories = dictionary[i].calories;
      var sodium = dictionary[i].sodium;
      var sugar = dictionary[i].sugar; 
      var proteing = dictionary[i].proteing;
      var carbs = dictionary[i].carbs;
      var img = dictionary[i].img; 
     
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
     
      // Creates container and appends children
      var node = document.createElement('div');
      node.append(nameNode, servNode, weightNode, imgNode, calNode, sodiumNode, sugarNode, proteinNode, carbsNode);
      node.setAttribute('class', 'container');
      node.setAttribute('onclick', 'check()');

      // Adds container to directory
      directory.appendChild(node);
   }
}

// Toggles data in container elements on click (adds style, checked attribute and name)
function check() {
   var name = event.target.querySelector('h3').innerText;
   var attrName = "data-name=\"" + name + "\""; 
   event.target.toggleAttribute('checked');
   event.target.classList.toggle('checked');
   if (event.target.getAttribute('data-name') != null) {
      event.target.removeAttribute('data-name');
   } else {
      event.target.setAttribute('data-name', name);
   }
}

// Unchecks all
function uncheck() {
   var directory = document.getElementById('directory');
   var len = directory.childElementCount;
   console.log(len);
   for (var i = 0; i < len; i++) {
      console.log(directory.childNodes[i]);
      if (directory.childNodes[i].getAttribute('checked') != null) {
         directory.childNodes[i].removeAttribute('checked');
         directory.childNodes[i].classList.remove('checked');
      }
   }

}

// Checks directory and adds all "checked" containers to a list
function receipt() {
   var len = document.getElementById('directory').childNodes.length;
   var child = document.getElementById('directory').childNodes;
   var list = document.getElementById('receiptItems');
   for (var i = 0; i < len; i ++) {
      if (child[i].getAttribute('checked') != null) {
         var name = child[i].getAttribute('data-name');
         list.innerHTML += "<li>" + name + "</li>";
      }
   }
}

// Resets checked directory
function receiptReset() {
   var list = document.getElementById('receiptItems');
   list.innerHTML = "";
}