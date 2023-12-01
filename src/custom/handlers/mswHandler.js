import {rest} from 'msw';

export const handlers = [
    rest.get('/api/users', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {id: 1, username: 'user1'},
                {id: 2, username: 'user2'},
                {id: 4, username: 'user4'},
            ])
        );
    })
];

// npm i msw@0.33.0 --save-dev