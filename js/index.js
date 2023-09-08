const wrapper = document.querySelector(".wrapper");
const articleUl = wrapper.querySelector(".article-ul");
const select = wrapper.querySelector(".select");
const wrapperOtp = wrapper.querySelector(".wrapper-opt");
const addOptionBtn = wrapper.querySelector(".add-option-btn");
const delOptionBtn = wrapper.querySelector(".del-option-btn");

let count = 0;

// function
function changeSelect(e) {
  switch (e.target.value) {
    case "객관식":
      articleUl.innerHTML = `<li><input value='옵션${count}' /></li>`;
      break;

    case "단답형":
      wrapperOtp.innerHTML = `hello`;
      break;

    case "장문형":
      break;

    case "체크박스":
      break;

    case "드롭다운":
      break;

    default:
      break;
  }
}

// eventList
select.addEventListener("change", changeSelect);
select.dispatchEvent(new Event("change"));

addOptionBtn.addEventListener("click", () => {
  count++;
  articleUl.innerHTML += `<li><input value="옵션${count}" /></li>`;
});

// eventList
select.delOptionBtn("change", changeSelect);
select.delOptionBtn(new Event("change"));

addOptionBtn.addEventListener("click", () => {
  count--;
  articleUl.innerHTML += `<li><input value="옵션${count}" /></li>`;
});