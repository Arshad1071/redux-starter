const logedReducer = (state = false, action) => {
    switch (action.type) {
        case 'login':
            return true
        default:
            return state;
    }
}
export default logedReducer; 