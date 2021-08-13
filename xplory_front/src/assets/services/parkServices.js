import xploryBack from '../../config/back'

export async function getParks(){
    const response = await xploryBack.get("/parks")
    console.log(response)
    return response.data
}

export async function getMyParks(){
    const response = await xploryBack.get("/parks")
    return response.data
}

export async function createPark(data){
    const response = await xploryBack.post("/parks", data)
    console.log(response.data)
    return response.data

}

export async function deletePark(id){
    const response = await xploryBack.delete(`/parks/${id}`)
    return response.data

}   
export async function changePark(id){
    const response = await xploryBack.updatePark(`/park/${id}`)
    return response.data
}