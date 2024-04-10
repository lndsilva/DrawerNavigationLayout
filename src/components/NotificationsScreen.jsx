import React from "react";
import { View, Button } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default props => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'tomato'
        }}>
            <Icon name="notifications" size={50} color="#114232"/>
            <Button 
                onPress={()=> props.navigation.goBack('Home')}
                title="Go back home"            
            />
            <Button 
                title="Toggle Drawer" 
                onPress={() => props.navigation.toggleDrawer()}            
            />
        </View>
    )
}