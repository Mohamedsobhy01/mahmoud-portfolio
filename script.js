const updateRedux = document.querySelector("[data-name='Redux']");
updateRedux.firstElementChild.innerText = "Node.js";

const updateReactTestingLibrary = document.querySelector(
  "[data-name='React testing library']",
);
updateReactTestingLibrary.firstElementChild.innerText = "MongoDB";

const liElement = `
    <li data-name="typescript" class="skills__item">
      <h2 class="skills__title">TypeScript</h2>
      <span class="skills__years">2 year</span>
    </li>`;

const Element = document.createRange().createContextualFragment(liElement);
const javaScriptItem = document.querySelector("[data-name='Javascript']");
javaScriptItem.insertAdjacentHTML("afterend", liElement);

const removeDownloadCV = document.querySelector(".find-out-link");
removeDownloadCV.remove();

const personalImage = document.querySelector(".bio__pic");
personalImage.style.width = "36rem";
