import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    View,
    Text,
    Button
} from 'react-native';

const SignupScreen = ( {navigation} ) => {  

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
          .then((response) => response.json())
          .then((json) => setData(json.movies))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SignupScreen Screen</Text>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <Text>{item.title}, {item.releaseYear}</Text>
                )}
                />
            )}
        </View>
    );
}

export default SignupScreen;