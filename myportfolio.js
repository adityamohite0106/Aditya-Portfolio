let serviceBtn = document.querySelector("button");
serviceBtn.addEventListener("click", inputName);

function inputName() {
  let name = alert("We are working on it , Stay tuned!");
}

document.addEventListener("DOMContentLoaded", function () {
  var tabs = document.querySelectorAll(".tab");
  var contents = document.querySelectorAll(".tab-content");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.getAttribute("data-tab");

      tabs.forEach(function (t) {
        t.classList.remove("active");
      });

      contents.forEach(function (content) {
        content.classList.remove("active");
      });

      tab.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });

  // Activate the first tab by default
  tabs[0].classList.add("active");
  contents[0].classList.add("active");
});

const form = document.getElementById("formInfo");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  document.getElementById("displayName").innerHTML =
    document.getElementById("yourName").value;

  const resDiv = document.getElementById("resultDiv");

  resDiv.style.display = "block";
});

function SubmitClick() {
  document.getElementById("resultDiv").style.display = "block";
  document.getElementById("displayName").innerHTML =
    document.getElementById("yourName").value;
}

const seeMoreBtn = document.getElementById("seeMoreBtn");
const hiddencontent = document.querySelector(".hidden-content");

seeMoreBtn.addEventListener("click", function () {
  if (
    hiddencontent.style.display === "none" ||
    hiddencontent.style.display === ""
  ) {
    hiddencontent.style.display = "block";
    seeMoreBtn.textContent = "See Less...";
  } else {
    hiddencontent.style.display = "none";
    seeMoreBtn.textContent = "See More...";
  }
});

