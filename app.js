const btns = document.querySelectorAll("button");
const blocksFAQ = document.querySelectorAll(".question");

btns.forEach((btn, numBtn) => {
  btn.addEventListener("click", () => {
    blocksFAQ[numBtn].classList.contains("show-text")
      ? blocksFAQ[numBtn].classList.remove("show-text")
      : blocksFAQ[numBtn].classList.add("show-text");
  });
});

// blocksFAQ.forEach(function (question) {
//   const btn = question.querySelector(".question-btn");

//   btn.addEventListener("click", function () {

//     blocksFAQ.forEach(function (item) {
//       if (item !== question) {
//         item.classList.remove("show-text");
//       }
//     });

//     question.classList.toggle("show-text");
//   });
// });
