'use strict';

//Get items from JSON
var recipesQuery = function recipesQuery() {
    var url = 'https://api.myjson.com/bins/gg3eh';

    fetch(url).then(function (response) {
        return response.json();
    }).then(function (responseAsJson) {
        var recipes = responseAsJson.recipes;
        var recipesContainer = document.querySelector('#recipesContainer');
        console.log(recipes);

        var recipe = '';
        console.log(recipe);
        for (var i = 0; i < recipes.length; i++) {
            recipe += '<li><h3>' + recipes[i].title + '</h3>';
            recipe += '<p>Rating: ' + recipes[i].starRating + '</p>';
            recipe += '<p>Category: ' + recipes[i].category + '</p>';
            recipe += '<p>Description: ' + recipes[i].description + '</p>';
            recipe += '</li>';
        }

        recipesContainer.insertAdjacentHTML('beforeEnd', recipe);
    }).catch(function (error) {
        console.log('Error: ', error);
    });
};

//Run query
recipesQuery();

//Check for local storage
if (localStorage.getItem('localRecipes')) {
    var userRecipesContainer = document.querySelector('#userRecipesContainer');
    var currentLocalStorage = localStorage.getItem('localRecipes');
    currentLocalStorage = JSON.parse(currentLocalStorage);

    var currentRecipe = ' ';
    currentLocalStorage.forEach(function (r) {
        currentRecipe += '<li id="delete' + r.recipeID + '"><h3>' + r.title + '</h3><p>Rating: ' + r.starRating + '</p><p>Category:' + r.category + '</p><p>Description: ' + r.description + '</p><p class=deleteRecipe id="delete' + r.recipeID + '" onclick="deleteItem(' + r.recipeID + ')">Delete</p></li>';
    });

    recipesContainer.insertAdjacentHTML('afterbegin', currentRecipe);
}

document.querySelector("#submit").addEventListener("click", function (event) {
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
    var recipeName = document.querySelector('[name="recipe-name"]').value;
    var recipeDesc = document.querySelector('[name="recipe-desc"]').value;
    var recipeCat = document.querySelector('[name="recipe-cat"]').value;
    var rating = document.querySelector('input[name="rate"]:checked').value;

    //Read local data
    var oldItems = JSON.parse(localStorage.getItem('localRecipes')) || [];
    console.log(oldItems);

    var recipeIDsArray = [];

    oldItems.forEach(function (e) {
        recipeIDsArray.push(e.recipeID);
    });

    //Item ID
    var highestID = 5;

    if (localStorage.getItem('localRecipes')) {
        var checkLocalLength = JSON.parse(localStorage.localRecipes).length;
        if (checkLocalLength != 0) {
            highestID = Math.max.apply(null, recipeIDsArray) + 1;
            console.log(highestID);
        }
    }

    var local = {
        "recipeID": highestID,
        "title": recipeName,
        "description": recipeDesc,
        "category": recipeCat,
        "starRating": rating
    };

    var newRecipe = ' ';

    newRecipe += '<li id="delete' + local.recipeID + '">';
    newRecipe += '<h3>' + local.title + '</h3>';
    newRecipe += '<p>Rating: ' + local.starRating + '</p>';
    newRecipe += '<p>Category: ' + local.category + '</p>';
    newRecipe += '<p>Description: ' + local.description + '</p>';
    newRecipe += '<p class="deleteRecipe" onclick="deleteItem(' + local.recipeID + ')">Delete</p>';
    newRecipe += '</li>';

    recipesContainer.insertAdjacentHTML('beforeEnd', newRecipe);
    //Capture Values End

    //Add to local storage
    oldItems.push(local);
    localStorage.setItem('localRecipes', JSON.stringify(oldItems));

    var newLocalStorage = localStorage.getItem('localRecipes');
    newLocalStorage = JSON.parse(newLocalStorage);
    console.log(newLocalStorage);
});

var deleteItem = function deleteItem(itemToDelete) {
    //Read local data
    var oldItems = JSON.parse(localStorage.getItem('localRecipes')) || [];
    console.log(oldItems);

    var recipeIDsArray = [];

    for (var i = 0; i < oldItems.length; i++) {
        if (oldItems[i].recipeID == itemToDelete) {
            oldItems.splice(i, 1);
        }
    }

    var destroyElement = '#delete' + itemToDelete;
    document.querySelector(destroyElement).remove();

    console.log(oldItems);
    localStorage.setItem('localRecipes', JSON.stringify(oldItems));
};