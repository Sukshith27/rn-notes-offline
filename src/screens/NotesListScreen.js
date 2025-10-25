import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import useNotes from '../hooks/useNotes';
import { useIsFocused } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


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
                <View style={styles.emptyContainer}>
                    <MaterialIcons name="article" size={60} color="#900" />
                    <Text style={styles.emptyText}>No notes yet. Tap + to add your first note!</Text>
                </View>
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
                            <Text numberOfLines={2} style={styles.content}>{item.content}</Text>
                            <Text style={styles.date}>{new Date(item.date).toLocaleString()}</Text>
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
    noteCard: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3, // Android shadow
    },
    content: { fontSize: 14, color: '#333', marginVertical: 5 },
    date: { fontSize: 12, color: '#888', textAlign: 'right' }, noteHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
    title: { fontWeight: 'bold', fontSize: 16 },
    delete: { fontSize: 18 },
    addBtn: {
        position: 'absolute',
        bottom: 25,
        right: 25,
        backgroundColor: '#007AFF',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    addText: { fontSize: 28, color: '#fff' },
    emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    emptyText: { marginTop: 10, fontSize: 16, color: '#888', textAlign: 'center' },

});
