const sodium  = require('sodium-native');

// This is customer real password
const password = 'customer_password';
// This is salt key get into Database
const salt = 'input_salt_here';

// Do not edit from here
let pwd = Buffer.from(password);
let slt = Buffer.from(salt);
let opslimit  = 2;
let memlimit = 67108864;
let alg = sodium.crypto_pwhash_ALG_ARGON2ID13;
let hashedPwd = Buffer.alloc(32);

sodium.crypto_pwhash( hashedPwd, pwd, slt, opslimit, memlimit, alg )

console.log(hashedPwd.toString('hex'))
