//the site is really stupid and doesnt unload any check ansewr buttons so I have to do stupid stuff to get the element
const stupidCheckArray = Array.from(document.querySelectorAll("button")).filter(n => n.className.includes("lrn_validate") && !n.className.includes("invisible") && n.className.includes("lds-btn-secondary"));

function makeMutationObserver(element) {
    const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'disabled' && element.disabled = true) {
               element.disabled = false;
            }
        });
    });


    const config = {
        attributes: true
    };
    observer.observe(element, config);
}

stupidCheckArray.forEach(makeMutationObserver)
