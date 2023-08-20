let myLeads = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  // Clear out the input field0
  inputEl.value = '';
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  renderLeads();

  console.log(localStorage.getItem("myLeads"));
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // listItems += "<li><a target='_blank' rel='noopener noreferrer' href= 'http://" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
    listItems += `
        <li>
            <a target='_blank' rel='noopener noreferrer' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
    `
  }
  ulEl.innerHTML = listItems;
}

//rel="noopener noreferrer"