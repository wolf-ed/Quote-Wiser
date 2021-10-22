let quotesArray = [];
let favsArray = [];

const addQuote = (aquote) => {
quotesArray.push(aquote);
}
addQuote('If you want to achieve greatness stop asking for permission.');
addQuote('Things work out best for those who make the best of how things work out.');
addQuote('To live a creative life, we must lose our fear of being wrong.');
addQuote('If you are not willing to risk the usual you will have to settle for the ordinary.');
addQuote('Trust because you are willing to accept the risk, not because it\'s safe or certain.');
addQuote('All our dreams can come true if we have the courage to pursue them.');
addQuote('Good things come to people who wait, but better things come to those who go out and get them.');
addQuote('If you do what you always did, you will get what you always got.');
addQuote('Success is walking from failure to failure with no loss of enthusiasm.');
addQuote('Just when the caterpillar thought the world was ending, he turned into a butterfly.');
addQuote('Successful entrepreneurs are givers and not takers of positive energy.');

const addToFav = (favQuote) => {
    favsArray.push(favQuote);
    }

    //TODO function to compare quote with favsArray, so user can't add same quote twice


//select button we will link
let nextButton = document.getElementById('nextb');
let favButton = document.getElementById('favb');
let printFavsButton = document.getElementById('printFavs');


//function to print message with date and counter(of times pressed)
nextButton.onclick = function(){
    let quoteToPrint = quotesArray[Math.floor(Math.random() * quotesArray.length)]
    //select where it will be printed
    document.getElementById('placeToPrint').innerHTML = `<h2> ${quoteToPrint} </h2>` ;
    let limitFav = 0;
    favButton.onclick = function(){
        if(limitFav === 0){
        addToFav(quoteToPrint)}
        limitFav++;
    }

}

printFavsButton.onclick = function(){
    let allFavs = favsArray.map((a) =>{
        return a + "<br><br>";
       })
       if(favsArray.length === 0){
        document.getElementById('placeToPrint').innerHTML = `<h2> You don't have favorite quotes yet. </h2>` ;
       }else{
        document.getElementById('placeToPrint').innerHTML = `<h2> ${allFavs.join('\n')} </h2>` ;
       }
   /*Pay close attention to the .join('\n'), without it, when there are more than 1 element, it will print a comma between them. */

}
    














