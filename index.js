let movieReviewsContainer = document.getElementById("movieReviewsContainer");

let headingEl1 = document.createElement("h1");
headingEl1.classList.add("head1");
headingEl1.textContent = "Movie Reviews";
movieReviewsContainer.appendChild(headingEl1);

let headingEl2 = document.createElement("h1");
headingEl2.classList.add("head2", "mt-3");
headingEl2.textContent = "Movie Title";
movieReviewsContainer.appendChild(headingEl2);

let movieTitle = document.createElement("input");

movieTitle.setAttribute("cols", 40);
movieTitle.id = "titleInput";
movieReviewsContainer.appendChild(movieTitle);

let headingEl3 = document.createElement("h1");
headingEl3.classList.add("head3");
headingEl3.textContent = "Your Review";
movieReviewsContainer.appendChild(headingEl3);

let textarea = document.createElement("textarea");
textarea.setAttribute("rows", 6);
textarea.setAttribute("cols", 40);
textarea.id = "reviewTextarea";
movieReviewsContainer.appendChild(textarea);

let breakel = document.createElement("br");
movieReviewsContainer.appendChild(breakel);

let btnel = document.createElement("button");
btnel.classList.add("btn", "btn-primary", "text-right");
btnel.textContent = "Add";
btnel.id = "addBtn";
movieReviewsContainer.appendChild(btnel);
btnel.onclick = function() {
    let userInput = document.getElementById("titleInput");
    let review = document.getElementById("reviewTextarea");
    let rev = document.getElementById("reviewsContainer");
    let he1 = document.createElement("h1");
    he1.textContent = "Movie Title: " + userInput.value;
    he1.style.fontSize = "20px";
    rev.appendChild(he1);
    let r1 = document.createElement("p");
    r1.textContent = "Review: " + review.value;
    r1.style.fontSize = "15px";
    rev.appendChild(r1);






};
let revCont = document.createElement("div");
revCont.classList.add("m-5");
revCont.id = "reviewsContainer";
movieReviewsContainer.appendChild(revCont);
