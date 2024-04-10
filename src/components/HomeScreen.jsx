import React from "react";
import { View, Button } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default props => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#A0C49D',
        }}>
            <Icon name="home" size={50} color="#FF9800"/>
            <Button 
                onPress={()=> props.navigation.navigate('Notifications')}
                title="Go to notifications"            
            />
            <Button 
                onPress={()=> props.navigation.openDrawer()}
                title="Open Drawer"            
            />
            <Button 
                onPress={()=> props.navigation.closeDrawer()}
                title="Close Drawer"            
            />            
        </View>
    )
}