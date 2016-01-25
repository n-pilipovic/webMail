export class MailHelper {
    
    constructor() {}
    
    public getHeader(headers:Array<any>, index:string):string {
        var header = '';
        for (var i in headers) {
            if(headers[i].name === index) {
                header = headers[i].value;
            }
        }
        return header;
    }
    
    public getBody(message:Object):string {
        var encodedBody = '';
        if(typeof message.parts === 'undefined') {
            encodedBody = message.body.data;
        } else {
            encodedBody = this.getHTMLPart(message.parts);
        }
        encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
        // escape function is used for special characters
        return decodeURIComponent(escape(window.atob(encodedBody)));
    }
    
    public getHTMLPart(parts:Array<any>):string {
        for(var i = 0; i <= parts.length; i++) {
            if(typeof parts[i].parts === 'undefined') {
                if(parts[i].mimeType === 'text/html') {
                    return parts[i].body.data;
                }
            } else {
                return this.getHTMLPart(parts[i].parts);
            }
        }
        return '';
    }
    
    public queryWithLabels(labels:Array<string>):string {
        var retVal = '';
        for(var label in labels) {
            if(!!labels[label]) {
                retVal.concat('&labelIds=', label);
            }
        }
        return retVal;
    }
}