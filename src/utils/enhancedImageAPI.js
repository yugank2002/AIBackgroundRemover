import axios from "axios";

const APIKEY = "wxi2prdi6n87vi1v7";
const url = "https://techhk.aoscdn.com/api/tasks/visual/segmentation";


export const enhancedImageAPI = async (file) => {
    try {
        //code to send file to API
        const taskid = await postImage(file);

        //get the enhanced image by taskid
        const enhancedImage = await getImage(taskid);

        return enhancedImage

        
    } catch (error) {
        console.log("Error enhancing Image: ",error.message); 
    }
}

const postImage = async(file) =>{
    const formdata = new FormData();
    formdata.append("image_file", file);

   const {data} = await axios.post(url, formdata, {
        headers: {
            "Content-Type": "multipart/formdata",
            "X-API-KEY": APIKEY,
          }

    });

    if(!data?.data?.task_id){
        throw new Error("Failed to upload get Task ID");
    }

    return data.data.task_id;
}

const getImage = async (taskid) => {
    // Wait for 5 seconds before making the request
    await new Promise((resolve) => setTimeout(resolve, 5000));

    while (true) {
        const { data } = await axios.get(`${url}/${taskid}`, {
            headers: {
                "X-API-KEY": APIKEY,
            }
        });

        console.log("Checking for image...", data); // Debugging log

        if (data?.data?.image) {
            return data.data.image; // Return image URL once available
        }

        // Wait for 3 seconds before checking again
        await new Promise((resolve) => setTimeout(resolve, 5000));
    }
};

