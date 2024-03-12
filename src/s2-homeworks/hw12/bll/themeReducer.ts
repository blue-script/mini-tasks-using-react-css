const initState = {
    themeId: 1,
}

export const themeReducer = (state: ThemeStateType = initState, action: ActionType): ThemeStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any


type ChangeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}
type ActionType = ChangeThemeIdType
type ThemeStateType = {
    themeId: number
}