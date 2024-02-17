
// all elements with arrowicons as a class will be selected  
const arrows = document.querySelectorAll(".arrowicon");

// all elements with movies-list as a class will be selected
const movieLists = document.querySelectorAll(".movies-list");





//  looping through each arrow icon (current amount of arrrows on page is 2 )
arrows.forEach((arrowicon, i) => {



     // current number of movie posters i
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCount = 0;
       arrowicon.addEventListener("click", () => {
        const movieImgRatio = Math.floor(window.innerWidth/600); // calcutlating the ratio of the window based on the height of the moive poster
        clickCount++;
        console.log("clickcount",clickCount);

        // if there are more items to display in the movie list then continue to show the rest of the list 
        // if not the the first movie item will reset to it'a original position
        

        if(itemNumber - (3 + clickCount) + (3- movieImgRatio) >= 0) {
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value
                 - 400}px)`;

        } else {
            movieLists[i].style.transform = "translateX(0)"; //  reseting the movie list once all images are displayed to back to the first image poster. 
            clickCount = 0;  // reset clikCount to go back to first movie image
        }
      
     });

     console.log(Math.floor(window.innerWidth/600));

});