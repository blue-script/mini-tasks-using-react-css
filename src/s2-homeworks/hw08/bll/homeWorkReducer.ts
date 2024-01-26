import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return action.payload === 'up'
              ? state // need to fix
                .sort((a,b) => a.name.localeCompare(b.name))
              : state // need to fix
                .sort((a,b) => b.name.localeCompare(a.name))
        }
        case 'check': {
            return state   // need to fix
              .filter(u=> u.age >= action.payload )
              .sort((a,b)=>a._id - b._id)
        }
        default:
            return state
    }
}
