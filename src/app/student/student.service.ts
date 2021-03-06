import {AbstractCrudService, AbstractEntity} from './../angularfire-adapter/abstractCrudService';
import { ui } from 'angular'

export class StudentService extends AbstractCrudService<Student> {
    
    constructor($firebaseObject, $firebaseArray) {
        super('students', $firebaseObject, $firebaseArray);
    }

    generateIdentifier(entity:Student):String {
        return entity && entity.registrationNumber.replace(' ', '-');
    }
}

export class Student extends AbstractEntity {
    public type:StudentType = StudentType.Creche;
    public registrationNumber:String;
    public name:String;
    public birthDate:Date;

    public citizenship:String;
    public cityOfBirth:String;
    public religion:String;

    public telephone:String;
    public race:String;
    public gender:Gender = Gender.Female;

    public address:Address = new Address();
}

export class Address {
    public street:String;
    public number:String;
    public complement:String;
    public neighborhood:String;
    public city:String;
    public state:String;
    public zipCode:String;
}

export enum Gender {
    Female,
    Male
}

export enum StudentType {
    Creche,
    Prosseguir
}

export default angular.module('app.student.service', [])
    .service('studentService', StudentService)
    .name;