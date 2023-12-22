export const validToken = (expiry)=>{
    //get the token from the store 
    //check if its greater than current seconds 
    //if it is,it is not expired
    //else it is expired
    let expiryTime = expiry
    
}
//sorting algorithm
export const  sortByYear = (obj)=>{
    return obj.sort((a,b)=>{
        let expiry = new Date(a.installation_date)
        let expiry2 = new Date(b.installation_date)
        return expiry - expiry2
    })
  }

export let search = (searchType,searchKeyWord,arr)=>{
    if(!searchType || !searchKeyWord || searchType=== ' ' || searchKeyWord === ' '){
        return []
    }
    searchType = searchType.toLowerCase()
    searchKeyWord = searchKeyWord.toLowerCase()

    let res = arr.filter(data=>{
        if(data[`${searchType}`].toLowerCase().includes(searchKeyWord)){
            return data
        }
    })
    return res
}


