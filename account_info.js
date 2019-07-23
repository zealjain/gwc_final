
const isValidElement = element => {
  return element.name && element.value;
};

const isValidValue = element => {
  return !['checkbox', 'radio'].includes(element.type) || element.checked;
};

const isCheckbox = element => element.type === 'checkbox';
                                                                                                                     */
const isMultiSelect = element => element.options && element.multiple;
                                                                                                                                             * Retrieves the selected options from a multi-select as an array.
                                                                                                                                             * @param  {HTMLOptionsCollection} options  the options for the select
                                                                                                                                             * @return {Array}                          an array of selected option values
                                                                                                                                             */
const getSelectValues = options => [].reduce.call(options, (values, option) => {
  return option.selected ? values.concat(option.value) : values;
}, []);

const formToJSON_deconstructed = elements => {

  // This is the function that is called on each element of the array.
  const reducerFunction = (data, element) => {

    // Add the current field to the object.
    data[element.name] = element.value;

    // For the demo only: show each step in the reducer’s progress.
    console.log(JSON.stringify(data));

    return data;
  };

  // This is used as the initial value of `data` in `reducerFunction()`.
  const reducerInitialValue = {};

  // To help visualize what happens, log the inital value, which we know is `{}`.
  console.log('Initial `data` value:', JSON.stringify(reducerInitialValue));

  // Now we reduce by `call`-ing `Array.prototype.reduce()` on `elements`.
  const formData = [].reduce.call(elements, reducerFunction, reducerInitialValue);

  // The result is then returned for use elsewhere.
  return formData;
};

const formToJSON = elements => [].reduce.call(elements, (data, element) => {

  // Make sure the element has the required properties and should be added.
  if (isValidElement(element) && isValidValue(element)) {
                                                                                                               * Some fields allow for more than one value, so we need to check if this
                                                                                                               * is one of those fields and, if so, store the values as an array.
                                                                                                               */
    if (isCheckbox(element)) {
      data[element.name] = (data[element.name] || []).concat(element.value);
    } else if (isMultiSelect(element)) {
      data[element.name] = getSelectValues(element);
    } else {
      data[element.name] = element.value;
    }
  }

  return data;
}, {});

const handleFormSubmit = event => {

  // Stop the form from submitting since we’re handling that with AJAX.
  event.preventDefault();

  // Call our function to get the form data.
  const data = formToJSON(form.elements);

  // Demo only: print the form data onscreen as a formatted JSON object.
  const dataContainer = document.getElementsByClassName('results__display')[0];

  // Use `JSON.stringify()` to make the output valid, human-readable JSON.
  dataContainer.textContent = JSON.stringify(data, null, "  ");

  // ...this is where we’d actually do something with the form data...
};

const form = document.getElementsByClassName('contact-form')[0];
form.addEventListener('submit', handleFormSubmit);
