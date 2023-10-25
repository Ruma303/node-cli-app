    const fs = require('fs');

    function getUser(name) {
        const usersJSON = fs.readFileSync('users.json', 'utf-8');
        const users = JSON.parse(usersJSON);
        const user = users.users.find(userName => userName.name === name);
        return user;
    }

    module.exports = {
        getUser
    };
