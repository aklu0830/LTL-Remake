import { StyleSheet } from 'react-native';
import axios from 'axios';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {useEffect, useState} from "react";

export default function TabThreeScreen({ navigation }: RootTabScreenProps<'TabThree'>)  {
    const [users, setUsers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://18.222.116.189:8000/api/users')
            .then(response => {
                setUsers(response.data)
                setIsLoaded(true);
            })
            .catch(err => console.log(err))

    }, [])

    if(!isLoaded) {
        return (
            <Text style={styles.title}>Loading Data!</Text>
        )
    } else {

        return (


            <View style={styles.container}>
                <Text style={styles.title}>Users:</Text>
                {users.map((user, index) => {
                    return(
                        <Text style={styles.title}>{user.firstName} {user.lastName}</Text>
                    )

                })}
            </View>
        );
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
