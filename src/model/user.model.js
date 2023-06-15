function createUser(id, name, age, email, interests) {
    return {
        id: id,
        name: name,
        age: age,
        email: email,
        interests: interests,
        toFirestore: function () {
            return {
                name: this.name,
                age: this.age,
                email: this.email,
                interests: this.interests
            };
        }
    };
}

function getUserFromFirestore(doc) {
    const data = doc.data();
    return createUser(doc.id, data.name, data.age, data.email, data.interests);
}

module.exports = {
    createUser,
    getUserFromFirestore
};
