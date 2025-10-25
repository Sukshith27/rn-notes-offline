import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import useNotes from '../hooks/useNotes';
import { useIsFocused } from '@react-navigation/native';

export default function NotesListScreen({ navigation }) {
  const { notes, deleteNote, loadNotes } = useNotes();
  const isFocused = useIsFocused(); 

  useEffect(() => {
    if (isFocused) {
      loadNotes(); 
    }
  }, [isFocused]);

  const confirmDelete = (id) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this note?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Yes', onPress: () => deleteNote(id) },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {notes.length === 0 ? (
        <Text style={styles.emptyText}>No notes yet. Tap + to add.</Text>
      ) : (
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.noteCard}
              onPress={() => navigation.navigate('NoteEditor', { note: item })}
            >
              <View style={styles.noteHeader}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => confirmDelete(item.id)}>
                  <Text style={styles.delete}>🗑️</Text>
                </TouchableOpacity>
              </View>
              <Text numberOfLines={2}>{item.content}</Text>
            </TouchableOpacity>
          )}
        />
      )}
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => navigation.navigate('NoteEditor')}
      >
        <Text style={styles.addText}>＋</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  noteCard: { padding: 15, backgroundColor: '#f2f2f2', borderRadius: 10, marginBottom: 10 },
  noteHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },

});
