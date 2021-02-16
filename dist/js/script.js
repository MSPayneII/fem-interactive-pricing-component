const viewCount = document.querySelector("#count");
const price = document.querySelector("#price");
const discount = document.querySelector(".discount");
const slider = document.querySelector(".slider");
const toggleSwitch = document.querySelector(".checkbox");


//Defaults for slider and text
slider.value = 0;
viewCount.textContent = "10K";
price.textContent = "$8.00";
toggleSwitch.checked = false;
discount.style.visibility = "hidden";

slider.addEventListener("input", () => {
    switch (slider.value) {
        case "0":
            viewCount.textContent = "10K";
            price.textContent = "$8.00";
            console.log(slider.value);
            break;
        case "10":
            viewCount.textContent = "50K";
            price.textContent = "$12.00";
            console.log(slider.value);
            break;
        case "20":
            viewCount.textContent = "100K";
            price.textContent = "$16.00";
            console.log(slider.value);
            break;
        case "30":
            viewCount.textContent = "500K";
            price.textContent = "24.00";
            console.log(slider.value);
            break;
        case "40":
            viewCount.textContent = "1M";
            price.textContent = "$36.00";
            console.log(slider.value);
            break;
        default:
            break;
    }
});


toggleSwitch.addEventListener("input", () => {


    if (toggleSwitch.checked === true) {   // if the billing switch is set to yearly
        // console.log ('yearly billing') //testcode
        discount.style.visibility = "visible"; //makes discount display appear
        discount.textContent = window.innerWidth <= 639? "-25%": "25% discount" // discount text will be "-25%" for mobile and "25% discount" for tablet screens or larger

    } else {   //billing switch is set to monthly
        // console.log('monthly billing') //testcode
        discount.style.visibility= "hidden"; //hides discount display
    }
});