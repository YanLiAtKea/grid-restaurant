// if long desc is empty, hide "read more"

let soldOuts = document.querySelectorAll('.sold-out-status');


////////////////check extra info /////////////////
let discount = document.querySelectorAll('.discount-price');
//let soldOut = document.querySelectorAll('.sold-out-status');
let vegetar = document.querySelectorAll('.veg-status');
let alcohol = document.querySelectorAll('.alcohol-status');
let allergens = document.querySelectorAll('.allergens');

// if extra info exists in database, then display
function checkContent(a){
    if(a.textContent){
        a.style.display = "inherit";
    }
}
discount.forEach(checkContent);
//soldOut.forEach(checkContent);
vegetar.forEach(checkContent);
alcohol.forEach(checkContent);
allergens.forEach(checkContent);

// display extra info accordingly

///////////////// show long description ///////////////
let readMore = document.querySelectorAll('.read-more');
readMore.forEach(clickReadMore);
function clickReadMore(r){
    r.addEventListener('click', showLongDes);
    function showLongDes(){
        let longDescription = r.parentElement.nextSibling.nextSibling; // ?????????? why next next is the img???
        longDescription.style.zIndex = "-1";
        console.log(longDescription);
    }
}

///////////////// hide long description ///////////////
let closeReadMore = document.querySelectorAll('.close-read-more');
closeReadMore.forEach(clickCloseReadMore);
function clickCloseReadMore(r){
    r.addEventListener('click', hideLongDes);
    function hideLongDes(){
        let longDescription = r.parentElement.previousSibling.previousSibling; // ?????????? why previous previous is the img???
        longDescription.style.zIndex = "2";
        console.log(longDescription);
    }
}

/////////// filters
// vegetar
let onlyShowVegetar = false;
let vegetarButton = document.querySelector('button.vegetar');
vegetarButton.addEventListener('click', filterVegetar);
function filterVegetar(){
    // remove other filters
    allergentButton.classList.remove('on');
    alcoholButton.classList.remove('on');
    soldOutButton.classList.remove('on');
    // when filter on, border turns red
    vegetarButton.classList.toggle('on');
    let vegetars = document.querySelectorAll('.veg-status');
    vegetars.forEach(toggleVegetar);
    function toggleVegetar(v){
        if(v.textContent && vegetarButton.classList.contains('on')){
            v.parentElement.parentElement.style.display = "inherit";
        } else if(!v.textContent && vegetarButton.classList.contains('on')){
            v.parentElement.parentElement.style.display = "none";
        } else if (!vegetarButton.classList.contains('on')){
            v.parentElement.parentElement.style.display = "inherit";
        }
    }
}
//allergens
let onlyShowNoAllergens = false;
let allergentButton = document.querySelector('button.allergen');
allergentButton.addEventListener('click', filterAllergens);
function filterAllergens(){
    // remove other filters
    vegetarButton.classList.remove('on');
    alcoholButton.classList.remove('on');
    soldOutButton.classList.remove('on');
    // when filter on, border turns red
    allergentButton.classList.toggle('on');
    let allergens = document.querySelectorAll('.allergens');
    allergens.forEach(toggleAllergens);
    function toggleAllergens(v){
        if(!v.textContent && allergentButton.classList.contains('on')){
            v.parentElement.parentElement.style.display = "inherit";
        } else if(v.textContent && allergentButton.classList.contains('on')){
            v.parentElement.parentElement.style.display = "none";
        } else if (!allergentButton.classList.contains('on')){
            v.parentElement.parentElement.style.display = "inherit";
        }
    }
}
//alcohol
let onlyShowNoalcohol = false;
let alcoholButton = document.querySelector('button.alcohol');
alcoholButton.addEventListener('click', filterAlcohol);
function filterAlcohol(){
    // remove other filters
    vegetarButton.classList.remove('on');
    allergentButton.classList.remove('on');
    soldOutButton.classList.remove('on');
    // when filter on, border turns red
    alcoholButton.classList.toggle('on');
    let alcohols = document.querySelectorAll('.alcohol-status');
    alcohols.forEach(toggleAlcohols);
    function toggleAlcohols(v){
        if(!v.textContent && alcoholButton.classList.contains('on')){
            v.parentElement.parentElement.style.display = "inherit";
        } else if(v.textContent && alcoholButton.classList.contains('on')){
            v.parentElement.parentElement.style.display = "none";
        } else if (!alcoholButton.classList.contains('on')){
            v.parentElement.parentElement.style.display = "inherit";
        }
    }
}
//sold-out
let onlyShowNotSoldOut = false;
let soldOutButton = document.querySelector('button.sold-out');
soldOutButton.addEventListener('click', filterSoldOut);
function filterSoldOut(){
    // remove other filters
    vegetarButton.classList.remove('on');
    alcoholButton.classList.remove('on');
    allergentButton.classList.remove('on');
    // when filter on, border turns red
    soldOutButton.classList.toggle('on');
    soldOuts.forEach(toggleSoldOut);
    function toggleSoldOut(v){
        if(!v.textContent && soldOutButton.classList.contains('on')){
            v.parentElement.parentElement.style.display = "inherit";
        } else if(v.textContent && soldOutButton.classList.contains('on')){
            v.parentElement.parentElement.style.display = "none";
        } else if (!soldOutButton.classList.contains('on')){
            v.parentElement.parentElement.style.display = "inherit";
        }
    }
}

// sold-outs when shown
soldOuts.forEach(dimSoldOut);
function dimSoldOut(s){
    if(s.textContent){
        s.parentElement.parentElement.style.opacity = ".3";
    }
}
