import { useMemo, useState } from 'react';
import FormField from "../common/FormField.js";
import Button from "../common/Button.js"
import { login } from "../petitions/service"

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null);
    
    const handleChangeEmail = event => setUsername(event.target.value);
    const handleChangePassword = event => setPassword(event.target.value);
    const resetError = () => setError(null);

    const isButtonEnabled = useMemo(()=>{
        return username && password;
        },[username,password])

        

    const hadleSubimit = async event =>{
        event.preventDefault();
        console.log('hola')
        try {
            console.log('await')
            await login({ username, password });
            console.log('hola2')
        } catch(error){
            setError(error);
            console.log('soy el error')
        }
    }
    return (
        <div className="loginPage">
            <h1 className="loginPage-title">Log in to Twitterr</h1>
            <form onSubmit={hadleSubimit}>
                <FormField
                type="email"
                name="email"
                label="email"
                className="loginForm-field"
                onChange={handleChangeEmail}
                value={username}
                />
                <FormField
                type="password"
                name="password"
                label="password"
                className="loginForm-field"
                onChange={handleChangePassword}
                value={password}
                />
                
                <Button
                type="submit"
                variant="primary"
                className="loginForm-submit"
                disabled={!isButtonEnabled}
                >   
                Log in
                </Button>
            </form>
            {error && (
            <div onClick={resetError} className="loginPage-error">
            {error.message}
            </div>)}
        </div>
    )
}
export default LoginPage