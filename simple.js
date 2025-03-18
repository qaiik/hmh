const newCheckElements = [];

function getTextChild(element) {
    return Array.from(element.children).filter(n => !n.className)[0];
};


function makeMutationObserver(element) {
    const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'disabled' && element.disabled == true) {
               element.disabled = false;
            }
        });
    });


    const config = {
        attributes: true
    };
    observer.observe(element, config);
}

function modifyCheckElement(element) {
    let parent = element.parentNode;
    let nn = element.cloneNode(true);
    getTextChild(nn).innerText = "Modcheck";
    nn.disabled = false;
    newCheckElements.push(nn);
    
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
  checks.forEach(modifyCheckElement);
  newCheckElements.forEach(makeMutationObserver);
}

main();
