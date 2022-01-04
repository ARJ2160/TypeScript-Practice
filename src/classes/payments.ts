import { HasFormatter } from "../interfaces/HasFormatter"

export class Payments implements HasFormatter{
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {}
    
    format() {
        return `${this.client} is owed $${this.amount} for ${this.details}`
    }
}