function createAlert() {
    alert("Hey this is an alert");
}

function createPrompt(question) {
    return prompt(question);
}

function setElementTextById(id, text) {
    document.getElementById(id).innerText = text;
}

function focusOnElement(element) {
    element.focus();
}

function giveMeRandomInt(maxIntSize) { 
    // blazor automatically associates maxInt as a parameter to the GenerateRandomInt method being called
    DotNet.invokeMethodAsync('JSInteropDemo', 'GenerateRandomInt', maxIntSize)
        .then(result => {
            setElementTextById('randomNumberSpan', result);
        });
}

function giveMeRandom(maxIntSize, dotnetInstance) { 
    // the assembly does not need to be referenced becase the dotnet instance is being used
    dotnetInstance.invokeMethodAsync('GenerateRandomInt', maxIntSize)
        .then(result => {
            setElementTextById('randomNumberSpan2', result);
        })
}