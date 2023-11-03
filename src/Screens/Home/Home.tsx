import { View } from 'react-native';

import EditTask from '../../Components/Organisms/EditTask';
import Tasks from '../../Components/Organisms/Tasks';
import { styles } from './Home.styles';

const Home = () => {
    return (
        <View style={styles.textBoxWrapper}>
            <View style={{ flex: 0.9 }}>
                <Tasks />
            </View>
            <View style={{ flex: 0.1 }}>
                <EditTask />
            </View>
        </View>
    );
};

export default Home;
Home.displayName = 'Home';
