import {React} from 'react'
import {TextInput} from "react-native";

const LoginForm = () => {
    return (
        <TextInput
             // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
            maxLength={40}
        />
    );
}

export default LoginForm;