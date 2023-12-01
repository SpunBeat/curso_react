import React from 'react';
import { handlers } from '../../custom/handlers/mswHandler';
import {setupServer} from 'msw/node';
import configureMockStore from 'redux-mock-store';
import {fetchUsers} from '../../store/reducer';
import thunk from 'redux-thunk'

const mockStore = configureMockStore([thunk]);

const server = setupServer(...handlers);

describe('Users', () => {

    // REDUX - MS
    
    test('fetch users from API and displays them Redux', async () => {
        const fakeData = [
            {id: 1, username: 'user1'},
            {id: 2, username: 'user2'},
            {id: 4, username: 'user4'},
        ];
        const store = mockStore({users: fakeData});
        return store.dispatch(fetchUsers())
            .then(() => {
            const actions = store.getActions()
            expect(actions).toBeDefined()
        })
    });


    // MWS

    // beforeAll(() => {
    //     server.listen();
    // });
    // afterEach(() => {
    //     server.resetHandlers();
    // });
    // afterAll(() => {
    //     server.close();
    // });

    // test('fetch users from API and displays them', async () => {
    //     render(<Users />);
    //     const user1 = await screen.findByText('user1');
    //     const user2 = await screen.findByText('user2');
    //     const user4 = await screen.findByText('user4');

    //     expect(user1).toBeInTheDocument();
    //     expect(user2).toBeInTheDocument();
    //     expect(user4).toBeInTheDocument();
    // });

});