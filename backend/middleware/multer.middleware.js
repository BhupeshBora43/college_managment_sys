import multer from 'multer'
if(!multer){
    console.log("something wrong with including multer")
}
const upload = multer({
    dest:'../uploads',
    storage:multer.diskStorage({
        destination:'../uploads',
        filename:(_req,file,cb)=>{
            cb(null,file.originalname);
        },
    }),
})
console.log("im here in multer");
export default upload;