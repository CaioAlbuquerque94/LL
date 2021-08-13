export class Pagell {
    
    content: any[];
    pageable: {
        sort: {
            unsorted: boolean;
            sorted: boolean;
            empty: boolean;
        },
        offset: Number;
        pageNumber: Number;
        pageSize: Number;
        unpaged: boolean;
        paged: boolean;
    };
    last: boolean;
    totalPages: Number;
    totalElements: Number;
    size: Number;
    number: Number;
    sort: {
        unsorted: boolean,
        sorted: boolean,
        empty: boolean
    };
    numberOfElements: Number;
    first: boolean;
    empty: boolean;
    
    

        // "content": [
        //     {
        //         "id": 27,
        //         "titulo": "teste",
        //         "descricao": "teste",
        //         "dataEvento": "06-08-2021",
        //         "tipo": "compra",
        //         "valor": 0
        //     },
        //     {
        //         "id": 28,
        //         "titulo": "teste",
        //         "descricao": "teste",
        //         "dataEvento": "06-08-2021",
        //         "tipo": "compra",
        //         "valor": 0
        //     }
        // ],
        // "pageable": {
            // "sort": {
            //     "unsorted": false,
            //     "sorted": true,
            //     "empty": false
            // },
            // "offset": 0,
            // "pageNumber": 0,
            // "pageSize": 2,
            // "unpaged": false,
            // "paged": true
        // },
        // "last": false,
        // "totalPages": 2,
        // "totalElements": 4,
        // "size": 2,
        // "number": 0,
        // "sort": {
            // "unsorted": false,
            // "sorted": true,
            // "empty": false
        // },
        // "numberOfElements": 2,
        // "first": true,
        // "empty": false
}