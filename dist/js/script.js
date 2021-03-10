const viewCount = document.querySelector("#count");
const price = document.querySelector("#price");
const discount = document.querySelector(".discount");
const slider = document.querySelector(".slider");
const toggleSwitch = document.querySelector(".checkbox");
const trialBtnMessage = document.querySelector(".trialBtnMessage");
const trialBtn = document.querySelector(".button");

//Defaults for slider and text
slider.value = 0;
viewCount.textContent = "10K";
price.textContent = "$8.00";
toggleSwitch.checked = false;
discount.style.visibility = "hidden";
let trialbtnClickCount = 0;

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
            price.textContent = "$24.00";
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

trialBtn.addEventListener("click", ()=> {
    trialbtnClickCount++;
    console.log(trialbtnClickCount);
    const newDisplayMessage = document.createElement("p");
    
    if (trialbtnClickCount  === 1) {
        newDisplayMessage.setAttribute('style', 'white-space: pre;');
        newDisplayMessage.textContent = "Thank you! \r\n Check your email for your trial information";
        trialBtnMessage.append(newDisplayMessage);
    }

    //will eventually add new code to replace the existing element with new text
})


price.addEventListener("mouseenter", () => {
    price.style.color = "#10d5c2";
});

price.addEventListener("mouseleave", () => {
    price.style.color = "#293356";
});