const newCheckElements = [];

function modifyCheckElement(element) {
    let parent = element.parentNode;
    let nn = element.cloneNode(true);
    nn.firstChild.innerText = "Modcheck";
    nn.disabled = false;
    //nn.firstChild.innerText = "Modcheck" --modifies the checks to show the hack worked, not useful if doing assignment at school
  
    parent.removeChild(element);
    parent.appendChild(nn);

    nn.addEventListener('click', () => {
        LearnosityAssess.validateQuestions();
    })
  
}

function getChecks() {
  return Array.from(document.querySelectorAll("button")).filter(n => n.className.includes("lrn_validate") && !n.className.includes("invisible") && n.className.includes("lds-btn-secondary"));
}

function main() {
  const checks = getChecks();
  checks.forEach(modifiyCheckElement);
}
