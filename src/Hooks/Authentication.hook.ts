import * as LocalAuthentication from 'expo-local-authentication';
import { useState } from 'react';
import { Alert, Platform } from 'react-native';

/**
 * Hook to authenticate the user using LocalAuthentication.
 * @returns isAuthenticate - True if user is authenticate.
 * @returns authenticate - Authenticate function.
 */
const useAuthentication = () => {
    const [isAuthenticate, setIsAuthenticate] = useState(false);

    const authenticate = () => {
        if (Platform.OS !== 'ios') {
            setIsAuthenticate(true);
            return;
        }
        LocalAuthentication.isEnrolledAsync().then((hasPassword) => {
            if (!hasPassword) {
                setIsAuthenticate(false);
                return;
            }
        });
        LocalAuthentication.authenticateAsync().then(({ success }) => {
            if (success) {
                setIsAuthenticate(true);
            } else {
                setIsAuthenticate(false);
                Alert.alert('Wrong Password !');
            }
        });
    };

    return { isAuthenticate, authenticate };
};

export default useAuthentication;
