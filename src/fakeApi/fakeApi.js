const fakeFetch = {
    post: async function(path, payload, options) {
        try {
            if (path === 'login') {
                return {
                    status: 200,
                    data: {
                        user: 'Alan',
                        token: '123456'
                    }
                };
            }
            return {
                status: 404,
                message: 'Ruta no existe'
            }
        } catch (error) {
            return {
                status: 500,
                message: 'Servidor no responde'
            }
        }
    }
};

export default fakeFetch;