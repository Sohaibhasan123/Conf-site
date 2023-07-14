const 
    authorSubmitServices
 = require("../services/authorSubmit.services");

exports.CreateAuthorSubmitController = async (req, res, next) => {
    try {
        const submitInfo = req.body;
        console.log(req.file,submitInfo);
        const title = req.body.title;
        const description = req.body.description;
        const fileURL =req.file.path;
        if(!title || !description || !fileURL){
            return res.send({code: 400, massage: "Bad Request"})
        }
        const registeredInfo = await authorSubmitServices.createAuthorSubmitServices({'description': description , 'fileURL' : fileURL, 'title': title});
        res.status(200).json({
            status: "success",
            message: "Submission completed successfully",
            data: registeredInfo
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: "Can't Submitted Successfully",
            error: err,
            
        })
    }
};
exports.GetAuthorSubmitController = async (req, res, next) => {
    try {
        
        const registeredInfo = await authorSubmitServices.getAuthorSubmitServices();
        res.status(200).json({
            status: "success",
            message: "Submitted data get successfully",
            data: registeredInfo
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: "Can't Submitted data get",
            error: err,
            
        })
    }
};