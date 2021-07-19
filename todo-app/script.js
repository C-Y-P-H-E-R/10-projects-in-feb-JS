const form = document.querySelector(".entertodo");

const inp = document.getElementById('addtodo');

const todos = document.getElementById("todos");

loadFromLS() 

form.addEventListener('submit', (e) => {
    e.preventDefault();
    var todoText = inp.value;
    if(todoText) {
        addTodo(todoText);
        updateLS()
    }
});

function updateLS() {
    const notesEl = document.querySelectorAll('li');
    const notes = [];
    if(notesEl) {
        notesEl.forEach(noteEl => {
            notes.push({
                text: noteEl.innerText,
                status: noteEl.classList.contains('completed')
            });
        });
    }
    // console.log(notes)
    localStorage.setItem('todos',JSON.stringify(notes));
}

function loadFromLS() {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if(todos) {
        todos.forEach(todo => {
            addTodo(todo.text)
        });
    } else {
        return
    }
}

function addTodo(todoText) {
    const todo = document.createElement("li");
    todo.innerHTML = `${todoText}
        <button class="del"><i class="fas fa-trash-alt"></i>
        </button>
    `

    todo.addEventListener('click',() => {
        todo.classList.toggle("completed");
        updateLS()
    });

    const delBtn = todo.querySelector('.del');
    delBtn.addEventListener('click', () => {
        todo.remove();
    }); 

    todos.appendChild(todo);
    inp.value = ""
}