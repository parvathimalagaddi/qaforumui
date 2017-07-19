
export default (currentState = [], action = {}) => {
	    switch (action.type) {
        case 'ADD_NEW':
            var newChat = {
                name: action.payload.message,
                user: action.payload.user,
                createdAt: new Date()
            };
            return [newChat, ...currentState];
        default:
            return currentState;
    }
}