const recipes = [
    {
      name: "Filled Toast",
      category: "Breakfast",
      ingredients: ["Eggs", "Cheese", "Milk", "Butter"],
      instructions: "Beat eggs with salt and pepper, then cook with butter until fluffy.",
      image: "img/toast.jpeg"
    },
    {
      name: "Chicken Salad",
      category: "Lunch",
      ingredients: ["Chicken", "Lettuce", "Tomato", "Cucumber", "Dressing"],
      instructions: "Grill chicken, then mix with vegetables and dressing.",
      image: "https://healthyfitnessmeals.com/wp-content/uploads/2021/04/Southwest-chicken-salad-7.jpg"
    },
    {
      name: "Spaghetti Bolognese",
      category: "Dinner",
      ingredients: ["Spaghetti", "Ground Beef", "Tomato Sauce", "Onion", "Garlic", "Italian Seasoning"],
      instructions: "Cook spaghetti, then brown beef with onions and garlic.",
      image: "https://www.vickery.tv/wp-content/uploads/2020/12/SMGD-Spaghetti-Bolognese.jpg"
    },
    {
      name: "Chicken Alfredo",
      category: "Dinner",
      ingredients: [
          "fettuccine pasta",
          "boneless, skinless chicken breasts",
          "1 cup heavy cream",
          
      ],
      instructions: "Cook fettuccine , heat olive oil and cook seasoned chicken breasts until golden",
      image: "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-above.jpg"
  },
    {
      name: "Pancakes",
      category: "Lunch",
      ingredients: ["Flour", "Baking Powder", "Sugar", "Salt", "Milk", "Egg", "Butter"],
      instructions: "Pour batter on a hot griddle and cook until golden on both sides.",
       image: "https://www.carolinescooking.com/wp-content/uploads/2015/02/Kaiserschmarrn-picture.jpg"
    },
    {
      name: "French Toast",
      category: "Breakfast",
      ingredients: ["Eggs", "Milk", "Cinnamon", "Vanilla Extract", "Bread", "Butter"],
      instructions: "Whisk together eggs, milk, cinnamon, and vanilla extract. ",
     image: "https://www.jocooks.com/wp-content/uploads/2011/09/french-toast-1-2-1.jpg"
    },
    {
      name: "Oatmeal",
      category: "Lunch",
      ingredients: ["Oats", "Water", "Milk", "Salt", "Cinnamon", "Honey"],
      instructions: "In a pot, combine oats, water, milk, and a pinch of salt",
      image:"img/oatmeal.jpg"
    },
    
  {
    name: "Beef Stir Fry",
    category: "Dinner",
    ingredients: [
        "300g beef strips",
        "1 red bell pepper, sliced",
        "1 green bell pepper, sliced",
        
        
    ],
    instructions: "Cook beef until browned. Sauté vegetables. Add sauces and oil, stir fry for 2-3 mins.",
    image: "https://www.allrecipes.com/thmb/7N-Xq1XMMJw8G0KJv2e0ETUYB2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228823-quick-beef-stir-fry-DDMFS-4x3-1f79b031d3134f02ac27d79e967dfef5.jpg"
}
   
  ];

  window.onload = function() {
    showSlides();
    showRecipes('all');
  };


  function showRecipes(category) {
    const recipesList = document.getElementById('recipesList');
    let filteredRecipes = [];

    if (category === 'all') {
        filteredRecipes = recipes;
    } else {
        filteredRecipes = recipes.filter(recipe => recipe.category === category);
    }

    recipesList.innerHTML = '';

    filteredRecipes.forEach(recipe => {
        const recipeCard = `
            <div class="recipe">
                <div class="recipe-header">
               
                <button class="edit-btn" onclick="editRecipe('${recipe.name}')"><i class="fa-regular fa-pen-to-square"></i></button>
            
                    <img src="${recipe.image}"  class="recipe-img">
                   
                        <button class="close-btn" onclick="removeRecipe('${recipe.name}')">×</button>
   
                 
                </div>
                <h2>${recipe.name}</h2>
                <h3>${recipe.category}</h3>
                <button id="s" onclick="toggleDetails('${recipe.name}', 'ingredients')">Ingredients</button>
                <button id="s" onclick="toggleDetails('${recipe.name}', 'instructions')">Instructions</button>
                <div id="ingredients-details-${recipe.name}" style="display: block;"> 
                    <p id="ingredients-${recipe.name}">Ingredients: ${recipe.ingredients.join(', ')}</p>
                </div>
                <div id="instructions-details-${recipe.name}" style="display: block;"> 
                <p id="instructions-${recipe.name}"></p>
            </div>
            </div>
        `;
        recipesList.innerHTML += recipeCard;
    });
}


function toggleDetails(recipeName, type) {
 
  const ingredientsDiv = document.getElementById(`ingredients-details-${recipeName}`);
  const instructionsDiv = document.getElementById(`instructions-details-${recipeName}`);

  const recipe = recipes.find(recipe => recipe.name === recipeName);

  if (type === 'ingredients') {

    ingredientsDiv.style.display = 'block';
    instructionsDiv.style.display = 'none';

    
    const ingredientsP = document.getElementById(`ingredients-${recipeName}`);
    ingredientsP.innerHTML = `Ingredients: ${recipe.ingredients.join(', ')}`;
  } else if (type === 'instructions') {
    
    instructionsDiv.style.display = 'block';
    ingredientsDiv.style.display = 'none';

 
    const instructionsP = document.getElementById(`instructions-${recipeName}`);
    instructionsP.innerHTML = `Instructions: ${recipe.instructions}`;
  }
}

  function removeRecipe(name) {
    const index = recipes.findIndex(recipe => recipe.name === name);
    if (index !== -1) {
      recipes.splice(index, 1);
      showRecipes('all'); 
    }
  }

  
  function searchRecipes() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => {
      return recipe.name.toLowerCase().includes(searchTerm) || recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm));
    });


    const recipesList = document.getElementById('recipesList');

    recipesList.innerHTML = '';
    filteredRecipes.forEach(recipe => {
      const recipeCard = `
      <div class="recipe">
      <div class="recipe-header">
     
      <button class="edit-btn" onclick="editRecipe('${recipe.name}')"><i class="fa-regular fa-pen-to-square"></i></button>
  
          <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img">
         
              <button class="close-btn" onclick="removeRecipe('${recipe.name}')">×</button>

       
      </div>
      <h2>${recipe.name}</h2>
      <h3>${recipe.category}</h3>
      <button id="s" onclick="toggleDetails('${recipe.name}', 'ingredients')">Ingredients</button>
      <button id="s" onclick="toggleDetails('${recipe.name}', 'instructions')">Instructions</button>
      <div id="ingredients-details-${recipe.name}" style="display: block;"> <!-- Default to block -->
          <p id="ingredients-${recipe.name}">Ingredients: ${recipe.ingredients.join(', ')}</p>
      </div>
      <div id="instructions-details-${recipe.name}" style="display: block;"> <!-- Default to block -->
      <p id="instructions-${recipe.name}"></p>
  </div>
  </div>
      `;
      recipesList.innerHTML += recipeCard;
  });


  }
 
function openAddRecipeModal() {
  document.getElementById('addRecipeModal').style.display = 'block';
}


function closeAddRecipeModal() {
  document.getElementById('addRecipeModal').style.display = 'none';
}


function addRecipe() {
  const name = document.getElementById('recipeName').value;
  const category = document.getElementById('recipeCategory').value;
  const ingredients = document.getElementById('recipeIngredients').value.split('\n');
  const instructions = document.getElementById('recipeInstructions').value;
  const imageInput = document.getElementById('recipeImage');
  const imageUrlInput = document.getElementById('recipeImageUrl').value;

  
  if (!name || !category || !ingredients || !instructions || (!imageInput.files[0] && !imageUrlInput)) {
    alert('Please provide all details for the recipe.');
    return;
  }

 
  if (imageUrlInput && !isValidUrl(imageUrlInput)) {
    alert('Please provide a valid URL for the image.');
    return;
  }

  let imageUrl;
  if (imageInput.files[0]) {
   
    const imageFile = imageInput.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      imageUrl = event.target.result;
      addRecipeToStorage(name, category, ingredients, instructions, imageUrl);
    };
    reader.readAsDataURL(imageFile);
  } else {
    imageUrl = imageUrlInput;
    addRecipeToStorage(name, category, ingredients, instructions, imageUrl);
  }


  closeAddRecipeModal();
  clearAddRecipeForm();
}

function addRecipeToStorage(name, category, ingredients, instructions, imageUrl) {
 
  const newRecipe = {
    name: name,
    category: category,
    ingredients: ingredients,
    instructions: instructions,
    image: imageUrl
  };

  recipes.push(newRecipe);
  showRecipes('all');
}

function clearAddRecipeForm() {
  document.getElementById('recipeName').value = '';
  document.getElementById('recipeCategory').value = '';
  document.getElementById('recipeIngredients').value = '';
  document.getElementById('recipeInstructions').value = '';
  document.getElementById('recipeImage').value = '';
  document.getElementById('recipeImageUrl').value = '';
}

function openEditRecipeModal() {
  document.getElementById('editRecipeModal').style.display = 'block';
}

function editRecipe(name) {
  const index = recipes.findIndex(recipe => recipe.name === name);
 
    const recipe = recipes[index];
   
    document.getElementById('editRecipeIndex').value = index;
    document.getElementById('editRecipeName').value = recipe.name;
    document.getElementById('editRecipeCategory').value = recipe.category;
    document.getElementById('editRecipeIngredients').value = recipe.ingredients.join('\n');
    document.getElementById('editRecipeInstructions').value = recipe.instructions;
    document.getElementById('editRecipeImageUrl').value = recipe.image;

    openEditRecipeModal();
  
}

function saveEditedRecipe() {
  const index = document.getElementById('editRecipeIndex').value;
  const newName = document.getElementById('editRecipeName').value;
  const newCategory = document.getElementById('editRecipeCategory').value;
  const newIngredients = document.getElementById('editRecipeIngredients').value.split('\n');
  const newInstructions = document.getElementById('editRecipeInstructions').value;
  const newImageUrl = document.getElementById('editRecipeImageUrl').value;


  if (!newName || !newCategory || !newIngredients || !newInstructions || !newImageUrl) {
    alert('Please provide all details for the recipe.');
    return;
  }

  recipes[index] = {
    name: newName,
    category: newCategory,
    ingredients: newIngredients,
    instructions: newInstructions,
    image: newImageUrl
  };

  closeEditRecipeModal();
  showRecipes('all');
}
function closeEditRecipeModal() {
  document.getElementById('editRecipeModal').style.display = 'none';
}
let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');

  
  slides.forEach((slide) => {
    slide.classList.remove('active'); 
  });

  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0; 
  }

  setTimeout(() => {
    slides[slideIndex].classList.add('active'); 
  }, 50); 
  setTimeout(showSlides, 3000); 
}


