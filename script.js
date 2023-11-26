const form = document.createElement('form');
form.id = "form";

const firstNameLabel = createLabel('First Name');
const firstNameInput = createInput('text', 'first-name', true);
const lastNameLabel = createLabel('Last Name');
const lastNameInput = createInput('text', 'last-name', true); 
const ageLabel = createLabel('Age');
const ageInput = createInput('number', 'age', true);
const genderLabel = createLabel('Gender');
const genderSelect = createSelect('gender', ['Male', 'Female', 'Other'], true);
const pinCodeLabel = createLabel('Pin Code');
const pinCodeInput = createInput('text', 'pin-code', true);
const addressLabel = createLabel('Address');
const addressInput = createTextarea('address', true); 
const foodChoiceLabel = createLabel('Choice of Food');
const foodChoiceInput = createInput('text', 'food-choice', true);
const submitButton = createButton('Submit', submitForm);
const clearButton = createButton('Clear', clearForm);

document.body.append(form);
appendToForm(
    firstNameLabel, firstNameInput,
    lastNameLabel, lastNameInput,
    ageLabel, ageInput,
    genderLabel, genderSelect,
    pinCodeLabel, pinCodeInput,
    addressLabel, addressInput,
    foodChoiceLabel, foodChoiceInput,
    submitButton, clearButton
);

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const tableHeaderRow = document.createElement('tr');
const tableHeaders = ['First Name', 'Last Name', 'Age', 'Gender', 'Pin Code', 'Address', 'Food Choice'];
tableHeaders.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    tableHeaderRow.appendChild(th);
});
thead.appendChild(tableHeaderRow);
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);

function createLabel(text) {
    const label = document.createElement('label');
    label.textContent = text + ': ';
    return label;
}

function createInput(type, id, required) {
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    if (required) {
        input.required = true;
    }
    return input;
}

function createTextarea(id, required) {
    const textarea = document.createElement('textarea');
    textarea.id = id;
    if (required) {
        textarea.required = true;
    }
    return textarea;
}

function createSelect(id, options, required) {
    const select = document.createElement('select');
    select.id = id;
    if (required) {
        select.required = true;
    }

    options.forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText.toLowerCase();
        option.textContent = optionText;
        select.appendChild(option);
    });

    return select;
}

function createButton(text, clickHandler) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', clickHandler);
    return button;
}

function appendToForm(...elements) {
    elements.forEach(element => {
        form.appendChild(element);
    });
}

function submitForm(event) {
    event.preventDefault();

    const rowData = [
        firstNameInput.value,
        lastNameInput.value,
        ageInput.value,
        genderSelect.value,
        pinCodeInput.value,
        addressInput.value,
        foodChoiceInput.value
    ];

    const newRow = tbody.insertRow();
    rowData.forEach(data => {
        const cell = newRow.insertCell();
        cell.textContent = data;
    });
}

function clearForm() {
    form.reset();
}