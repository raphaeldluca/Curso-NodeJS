const path = require('path');

//Basename
console.log(path.basename(__filename));

// Nome do diretorio atual
console.log(path.dirname(__filename));

// Extensao do arquivo
console.log(path.extname(__filename));

// Criar objeto path
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
console.log (path.join(__dirname, "test", "test.html"));
