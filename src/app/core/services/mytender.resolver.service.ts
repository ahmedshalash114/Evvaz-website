import { ActivatedRouteSnapshot, RouterStateSnapshot } from "../../../../node_modules/@angular/router";
import { Observable } from "../../../../node_modules/rxjs";
import { SchoolService } from "./school.service";
import { Injectable } from "../../../../node_modules/@angular/core";
import { SchoolSingleTender } from "../models/school.single.tender.model";


@Injectable()
export class MyTenderResolver{
    constructor(private schoolService: SchoolService) {}

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot)
    : Observable<SchoolSingleTender> | Promise<SchoolSingleTender> | SchoolSingleTender{
        return this.schoolService.getSingleTender(+activatedRouteSnapshot.params['tenderId']).toPromise().then(
            data => data
        ).catch(
            err => err
        )   
    }
}