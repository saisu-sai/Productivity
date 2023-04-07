var simplemde = new SimpleMDE({
  element: document.getElementById("editor")
});

var editorContent = localStorage.getItem("editorContent");
if (editorContent) {
  simplemde.value(editorContent);
}

simplemde.codemirror.on("change", function() {
  localStorage.setItem("editorContent", simplemde.value());
});
