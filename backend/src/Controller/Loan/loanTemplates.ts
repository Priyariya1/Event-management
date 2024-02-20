import { NextFunction, Request, Response } from 'express';


export async function getLoanTemplates(request: Request, response: Response, next: NextFunction) {

    const loans = {
        "Family": [
            {
                name: 'marriage', description: "", duration: [
                    { duration: 100, interestRate: 20 },
                    { duration: 150, interestRate: 30 },
                    { duration: 200, interestRate: 50 },
                    { duration: 250, interestRate: 100 },
                ],
                type: 'Family',
            },
            {
                name: 'baby shower', description: "", duration: [
                    { duration: 100, interestRate: 20 },
                    { duration: 150, interestRate: 30},
                    { duration: 200, interestRate: 50 },
                    { duration: 250, interestRate: 100 },
                ],
                type: 'Family',

            },
            {
                name: 'Sweet home', description: "", duration: [
                    { duration: 100, interestRate: 20 },
                    { duration: 150, interestRate: 30 },
                    { duration: 200, interestRate: 50 },
                    { duration: 250, interestRate: 100 },
                ],
                type: 'Family',

            },
        ],
        "party": [
            {
                name: 'birthday party', description: "", duration: [
                    { duration: 100, interestRate: 20 },
                    { duration: 150, interestRate: 30 },
                    { duration: 200, interestRate: 50 },
                    { duration: 250, interestRate: 100 },
                ],
                type: 'party',

            },
            {
                name: 'Friends get together', description: "", duration: [
                    { duration: 100, interestRate: 20 },
                    { duration: 150, interestRate: 30 },
                    { duration: 200, interestRate: 50 },
                    { duration: 250, interestRate: 100 },
                ],
                type: 'party',

            },
            {
                name: "party", description: "", duration: [
                    { duration: 100, interestRate: 20 },
                    { duration: 150, interestRate: 30 },
                    { duration: 200, interestRate: 50 },
                    { duration: 250, interestRate: 100 },
                ],
                type: 'party',

            },
        ]

    } as {
        [ key: string ]: {
            name: string,
            description: string,
            duration: { duration: number, interestRate: number }[],
            type: string
        }[]
    }


    response.json(loans);


}