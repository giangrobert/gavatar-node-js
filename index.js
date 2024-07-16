const crypto = require('crypto');
 
function getGravatarUrl(email, size = 80) {
    const trimmedEmail = email.trim().toLowerCase();
    const hash = crypto.createHash('sha256').update(trimmedEmail).digest('hex');
    return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon`;
}
 
const email = 'correo';
const size = 200;
const gravatarUrl = getGravatarUrl(email, size);
 
console.log('Gravatar URL:', gravatarUrl)