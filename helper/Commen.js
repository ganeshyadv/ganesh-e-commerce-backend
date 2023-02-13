class Commen{
    constructor(){}

    uploadImage(imageInfo){
        return new Promise(function (resolve, reject) {
            // console.log("imageInfo", imageInfo);
            let imageName = imageInfo.name;
            // console.log("imageName", imageName);
            const imageNameArr = imageName.split(".");
            // console.log("imageNameArr", imageNameArr);
            const imageExt = imageNameArr.splice(-1).toString();
            // console.log("imageExt", imageExt);
            const currentDate = new Date().getTime();
            // console.log("currentDate", currentDate);
            const imageNewName = currentDate + "___" + Math.round(Math.random(1111, 99999) * 10000) + "___." + imageExt;
            // console.log("imageNewName", imageNewName);
            const uploadPath = __dirname + "/../public/images/products/" + imageNewName;
            imageInfo.mv(uploadPath, function (error) {
                if (error) {
                    let info = {
                        message: "Error while uplode image",
                        details: error,
                    }
                    reject(info)
                } else {
                    resolve(imageNewName)
                }
            });
        })
    }

}
module.exports = new Commen()