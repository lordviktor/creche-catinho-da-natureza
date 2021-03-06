import {AbstractCrudService, AbstractEntity} from './../angularfire-adapter/abstractCrudService';

export class PeriodService extends AbstractCrudService<Period> {

    constructor($firebaseObject, $firebaseArray) {
        super('period', $firebaseObject, $firebaseArray);
    }

    generateIdentifier(entity:any):String {
        return entity.label;
    }
}

export class Period extends AbstractEntity {
    public label:String;
    public value:String;
}

export default angular.module('app.miscelaneous.period', [])
    .service('periodService', PeriodService)
    .name;