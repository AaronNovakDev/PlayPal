import xploryBack from "../../config/back"

export async function signUp(data){
    const response = await xploryBack.post("/auth/sign_up", data)
    console.log(response.data)
    return response.data
}

export async function signIn(data){
    const response = await xploryBack.post("auth/sign_in", data)
    console.log(response.data)
    return response.data
}