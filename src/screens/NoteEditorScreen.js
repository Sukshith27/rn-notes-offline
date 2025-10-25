import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import useNotes from '../hooks/useNotes';

export default function NoteEditorScreen({ route, navigation }) {
  const { note } = route.params || {}; // note object if editing
  const { addNote, editNote } = useNotes();

  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');

  const handleSave = async () => {
    if (!title.trim()) {
      Alert.alert('Validation', 'Title cannot be empty');
      return;
    }

    if (note) {
      await editNote(note.id, title, content);
    } else {
      await addNote(title, content);
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        style={styles.inputTitle}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Write your note..."
        style={styles.inputContent}
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  inputTitle: { fontSize: 18, fontWeight: '600', borderBottomWidth: 1, marginBottom: 10 },
  inputContent: { flex: 1, textAlignVertical: 'top', fontSize: 16, marginBottom: 10 },
});
