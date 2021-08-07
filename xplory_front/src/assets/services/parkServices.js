import xploryBack from "../../config/back"

export async function getParks(){
    const response = await xploryBack.getParks("/xplory_back/models/park")
    console.log(response)
    return response.data
}

export async function getMyParks(){
    const response = await xploryBack.get("/xplory_back/models/user")
    return response.data
}

export async function createPark(data){
    const response = await xploryBack.post("/xplory_back/models/park", data)
    console.log(response.data)
    return response.data

}

export async function deletePark(id){
    const response = await xploryBack.delete(`/models/park/${id}`)
    return response.data

}