import { NextFunction, Request, Response } from 'express';


export async function getBanks(request: Request, response: Response, next: NextFunction) {

    const banks = [
        { name: 'WOW events' },
        { name: 'Percept' },
        { name: 'Corporate events' },
        { name: 'Tafcon' },
        { name: 'Wizcraft' },

    ] as { name: string }[]


    response.json(banks);


}