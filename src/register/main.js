import React from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    Text,
    Image,
    View,
    ScrollView,
    AsyncStorage,
    Dimensions
} from 'react-native';


class Main extends React.Component {
     
    render() {
        return (
            <View style={styles.container}>
                    <Text>Main</Text>
                </View> 
            );
        }
        
    }



    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#fff',
            
        },
        

    });


export default Main;
