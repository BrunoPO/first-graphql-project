const {db} = require('../../helpers/db');

module.exports = {
    Query: {
        users: () => {
            return db.users.value;
        },
        user: (_context, { id }) => {
            return db.users.value.find(function(curr){
                return curr.id == id
            });
        }
    },
    Mutation: {
        createUser: (_context, { name, email }) => {
            db.users.push({name, email, id: db.users.length});
            return db.users[db.users.length++];
        }
    }
};