const reviews = [
    {
        id: 1,
        name: "adam marlon",
        job: "UX designer",
        img: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nihil magni quibusdam culpa accusamus animi exercitationem officia voluptatem tenetur laudantium. Excepturi laudantium debitis corporis doloremque."
    },
    {
        id: 2,
        name: "susan wang ",
        job: "UI designer",
        img: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nihil magni quibusdam culpa accusamus animi exercitationem officia voluptatem tenetur laudantium. Excepturi laudantium debitis corporis doloremque."
    },
            {
                id: 3,
                name: "bryte gajin",
                job: "cyber-security engineer",
        img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nihil magni quibusdam culpa accusamus animi exercitationem officia voluptatem tenetur laudantium. Excepturi laudantium debitis corporis doloremque."
    },
     {
        id: 4,
        name: "nancy sheldon",
        job: "Software developer",
        img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nihil magni quibusdam culpa accusamus animi exercitationem officia voluptatem tenetur laudantium. Excepturi laudantium debitis corporis doloremque."
    }
]

const image = document.getElementById('person-img');
const name = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//current review displayed when the window loads
let currentReview = 0;

//show the reviews on the Dom
displayReviews();

//buttons and their functions
prevBtn.addEventListener("click", showPreviousReview);
nextBtn.addEventListener("click", showNextReview);

//function for displaying the review...what it will display
function displayReviews(){
   const review = reviews[currentReview];
   image.src = review.img;
   name.textContent = review.name;
   job.textContent = review.job;
   info.textContent = review.text;
}

// function for displaying previous previous
function showPreviousReview() {
    currentReview --;
    if(currentReview < 0){
        currentReview = reviews.length - 1;
    }
    displayReviews();
}

// function for displaying next previous
function showNextReview() {
    currentReview ++;
    if(currentReview === reviews.length){
        currentReview = 0;
    }
    displayReviews();

}
