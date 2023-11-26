const form = document.createElement('form');
form.id = "form";
const formGroup = document.createElement('div');
formGroup.classList.add('form-group');

const firstNameLabel = createLabel('First Name');
const firstNameInput = createInput('text', 'first-name', true, 'Enter your first name');
const lastNameLabel = createLabel('Last Name');
const lastNameInput = createInput('text', 'last-name', true, 'Enter your last name');
const ageLabel = createLabel('Age');
const ageInput = createInput('number', 'age', true);
const genderLabel = createLabel('Gender');
const genderMaleInput = createRadioInput('gender', 'Male', true);
const genderFemaleInput = createRadioInput('gender', 'Female', false);
const genderOtherInput = createRadioInput('gender', 'Other', false);
const pinCodeLabel = createLabel('Pin Code');
const pinCodeInput = createInput('text', 'pincode', true, 'Enter your pin code');
const addressLabel = createLabel('Address');
const addressInput = createTextarea('address', true, 'Enter your address')
const foodChoiceLabel = createLabel('Choice of Food');
const foodChoiceInput = createInput('text', 'food-choice', true);
const submitButton = createButton('Submit', submitForm, 'btn btn-primary');
submitButton.id = "submit"
const clearButton = createButton('Clear', clearForm);

document.body.append(form);
form.appendChild(formGroup);
appendToForm(
    firstNameLabel, firstNameInput,
    lastNameLabel, lastNameInput,
    ageLabel, ageInput,
    genderLabel, genderMaleInput, genderFemaleInput, genderOtherInput,
    pinCodeLabel, pinCodeInput,
    addressLabel, addressInput,
    foodChoiceLabel, foodChoiceInput,
    submitButton, clearButton
);

const table = document.createElement('table');
table.classList.add('table');

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

function createInput(type, id, required, placeholder) {
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.placeholder = placeholder || '';
    if (required) {
        input.required = true;
    }
    return input;
}
function createTextarea(id, required, placeholder) {
    const textarea = document.createElement('textarea');
    textarea.id = id;
    if (required) {
        textarea.required = true;
    }
    textarea.placeholder = placeholder || ''; 
    return textarea;
}

function createRadioInput(name, value, checked) {
    const radioContainer = document.createElement('div');

    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.name = name;
    radioInput.value = value;
    radioInput.checked = checked;

    const radioLabel = document.createElement('label');
    radioLabel.textContent = value;

    radioContainer.appendChild(radioInput);
    radioContainer.appendChild(radioLabel);

    return radioContainer;
}

function createButton(text, clickHandler, classes) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', clickHandler);
    button.className = classes || '';
    return button;
}
function appendToForm(...elements) {
    elements.forEach(element => {
        formGroup.appendChild(element);
    });
}

function submitForm(event) {
    event.preventDefault();

    const rowData = [
        firstNameInput.value,
        lastNameInput.value,
        ageInput.value,
        document.querySelector('input[name="gender"]:checked').value,
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