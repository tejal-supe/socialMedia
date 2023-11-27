

export const checkPassword = async (password: string, data: any) => {
    console.log(data,'data')
    if (password === data.password) {
        return true
    }
    
}