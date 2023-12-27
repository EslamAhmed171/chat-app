const users = []

const addUser = ({id, username, room}) => {
    // Clean data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();
    
    // validate
    if (!username || !room) {
        return {
            error: 'username and room are required'
        }
    }
    // cheak for existing user

    const existingUser = users.find(user => user.room === room && user.username === username)

    // validate
    if (existingUser) {
        return {
            error: 'username already exists!!!'
        }
    }

    // store user
    const user = {id, username, room};
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const idx = users.findIndex(user => user.id === id)

    if (idx !== -1){
        return users.splice(idx, 1)[0]
    }
}

const getUser = (id) => {
    return users.find(user => user.id === id)
}

const getUsersInRoom = (room) =>{
    return users.filter(user => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}


