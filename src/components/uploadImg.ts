import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Storage } from "./FireApp";



const uploadImg = async({foldername,file}:{foldername:string,file:File}):Promise<string | null> => {
    let Url = null;
    const StorageRef = ref(Storage,foldername+"/"+file.name);
    await uploadBytes(StorageRef,file).then(async (uploadResult)=>{
        await getDownloadURL(StorageRef).then((url)=>{
            Url = url;  

        }).catch((err)=>{
            console.error("Upload Error"+err);
            Url= null;

        })

    }).catch((err)=>{
        console.error("Upload Error"+err);
        Url= null;
    })

    return Url;
}

export default uploadImg
