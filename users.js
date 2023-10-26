    const fs = require('fs');

    function getUser(name) {
        const usersJSON = fs.readFileSync('users.json', 'utf-8');
              usersParsed = JSON.parse(usersJSON);
              user = usersParsed.users.find(userName => userName.name === name);
        return user;
    }

    module.exports = { getUser };

