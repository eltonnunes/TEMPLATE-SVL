import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { MyTypedItem } from '../models/MyTypedItem';
import { Configuration } from '../app.constants';

@Injectable()
export class DataService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {

        this.actionUrl = _configuration.ServerWithApiUrl + 'myItem/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
// GetAll itens in specific url - OK
    public GetAll = (): Observable<MyTypedItem[]> => {
        return this._http.get(this.actionUrl)
            .map((response: Response) => <MyTypedItem[]>response.json())
            .catch(this.handleError);
    }
//GetSingle - id/number - OK
    public GetSingle = (id: number): Observable<MyTypedItem> => {
        return this._http.get(this.actionUrl + id)
            .map((response: Response) => <MyTypedItem>response.json())
            .catch(this.handleError);
    }
 // Add - OK
    public Add = (itemName: string): Observable<MyTypedItem> => {
        let toAdd = JSON.stringify({ ItemName: itemName });

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <MyTypedItem>response.json())
            .catch(this.handleError);
    }
// Update - OK
    public Update = (id: number, itemToUpdate: MyTypedItem): Observable<MyTypedItem> => {
        return this._http.put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map((response: Response) => <MyTypedItem>response.json())
            .catch(this.handleError);
    }
// Delete - OK
    public Delete = (id: number): Observable<Response> => {
        return this._http.delete(this.actionUrl + id)
            .catch(this.handleError);
    }
// handlerError - OK
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}