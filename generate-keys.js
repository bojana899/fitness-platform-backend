const crypto = require('crypto');

console.log('=== STRAPI PRODUCTION ENVIRONMENT VARIABLES ===');
console.log('APP_KEYS=' + crypto.randomBytes(32).toString('hex'));
console.log('API_TOKEN_SALT=' + crypto.randomBytes(32).toString('hex'));
console.log('ADMIN_JWT_SECRET=' + crypto.randomBytes(32).toString('hex'));
console.log('JWT_SECRET=' + crypto.randomBytes(32).toString('hex'));
console.log('TRANSFER_TOKEN_SALT=' + crypto.randomBytes(32).toString('hex'));
console.log('');
console.log('Copy these values to your Render environment variables!');
