function deleteNote(noteId) {
  fetch("/delete-note", {
    method: "POST",
    body: JSON.stringify({ noteId: noteId }),
  }).then((_res) => {
    window.location.href = "/";
  });
}

const textarea = document.getElementById("note");

textarea.addEventListener("input", function (e) {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
});
