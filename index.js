// if long desc is empty, hide "read more"


////////////////check extra info /////////////////
let discount = document.querySelectorAll('.discount-price');
let soldOut = document.querySelectorAll('.sold-out-status');
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
soldOut.forEach(checkContent);
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
