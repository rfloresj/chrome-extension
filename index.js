let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  // Clear out the input field
  inputEl.value = '';
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li><a target='_blank' rel='noopener noreferrer' href= 'http://" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
    console.log(listItems)
  }
  ulEl.innerHTML = listItems;
}

//rel="noopener noreferrer"