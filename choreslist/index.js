// javascript

const inputBtnEl = document.getElementById("input-btn")
const addBtnEl = document.getElementById("add-btn")
const deleteBtnEl = document.getElementById("delete-btn")
const firstChoreEl = document.getElementById("first-chore")
const secondChoreEl = document.getElementById("second-chore")
const thirdChoreEl = document.getElementById("third-chore")
const img = document.createElement("img");

// Add button 
addBtnEl.addEventListener("click", function() {
    if (inputBtnEl.value === "") {
        inputBtnEl.placeholder = "You better type sth here!"
    }
    
    if (firstChoreEl.innerHTML === "") {
        firstChoreEl.innerHTML = `${inputBtnEl.value}`
    } else if (secondChoreEl.innerHTML === "") {
        secondChoreEl.innerHTML = `${inputBtnEl.value}`
    } else if (thirdChoreEl.innerHTML === "") {
        thirdChoreEl.innerHTML = `${inputBtnEl.value}`
    }
    inputBtnEl.value = ""  // Clear input value after adding chore 
})

// Delete Button 
deleteBtnEl.addEventListener("click", function() {
    inputBtnEl.value = ""
    firstChoreEl.innerHTML = ""
    secondChoreEl.innerHTML = ""
    thirdChoreEl.innerHTML = ""
})

// Img after the completion 
firstChoreEl.addEventListener("click", function() {
    firstChoreEl.innerHTML = ""
    // Create a new image element
    const img = document.createElement("img");
    // Set the source attribute of the image element to the URL of the image file
    img.src = "rarepepe.png";
    // Add the image element to the firstChoreEl element's content
    firstChoreEl.appendChild(img);
})

secondChoreEl.addEventListener("click", function() {
    secondChoreEl.innerHTML = ""
    const img = document.createElement("img");
    img.src = "rarepepe.png";
    secondChoreEl.appendChild(img);
})

thirdChoreEl.addEventListener("click", function() {
    thirdChoreEl.innerHTML = ""
    const img = document.createElement("img");
    img.src = "rarepepe.png";
    thirdChoreEl.appendChild(img);
})