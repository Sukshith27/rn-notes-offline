import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTES_KEY = 'NOTES_DATA';

export const getNotes = async () => {
  try {
    const json = await AsyncStorage.getItem(NOTES_KEY);
    return json ? JSON.parse(json) : [];
  } catch (e) {
    console.error('Failed to fetch notes', e);
    return [];
  }
};

export const saveNotes = async (notes) => {
  try {
    await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  } catch (e) {
    console.error('Failed to save notes', e);
  }
};
