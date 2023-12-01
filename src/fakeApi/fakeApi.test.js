import fakeFetch from './fakeApi';
describe('fakeapi', () => {

    test('test login post success', async () => {
        const response = await fakeFetch.post('login');
        expect(response.status).toBe(200);
    });


});