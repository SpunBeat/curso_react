import {useState} from 'react';
import {validateUserAndPassword} from '../../ButtonLoading/adapter/ButtonLoadingAdapter';

const useValidation = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleUserChange = event => {
        setUser(event.target.value);
    };

    const handlePassword = event => {
        setPassword(event.target.value);
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        const validUserAndPassword = validateUserAndPassword(user, password);
        setIsValid(validUserAndPassword);
    };

    return {
        user,
        password,
        isValid,
        handleUserChange,
        handlePassword,
        handleSubmit
    };
};

export default useValidation;
