const grpc = require("grpc");
const NotesDefinition = grpc.load(require("path").resolve("./notes.proto"));

const client = new NotesDefinition.NoteService(
  "localhost:3333",
  grpc.credentials.createInsecure()
);

// client.list({}, (err, notes) => {
//   if (err) throw err;
//   console.log(notes);
// });

client.find(Math.floor(Math.random() * 3 + 1).toString(), (err, note) => {
  if (err) throw err;
  if (!note.id) return console.log("Note not found");
  return console.log(note);
});
