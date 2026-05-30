const fs = require('fs');

const file = '8 meses.html';
let content = fs.readFileSync(file, 'utf8');

// Extract style
const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/);
if (styleMatch) {
    fs.writeFileSync('style.css', styleMatch[1].trim());
    content = content.replace(/<style>[\s\S]*?<\/style>/, '<link rel="stylesheet" href="style.css">');
}

// Extract script
const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch) {
    fs.writeFileSync('script.js', scriptMatch[1].trim());
    content = content.replace(/<script>[\s\S]*?<\/script>/, '<script src="script.js"></script>');
}

fs.writeFileSync(file, content);
console.log('Files separated successfully.');
