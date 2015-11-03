library = require('./module.js');
console.log(library.anvGenerator());
console.log(library.anvGenerator("V"));
console.log(library.anvGenerator("D"));

console.log(library.countPassGenerator("gr", "facebook"));
console.log(library.countPassGenerator(library.anvGenerator("D"), "github"));
console.log(library.countPassGenerator("keyword", "gmail"));
console.log(library.randPassGenerator(13));