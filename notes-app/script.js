const add = document.querySelector('.add')
const upData = JSON.parse(localStorage.getItem('notes'))

if(upData) {
    upData.forEach(data => {
        addNewNote(data)
    })
}

add.addEventListener('click', () => {
    addNewNote();
})

function addNewNote(text = "") {
    var note = document.createElement("div")
    note.classList.add("note");

    note.innerHTML = `
    <div class="notes">
        <div class="tools">
            <button id="edit"><i class="far fa-edit"></i></button>
            <button id="del"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main">
        </div>
        <textarea class="hidden"></textarea>
    </div>
    `
    const notesEl = note.querySelector('.notes');
    const main = notesEl.querySelector('.main');
    const textArea = notesEl.querySelector("textarea");
    const del = note.querySelector("#del")
    const edit = note.querySelector('#edit') 
    
    textArea.value = text
    main.innerHTML = marked(text)

    edit.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    textArea.addEventListener('input', (e)=> {
        var { value } = e.target;
        main.innerHTML = marked(value);

        updateLS();
    })    

    del.addEventListener('click',() => {
        note.remove();

        updateLS();
    })

    document.body.appendChild(note);
}

function updateLS() {
    const noteData = document.querySelectorAll('textarea');
    const notes = []
    
    noteData.forEach(note => {
        notes.push(note.value);
    });

    localStorage.setItem("notes",JSON.stringify(notes));
} 