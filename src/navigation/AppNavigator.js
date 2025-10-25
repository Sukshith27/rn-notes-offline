import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

function NotesListScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notes List Screen</Text>
    </View>
  );
}

function NoteEditorScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Note Editor Screen</Text>
    </View>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="NotesList" component={NotesListScreen} options={{ title: 'My Notes' }} />
        <Stack.Screen name="NoteEditor" component={NoteEditorScreen} options={{ title: 'Add / Edit Note' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
