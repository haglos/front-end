export const SIGNUP_USER = "SIGNUP_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOG_USER_IN = 'LOG_USER_IN'
export const GETUSERS = 'GETUSERS'
export const GETUSER = 'GETUSER'
export const DELETEUSER = 'DELETEUSER'
export const EDITUSER = 'EDITUSER'
export const SEARCH = 'SEARCH'
export const ADD_CLIENT = 'ADD_CLIENT '
export const EDIT_CLIENT = 'EDIT_CLIENT '
export const DELETE_CLIENT= 'DELETE_CLIENT'
export const LOAD_CLIENTS= 'LOAD_CLIENTS'
export const SEARCH_CLIENT = 'SEARCH_CLIENT'
export const LOAD_RECOVERY = 'LOAD_RECOVERY'
export const LOGOUT= 'LOGOUT'

//utility function for calculating if token expires
let calculateRemainingTime = (expiryDate) => {
  //getting current time in milliseconds

  const currentTime = new Date().getMilliseconds()

  //getting expiration time in milliseconds
  const adjustExpirationTime = (expiryDate * 60 * 60 * 1000)
  const timeLeft = adjustExpirationTime - currentTime

  return timeLeft
}
let retrievedStoredToken = () => {
  let tokenFromStorage = localStorage.getItem('token')

  let expiryDate = localStorage.getItem('expiresIn')

  const timeLeft = calculateRemainingTime(expiryDate)

  if (timeLeft <= 3600) {

    localStorage.removeItem('token')
    localStorage.removeItem('expiresIn')
    localStorage.removeItem('admin')
    return {
      token: "",
      expiresIn: ""
    }
  }
  return {
    token: tokenFromStorage,
    expiresIn: timeLeft
  }
}

//login in admin by force
export const checkIfIsLoggedIn = () => {
  return async (dispatch, getState) => {
    try {
      let response
      //check if token is expired

      let { token, expiresIn } = retrievedStoredToken()

      if (!token) {
        return {
          bool: true,
          //data here refers to user and dispatch
          message: 'token expired'
        }
      }

      //convert expiresIN backt to hours
      expiresIn = expiresIn / (60 * 60 * 1000)

      localStorage.setItem('token', token)
      localStorage.setItem('expiresIn', expiresIn)

      let user = JSON.parse(localStorage.getItem('admin'))
      if (!user) {
        return {
          bool: true,
          //data here refers to user and dispatch
          message: 'no user found'
        }
      }
      response = await fetch(`http://localhost:8080/auth/adminbytoken`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "header": `${token}`
        }})

      if (response.status == 200) {
        let data = await response.json()

        localStorage.setItem("admin", JSON.stringify(data.response.admin))
        localStorage.setItem("token", JSON.stringify(data.response.token))
        localStorage.setItem("expiresIn", JSON.stringify(data.response.expiresIn))

        dispatch({type:LOG_USER_IN,payload:data.response})

        return {
          bool: true,
          //data here refers to user and dispatch
          message: data.response
        }
      }

    } catch (err) {
      return {
          bool: true,
          //data here refers to user and dispatch
          message: 'network error'
        }

    }

  }
}

//signup admin
export const signup = (data) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`http://localhost:8080/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
       
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()

        localStorage.setItem("admin", JSON.stringify(data.response.admin))
        localStorage.setItem("token", JSON.stringify(data.response.token))
        localStorage.setItem("expiresIn", JSON.stringify(data.response.expiresIn))

        dispatch({ type: LOGIN_USER, payload: data.response })

        return {
          bool: true,
          //data here refers to user and dispatch
          message: data.response
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }

    }

  }

}
//login admin
export const login = (data) => {
  return async (dispatch, getState) => {
    
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`http://localhost:8080/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()

      
        localStorage.setItem("admin", JSON.stringify(data.response.admin))
        localStorage.setItem("token", JSON.stringify(data.response.token))
        localStorage.setItem("expiresIn", JSON.stringify(data.response.expiresIn))

        dispatch({ type: LOGIN_USER, payload: data.response })

        return {
          bool: true,
          //data here refers to user and dispatch
          message: data.response
        }
      }
    } catch (err) {
      
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}
//add client 
export const addClient = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    let { token } = getState().userAuth
    try {
      const response = await fetch(`http://localhost:8080/auth/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "header": `${token}`
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()

        dispatch({ type: ADD_CLIENT, payload: data.response })
        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}
//get all users



export const loadClients = () => {
  
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    let { token } = getState().userAuth
    try {
      const response = await fetch(`http://localhost:8080/auth/users`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "header": `${token}`
        }
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        dispatch({ type: LOAD_CLIENTS, payload: data.response })

        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

//get single user
export const loadClient = (id) => {
  
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    let { token } = getState().userAuth
    try {
      const response = await fetch(`http://localhost:8080/auth/users/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "header": `${token}`
        },
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

//edit specific user
export const editClient = (id,data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    let { token } = getState().userAuth
    try {
      const response = await fetch(`http://localhost:8080/auth/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "header": `${token}`
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        dispatch({ type: EDIT_CLIENT, payload: data.response })
        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

//delete specific user
export const deleteClient = (id) => {
  
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    let { token } = getState().userAuth
    try {
      const response = await fetch(`http://localhost:8080/auth/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "header": `${token}`
        }
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        dispatch({ type: DELETE_CLIENT, payload:id })
        return {
          bool: true,
        }
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}


export const recovery = ()=>{
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`http://localhost:8080/auth/recovers`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        dispatch({ type: LOAD_RECOVERY, payload: data.response })

        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }

}




export const logout = ()=>{
  return async (dispatch, getState) => {
    dispatch({ type: LOGOUT })
  }

}


