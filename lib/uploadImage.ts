import {ID, storage} from '@/appwrite'

const uploadImage = async(file: File) => {
    if(!file) return;

    const fileUpload = await storage.createFile(
        '647377bc586c9c103e81',
        ID.unique(),
        file
    )

    return fileUpload
}

export default uploadImage