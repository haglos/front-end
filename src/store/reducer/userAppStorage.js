import { LOGIN_USER, LOG_USER_IN, ADD_CLIENT, EDIT_CLIENT, DELETE_CLIENT, LOAD_CLIENTS, LOAD_RECOVERY, LOGOUT } from "../action/userAppStorage";

const initialState = {
    token: "",
    expiresIn: "",
    admin: null,
    clients: [],
    recoveredClient: []
}



export const userAuthReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN_USER:
            return {
                ...state,
                admin: action.payload.admin,
                token: action.payload.token,
            }

        case LOG_USER_IN:
            return {
                ...state,
                admin: action.payload.admin,
                token: action.payload.token,
            }

        case ADD_CLIENT:
            return {
                ...state,
                clients: [...state.clients, action.payload.user],
            }

        case LOAD_CLIENTS:
            return {
                ...state,
                clients: [...action.payload.users],
            }

        case EDIT_CLIENT:
            let id = action.payload.user._id
            let editedClients = state.clients.map(data => {
                if (data.id === id) {
                    return action.payload.user
                }
                return data
            })
            return {
                ...state,
                clients: editedClients,
            }



        case DELETE_CLIENT:
            let clients = state.clients.filter(data => data._id !== action.payload)

            return {
                ...state,
                clients: clients,
            }

        case LOAD_RECOVERY:
            return {
                ...state,
                recoveredClient: [...action.payload.users],
            }

        case LOGOUT:
            return {
                ...state,
                token: "",
                expiresIn: "",
                admin: null,
            }

        default:
            return state

    }

}

