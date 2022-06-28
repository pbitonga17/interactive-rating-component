'use strict';

const selectBtn = document.querySelectorAll('.btn');
const submitBtn = document.querySelector('.submit');
const thankuBox = document.querySelector('.container2');
const ratingBox = document.querySelector('.container1');
const selectedRating = document.querySelector('.selected');

let rating = 0;

//Rating Box
selectBtn.forEach(selectBtn => {
    selectBtn.addEventListener('click', () => {
        console.log(selectBtn.textContent);
        rating = selectBtn.textContent;
    })
})


//Thank you box
submitBtn.addEventListener('click', () => {
    ratingBox.style.display = 'none';
    thankuBox.style.display = 'block';

    if (rating !== 0) {
        selectedRating.textContent = `You selected ${rating} out of 5`;
    } else {
        selectedRating.textContent = `PLEASE RATE! :)`;
    } 
})
