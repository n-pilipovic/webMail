export class RecievedMail {
    public id:string;
    public from:string;
    public subject:string;
    public date:string;
    public body:string;
    
    constructor(id?:string, from?:string, subject?:string, date?:string, body?:string) {
        this.id = id || '';
        this.from = from || '';
        this.subject = subject || '';
        this.date = date || '';
        this.body = body || '';
    }
}