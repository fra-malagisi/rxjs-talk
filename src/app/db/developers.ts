import { Developer } from '../models/developers.model';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

export const developers: Observable<Developer[]> = of([
    {
        id: 1,
        name: 'William',
        surname: 'Smith',
        languages: ['Java', 'Python'],
        level: 'Junior',
        imgUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBEJ0fYNxUjMnoP59olkAYpwzyGC6fEyO93nBH_8cpEQ7zlBK_tg`
    } as Developer,
    {
        id: 2,
        name: 'Jenn',
        surname: 'Lewis',
        languages: ['C#'],
        level: 'Junior',
        imgUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZhlRRVQwcJi_1MtKVUoLNgxrxbWuHnws4h0ci7tb90ALaUccs0Q`
    } as Developer,
    {
        id: 3,
        name: 'Adrian',
        surname: 'Clarke',
        languages: ['Javascript'],
        level: 'Junior',
        imgUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ92YMb8cQkj-9VFBPOPj-eVs8UnI_PERDi8vTx7KubJB7SEEJymA`

    } as Developer,
    {
        id: 4,
        name: 'Chuck',
        surname: 'Ford',
        languages: ['Python'],
        level: 'Junior',
        imgUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQiGQf4y7RZSRGI7DLXYiJdootE5Wchughy-N8E1lsFEACZ2k4`
    } as Developer,
    {
        id: 5,
        name: 'Katy',
        surname: 'Green',
        languages: ['Java', 'Javascript'],
        level: 'Junior',
        imgUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStkviU0RwbZNoXOBy20mUlYM7XRBD0KvWHTAV5q1QYW1eCIi4Amw`
    } as Developer,
    {
        id: 6,
        name: 'Chad',
        surname: 'Wilson',
        languages: ['Java', 'Javascript', 'Python'],
        level: 'Senior',
        imgUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT15RdiivY8NmldORTtJ5pDpZoHmALnGAz2GZBoH52BOlc1AUSy`
    } as Developer,
    {
        id: 7,
        name: 'Dave',
        surname: 'Graham',
        languages: ['Javascript'],
        level: 'Senior',
        imgUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmecTolTr7hEQ6EFKbFY1mH4HngdJ9vkw2sW5wIONBdNx_c18-`
    } as Developer,
    {
        id: 8,
        name: 'Linda',
        surname: 'Page',
        languages: ['C#', 'Javascript'],
        level: 'Senior',
        imgUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEobZnvG4y9PA36GxsthgVwl5LTAOKlwjCp96Q6gUbz_0M-V_MVg`
    } as Developer,
    {
        id: 9,
        name: 'George',
        surname: 'Young',
        languages: ['Ruby', 'Java'],
        level: 'Senior',
        imgUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRc8800skiITfMfnlY5pe75ifZ4rCpdtzTjEcgMUqcZoXQQfovrg`
    } as Developer,
    {
        id: 10,
        name: 'Penny',
        surname: 'Simpson',
        languages: ['Java', 'Python', 'Javascript'],
        level: 'Senior',
        imgUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMR5rvCMOtvM6sDKAdHIT6t64QBejGsaZ5kAyxGin4N7wVUFaU`
    } as Developer,
]);

