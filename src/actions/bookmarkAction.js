export const addBookmark = (data) => {
    return {type: 'ADD_BOOKMARK', data}
}
export const deleteBookmark = (id) => {
    return {type: 'DELETE_BOOKMARK', id}
}