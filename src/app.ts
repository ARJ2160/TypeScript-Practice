import { Invoice } from "./classes/invoice"
import { Payments } from "./classes/payments"
import { HasFormatter } from "./interfaces/HasFormatter"
import { ListTemplate } from "./classes/ListTemplates" 

const anchor = document.querySelector('a') as HTMLAnchorElement;
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul') as HTMLUListElement
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    
    e.preventDefault();
    let doc: HasFormatter
    
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payments(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')
});