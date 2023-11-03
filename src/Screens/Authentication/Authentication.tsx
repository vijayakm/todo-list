import { Pressable, Text, View } from 'react-native';

import { styles } from './Authentication.styles';
import { AuthenticationProps } from './Authentication.types';

const Authentication = (props: AuthenticationProps) => {
    const { authenticate } = props;

    return (
        <View style={styles.AuthenticationWrapper}>
            <Pressable style={styles.btn} onPress={authenticate}>
                <Text style={styles.login}>{'Login'}</Text>
            </Pressable>
        </View>
    );
};
export default Authentication;
Authentication.displayName = 'Authentication';
