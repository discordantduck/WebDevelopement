const fs = require('fs');
const bcrypt = require('bcryptjs');
const users = require('./clubUsers2.json');

let nRounds = 10;
let hashedUsers = [];
let start = new Date(); // timing code

console.log(`Starting password hashing with nRounds = ${nRounds}, ${start}`);

for(let i in users.users)
{
    const salt = bcrypt.genSaltSync(nRounds);
    const hash = bcrypt.hashSync(users.users[i].password, salt);
    hashedUsers[i] = hash;
}

let elapsed = new Date() - start; // timing code
console.log(`Finished password hashing, ${elapsed/1000} seconds.`);
fs.writeFileSync("clubUsersHash.json", JSON.stringify(hashedUsers, null, 2));