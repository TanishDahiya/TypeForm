//If in local storage have token user is logged in

export const isLoggedIn=()=>{
  let data=  localStorage.getItem("data")

  if(data==null){
    return false;
  }else{
    return true;
  }
}


//doLogin-->  set jwtToken to localstorage

export const doLogin=(data,next)=>{
    localStorage.setItem("data",JSON.stringify(data))
    next()
}
//doLogout--> remove from local storage

export const doLogout=(next)=>{
    localStorage.removeItem("data")
    next()
}

//get Current user login
export const getCurrentUserDetail=()=>{
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem("data"))
    }
}