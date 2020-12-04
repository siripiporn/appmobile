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


class Edit extends React.Component {
     
    render() {
        return (
            <View style={styles.container}>
                    <Text>Edit</Text>
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


export default Edit;
