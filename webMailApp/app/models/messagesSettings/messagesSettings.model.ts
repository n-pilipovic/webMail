export class MessagesSettings {
    private pageToken:string;
    private queryWord:string;
    private totalNumberOfMessages:number;
    
    constructor(pageToken?:string, query?:string, numberOfMessages?:number) {
        this.pageToken = pageToken || '';
        this.queryWord = query || '';
        this.totalNumberOfMessages = numberOfMessages || 0;
    }
    
    public setPageToken(token:string):void {
        this.pageToken = token;
    }
    
    public getPageToken():string {
        return this.pageToken;
    }
    
    public setQuery(query:string):void {
        this.queryWord = query;
    }
    
    public getQuery():string {
        return this.queryWord;
    }
    
    public setTotalNumberOfMessages(numberOfMessages:number):void {
        this.totalNumberOfMessages = numberOfMessages;
    }
    
    public getTotalNumberOfMessages():number {
        return this.totalNumberOfMessages;
    }
}