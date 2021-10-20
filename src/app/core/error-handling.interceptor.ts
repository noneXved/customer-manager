import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {MessageService} from "./message.service";
import {Injectable} from "@angular/core";

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {

    constructor(private messageService: MessageService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req);
        return next.handle(req).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse) {
                this.messageService.error(`Błąd połączenia: ${error.message}`);
            }

            return Observable.throw(error)
        }))
    }

}