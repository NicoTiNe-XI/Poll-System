//  Set Buttons
let allPollBtn = document.querySelectorAll(".languages p");
let submitBtn = document.getElementById("submit");

// Add Active class
allPollBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        allPollBtn.forEach((btn) => {
            btn.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
    });
});

// variables
let javaSubmit = 0;
let cSubmit = 0;
let pySubmit = 0;
let total = 0;
let jsSubmit = 0;

//Update
function updatePoll(activeEle) {
    if (activeEle === "JavaScript") {
        jsSubmit++;
    } else if (activeEle === "Python") {
        pySubmit++;
    } else if (activeEle === "Java") {
        javaSubmit++;
    } else if (activeEle === "C") {
        cSubmit++;
    }
    // Js Pre
    let jsPre = parseFloat((jsSubmit / total) * 100).toFixed(2);
    document.getElementById("poll-js").innerHTML = `${jsPre}%`;
    document.getElementById("indicator-js").style.width = `${jsPre}%`;

    //pyPre
    let pyPre = parseFloat((pySubmit / total) * 100).toFixed(2);
    document.getElementById("poll-py").innerHTML = `${pyPre}%`;
    document.getElementById("indicator-py").style.width = `${pyPre}%`;

    // Java Pre
    let javaPre = parseFloat((javaSubmit / total) * 100).toFixed(2);
    document.getElementById("poll-java").innerHTML = `${javaPre}%`;
    document.getElementById("indicator-java").style.width = `${javaPre}%`;

    // Cpre
    let cPre = parseFloat((cSubmit / total) * 100).toFixed(2);
    document.getElementById("poll-c").innerHTML = `${cPre}%`;
    document.getElementById("indicator-c").style.width = `${cPre}%`;
}
submitBtn.onclick = function () {
    if (!document.querySelector(".active")) {
        alert("Please Select A Language")
        return
    }
    total++;
    let activeEle = document.querySelector(".active").getAttribute("data-language")
    updatePoll(activeEle)
    allPollBtn.forEach((btn) => {
        btn.classList.remove("active");
    });
}

