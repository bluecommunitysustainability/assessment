const inputElement = document.getElementById('note-input');
const addButton = document.getElementById('add-button');

function addNote() {
  const text = inputElement.value;
  let key = Date.now()
  if (inputElement.hasAttribute('key')) {
    key = inputElement.getAttribute('key');
    inputElement.removeAttribute('key')
    addButton.innerText = "Add"
  }
  localStorage.setItem(key, text);
  inputElement.value = '';
  refreshNotes();
}

function editNote(key, value) {
  inputElement.value = value;
  inputElement.setAttribute("key", key);
  addButton.innerText = "Update"
}

function refreshNotes() {
  const notesElement = document.getElementById('notes');
  notesElement.innerHTML = '';
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    let noteEl = `<div class="note">
      <p>${value}</p>
      <span>
        <button id="edit" onclick="editNote('${key}', '${value}')">Edit</button>
        <button id="delete" onclick="localStorage.removeItem('${key}');refreshNotes()">Delete</button></span>
      </div>`;
      notesElement.innerHTML += noteEl;
  }
}

refreshNotes();

addButton.onclick = addNote;