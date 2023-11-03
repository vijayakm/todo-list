import { ScrollView, Text, View } from 'react-native';

import { selectTaskIds } from '../../../Selectors/task.selectors';
import { useSelector } from '../../../store';
import Task from '../../Molecules/Task';
import { styles } from './Tasks.styles';

const Tasks = () => {
    // Selectors
    const taskId = useSelector(selectTaskIds);

    // Component
    return (
        <>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>TODO :</Text>
            </View>
            <ScrollView
                contentContainerStyle={{ flex: 1 }}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.items}>
                    {taskId.map((id) => (
                        <Task key={id} id={id} />
                    ))}
                </View>
            </ScrollView>
        </>
    );
};

export default Tasks;
Tasks.displayName = 'Tasks';
