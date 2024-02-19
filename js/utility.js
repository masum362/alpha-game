const removeClassForId = (className , fieldId) => {
    const element = document.getElementById(fieldId);
    element.classList.remove(className);
}
const addClassForId = (className , fieldId) => {
    const element = document.getElementById(fieldId);
    element.classList.add(className);
}