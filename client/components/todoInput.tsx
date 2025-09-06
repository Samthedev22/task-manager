import { View, Alert, TextInput, TouchableOpacity } from 'react-native'
import useTheme from '@/app/hooks/useTheme'
import { useState } from 'react';
import { api } from '@/convex/_generated/api';
import { useMutation } from 'convex/react';
import { createHomeStyles } from '@/assets/styles/home.styles';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

const TodoInput = () => {
    const { colors } = useTheme();
    const homeStyles = createHomeStyles(colors);

    const [newTodo, setNewTodo] = useState("");
    const addTodo = useMutation(api.todos.addTodo);

    const handlerAddTodo = async () => {
        if(newTodo.trim()) {
            try{
                await addTodo({text: newTodo.trim() });
                setNewTodo("");
            } catch (error) {
                console.log("Error adding a todo", error);
                Alert.alert("Error", "Failed to add todo");
            }
        }
    };

  return (
    <View style={homeStyles.inputSection}>
        <View style={homeStyles.inputWrapper}>
            <TextInput 
            style={homeStyles.input}
            placeholder='Enter your task?'
            value={newTodo}
            onChangeText={setNewTodo}
            onSubmitEditing={handlerAddTodo}
            placeholderTextColor={colors.textMuted}
            />
            <TouchableOpacity 
            onPress={handlerAddTodo} 
            activeOpacity={0.8} 
            disabled={!newTodo.trim()}
            >
                <LinearGradient
                colors={newTodo.trim() ? colors.gradients.primary : colors.gradients.muted}
                style={[homeStyles.addButton, !newTodo.trim() && homeStyles.addButtonDisabled]}
                >
                    <Ionicons name="add" size={28} color="#ffffff"/>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default TodoInput;