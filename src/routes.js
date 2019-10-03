import { createStackNavigator } from 'react-navigation';
import Main from './pages/main';

import './config/StatusBarConfig';

export default createStackNavigator({
    Main
},{
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#da552f'
        },
        headerTintColor: '#fff'
    }
});