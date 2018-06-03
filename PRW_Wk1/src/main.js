//Get items from JSON
var recipesQuery = () => {
    let url = 'https://api.myjson.com/bins/gg3eh'

    fetch(url)
        .then(response => response.json())

        .then(responseAsJson => {
            let recipes = responseAsJson.recipes;
            const recipesContainer = document.querySelector('#recipesContainer');
            console.log(recipes);


            let recipe ='';
            console.log(recipe);
            for (let i = 0; i < recipes.length; i++) {
                recipe += '<li><h3>' + recipes[i].title + '</h3>'
                recipe += '<p>Rating: ' + recipes[i].starRating + '</p>'
                recipe += '<p>Category: ' + recipes[i].category + '</p>'
                recipe += '<p>Description: ' + recipes[i].description + '</p>'
                recipe += '</li>';
            }

            recipesContainer.insertAdjacentHTML('beforeEnd', recipe);

        })
        .catch( error => {
            console.log('Error: ', error)
    })
}

//Run query
recipesQuery();


//Check for local storage
if (localStorage.getItem('localRecipes')) {
    const userRecipesContainer = document.querySelector('#userRecipesContainer');
    let currentLocalStorage = localStorage.getItem('localRecipes');
    currentLocalStorage = JSON.parse(currentLocalStorage);

    let currentRecipe = ' ';
    currentLocalStorage.forEach(r => {
        currentRecipe += `<li id="delete${r.recipeID}"><h3>${r.title}</h3><p>Rating: ${r.starRating}</p><p>Category:${r.category}</p><p>Description: ${r.description}</p><p class=deleteRecipe id="delete${r.recipeID}" onclick="deleteItem(${r.recipeID})">Delete</p></li>`
    });

    recipesContainer.insertAdjacentHTML('afterbegin', currentRecipe);
}

document.querySelector("#submit").addEventListener("click", function(event){
    //Validate
    event.preventDefault();
    if (document.querySelector('[name="recipe-name"]').value == "") {
        alert("Please enter a name for the recipe");
        document.querySelector('[name="recipe-name"]').focus(); 
   
    } else if (document.querySelector('[name="recipe-desc"]').value == "") {
        alert("Please enter a description for the recipe");
        document.querySelector('[name="recipe-desc"]').focus(); 
    
    } else if (document.querySelector('[name="recipe-cat"]').value == "") {
        alert("Please enter a category for the recipe");
        document.querySelector('[name="recipe-cat"]').focus(); 
    } 

    //Capture Values
    let recipeName = document.querySelector('[name="recipe-name"]').value;
    let recipeDesc = document.querySelector('[name="recipe-desc"]').value;
    let recipeCat = document.querySelector('[name="recipe-cat"]').value;
    let rating = document.querySelector('input[name="rate"]:checked').value;

    //Read local data
    let oldItems = JSON.parse(localStorage.getItem('localRecipes')) || [];
    console.log(oldItems);

    let recipeIDsArray = [];
    
    oldItems.forEach(e => {
        recipeIDsArray.push(e.recipeID);
    });

    //Item ID
    let highestID = 5;
    
    if (localStorage.getItem('localRecipes')) {
        let checkLocalLength = JSON.parse(localStorage.localRecipes).length
        if (checkLocalLength != 0) {
            highestID = Math.max.apply(null, recipeIDsArray) + 1; 
            console.log(highestID);  
        }
    }
    

    let local =     {
        "recipeID": highestID,
        "title": recipeName,
        "description": recipeDesc,
        "category": recipeCat,
        "starRating": rating
        }
    
    let newRecipe = ' ';

    newRecipe += `<li id="delete${local.recipeID}">`
    newRecipe += '<h3>' + local.title + '</h3>'
    newRecipe += '<p>Rating: ' + local.starRating + '</p>'
    newRecipe += '<p>Category: ' + local.category + '</p>'
    newRecipe += '<p>Description: ' + local.description + '</p>'
    newRecipe += `<p class="deleteRecipe" onclick="deleteItem(${local.recipeID})">Delete</p>`
    newRecipe += '</li>'

    recipesContainer.insertAdjacentHTML('beforeEnd', newRecipe);
    //Capture Values End

    //Add to local storage
    oldItems.push(local);
    localStorage.setItem('localRecipes', JSON.stringify(oldItems));
    
    let newLocalStorage = localStorage.getItem('localRecipes');
    newLocalStorage = JSON.parse(newLocalStorage);
    console.log(newLocalStorage);
  
});

var deleteItem = (itemToDelete) => {
        //Read local data
        let oldItems = JSON.parse(localStorage.getItem('localRecipes')) || [];
        console.log(oldItems);
    
        let recipeIDsArray = [];

        for(let i=0; i < oldItems.length; i++) {
            if(oldItems[i].recipeID == itemToDelete)
            {
                oldItems.splice(i,1);
            }
        }
        
        let destroyElement = `#delete${itemToDelete}`
        document.querySelector(destroyElement).remove();

        console.log(oldItems);
        localStorage.setItem('localRecipes', JSON.stringify(oldItems));
}