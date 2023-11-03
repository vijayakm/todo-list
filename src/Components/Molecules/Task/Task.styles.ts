import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    remove: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        marginRight: 15,
        width: 12,
        height: 12,
        borderColor: '#159A9C',
        borderWidth: 2,
        borderRadius: 5,
    },
    selectedCircular: {
        marginRight: 15,
        width: 12,
        height: 12,
        backgroundColor: '#159A9C',
        borderColor: '#159A9C',
        borderWidth: 2,
        borderRadius: 5,
    },
});
