import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotesListScreen from '../screens/NotesListScreen';
import NoteEditorScreen from '../screens/NoteEditorScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="NotesList"
          component={NotesListScreen} 
          options={{ title: 'My Notes' }}
        />
        <Stack.Screen
          name="NoteEditor"
          component={NoteEditorScreen} 
          options={{ title: 'Add / Edit Note' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
