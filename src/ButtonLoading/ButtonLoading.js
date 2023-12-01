import React from 'react';
import useValidation from '../custom/hooks/useValidation';

const ButtonLoading = props => {

    const {
        user,
        password,
        isValid,
        handleUserChange,
        handlePassword,
        handleSubmit
    } = useValidation();

    return (
        <div data-testid="wrapper">
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='user'
                    value={user}
                    onChange={handleUserChange}
                />
                <input
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={handlePassword}
                />
                <button type='submit'>Login</button>
            </form>
            {isValid ? <p>Valores validos</p> : <p>Valores incorrectos</p>}
        </div>
    );
};

export default ButtonLoading;