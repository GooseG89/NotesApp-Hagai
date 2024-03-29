const textEl = document.querySelector("textarea#text")
const dateEl = document.querySelector("input#date")
const timeEl = document.querySelector("input#time")
const notesEl = document.querySelector("#notes")

const today = new Date();
const todayDate = `${today.getFullYear()}-0${today.getMonth()}-${today.getDate()}`
const todayTime = `${today.getHours()}:${today.getMinutes()}`

dateEl.value = todayDate
timeEl.value = todayTime

const notes = JSON.parse(localStorage.getItem("notes")) || []

printNotes(notes)

function createNote(){
    const noteText = textEl.value
    const noteDate = dateEl.value
    const noteTime = timeEl.value

    // literal object
    const note = {
        noteText,
        noteDate,
        noteTime
    }
    
    notes.push(note)

    localStorage.setItem("notes",JSON.stringify(notes))

    printNotes(notes)

    textEl.value = ''
    dateEl.value = todayDate
    timeEl.value = todayTime
}


function printNotes(notes){
    notesEl.innerHTML = ''
    notes.forEach(function (note)  {
        notesEl.innerHTML += `
        <div class="note">
            <p id="text">
               ${note.noteText}
            </p>
            <div id="date">
                ${note.noteDate}
            </div>
            <div id="time">
                ${note.noteTime}
            </div>
            <button onclick = "deleteNote()">x</button>
        </div>
        `        
    });
}

 //פיצר מחיקה
 function deleteNote() {
    notes.splice(0,1);

    printNotes(notes)

} 

printNotes(notes)

