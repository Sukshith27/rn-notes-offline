# RnNotesOffline

Hey! This is my **offline-first Notes App** built with React Native.  
The idea was to create a simple, fully functional app that works **even without the internet**.  

---

## What it does
- Add notes with **title and content**.
- **Edit existing notes** anytime.
- **Delete notes** with confirmation to prevent accidental loss.
- Works completely **offline**, storing all notes locally using AsyncStorage.
- Smooth navigation between screens and a clean, modern UI.
- Notes display **creation date**.
- Friendly empty state when no notes exist.

---

## How I built it

1. **Project Setup**
   - Initialized a React Native project using `npx @react-native-community/cli init`.
   - Installed necessary packages: `AsyncStorage`, `React Navigation`, `react-native-uuid`, `react-native-gesture-handler`, `react-native-screens`.

2. **Navigation**
   - Created `AppNavigator.js` with **stack navigation** for Notes List and Note Editor screens.

3. **Storage & State**
   - Created `noteStorage.js` for AsyncStorage helper functions.
   - Built a custom hook `useNotes.js` to handle **add, edit, delete, and fetch notes** with state management using React hooks.

4. **Notes List Screen**
   - Created `NotesListScreen.js`:
     - Displays notes in a **card layout** with shadows.
     - Floating **add button** to create a new note.
     - Confirmation alert on delete.
     - Shows creation date and a friendly message when empty.

5. **Note Editor Screen**
   - Created `NoteEditorScreen.js`:
     - Add/edit notes with **title and content inputs**.
     - Styled rounded inputs and a modern **Save button**.
     - Keyboard-aware view for iOS.
     - Validation to ensure title is not empty.

6. **Polish & Enhancements**
   - Floating add button with shadow.
   - Notes cards with shadow and date.
   - Friendly empty state with emoji.
   - Notes reload immediately after adding/editing.
   - Modular folder structure for easy maintenance.

---

## Folder Structure
RnNotesOffline/
├─ src/
│ ├─ components/ # Reusable components (if any)
│ ├─ hooks/ # Custom hooks (useNotes.js)
│ ├─ navigation/ # Stack navigation setup
│ ├─ screens/ # NotesListScreen.js, NoteEditorScreen.js
│ └─ storage/ # noteStorage.js (AsyncStorage helper)
├─ App.js # Entry point
├─ package.json
├─ README.md


---

## How to run it

1. Clone the repository:

git clone <https://github.com/Sukshith27/rn-notes-offline>
cd RnNotesOffline


2. Install dependencies:
npm install


3. Run on Android:
npx react-native run-android


4. Run on iOS (macOS only):
npx pod-install ios
npx react-native run-ios