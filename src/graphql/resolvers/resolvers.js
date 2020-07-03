const {db} = require('../../helpers/db');
const recipe = require('../queries/recipe');

module.exports = {
    Query: {
        ...recipe,
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