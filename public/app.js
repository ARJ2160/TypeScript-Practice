import { Invoice } from "./classes/invoice";
import { Payments } from "./classes/payments";
let docOne;
let docTwo;
docOne = new Invoice('mario', 'work', 250);
docTwo = new Payments('arj', 'work', 350);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const anchor = document.querySelector('a');
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payments(tofrom.value, details.value, amount.valueAsNumber);
    }
});
