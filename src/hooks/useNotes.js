import { useState, useEffect } from 'react';
import { getNotes, saveNotes } from '../storage/noteStorage';
import uuid from 'react-native-uuid';

export default function useNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const storedNotes = await getNotes();
    setNotes(storedNotes);
  };

  const addNote = async (title, content) => {
const newNote = { id: uuid.v4(), title, content, date: new Date() };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    await saveNotes(updatedNotes);
  };

  const editNote = async (id, title, content) => {
    const updatedNotes = notes.map((n) =>
      n.id === id ? { ...n, title, content } : n
    );
    setNotes(updatedNotes);
    await saveNotes(updatedNotes);
  };

  const deleteNote = async (id) => {
    const filteredNotes = notes.filter((n) => n.id !== id);
    setNotes(filteredNotes);
    await saveNotes(filteredNotes);
  };

  return { notes, addNote, editNote, deleteNote, loadNotes };
}
