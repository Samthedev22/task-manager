import { View, Text } from 'react-native'
import { createSettingsStyles } from '@/assets/styles/settings.styles';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import useTheme from '@/app/hooks/useTheme';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const ProgressStats = () => {
    const { colors } = useTheme();
    const settingsStyles = createSettingsStyles(colors);

    const todos = useQuery(api.todos.getTodos)
    const totalTodos = todos ? todos.length : 0;
    const completedTodos = todos ? todos.filter((todo) => todo.isCompleted).length : 0;
    const activeTodos = todos ? totalTodos - completedTodos : 0;

  return (
    <LinearGradient colors={colors.gradients.surface} style={settingsStyles.section}>
        <Text style={settingsStyles.sectionTitle}>Today&apos;s todo</Text>
        
        <View style={settingsStyles.statsContainer}>
            <LinearGradient
          colors={colors.gradients.background}
          style={[settingsStyles.statCard, { borderLeftColor: colors.primary }]}
        >
        <View style={settingsStyles.statIconContainer}>
            <LinearGradient colors={colors.gradients.primary} 
            style={[settingsStyles.statCard, {borderLeftColor: colors.primary}]}
            >
            <Ionicons name="list" size={18} color="#fff"/>
            </LinearGradient>
        </View>

        <View>
            <Text style={settingsStyles.statNumber}>{totalTodos}</Text>
            <Text style={settingsStyles.statLabel}>Total Todos</Text>
        </View>
            </LinearGradient>
        </View>


        <View style={settingsStyles.statsContainer}>
            <LinearGradient
            colors={colors.gradients.background}
            style={[settingsStyles.statCard, { borderLeftColor: colors.success }]}
            >
        <View style={settingsStyles.statIconContainer}>
            <LinearGradient colors={colors.gradients.success} 
            style={[settingsStyles.statCard, {borderLeftColor: colors.success}]}
            >
            <Ionicons name="checkmark" size={18} color="#fff"/>
            </LinearGradient>
        </View>

        <View>
            <Text style={settingsStyles.statNumber}>{completedTodos}</Text>
            <Text style={settingsStyles.statLabel}>completed Todos</Text>
        </View>
        </LinearGradient>
        </View>

        <View style={settingsStyles.statsContainer}>
            <LinearGradient
            colors={colors.gradients.background}
            style={[settingsStyles.statCard, { borderLeftColor: colors.success }]}
            >
        <View style={settingsStyles.statIconContainer}>
            <LinearGradient colors={colors.gradients.warning} 
            style={[settingsStyles.statCard, {borderLeftColor: colors.warning}]}
            >
            <Ionicons name="time" size={18} color="#fff"/>
            </LinearGradient>
        </View>

        <View>
            <Text style={settingsStyles.statNumber}>{activeTodos}</Text>
            <Text style={settingsStyles.statLabel}>Active Todos</Text>
        </View>
        </LinearGradient>
        </View>


    </LinearGradient>

  )
}

export default ProgressStats