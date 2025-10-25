import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import useNotes from '../hooks/useNotes';

export default function NoteEditorScreen({ route, navigation }) {
  const { note } = route.params || {};
  const { addNote, editNote } = useNotes();

  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');

  const handleSave = async () => {
    if (!title.trim()) {
      Alert.alert('Validation', 'Title cannot be empty');
      return;
    }
    if (note) await editNote(note.id, title, content);
    else await addNote(title, content);
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
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
      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  inputTitle: {
    fontSize: 20,
    fontWeight: '600',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    paddingVertical: 5,
  },
  inputContent: {
    flex: 1,
    fontSize: 16,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  saveBtn: {
    marginTop: 15,
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveText: { color: '#fff', fontSize: 18, fontWeight: '600' },
});
