const 
    reviewerServices
 = require("../services/reviewer.services");

exports.CreateReviewerController = async (req, res, next) => {
    try {
        const email =req.body.email;
        console.log('accepted body from ReviewerController',req.body);
        if(!email){
            return res.send({code: 400, massage: "Bad Request"})
        }
        const registeredInfo = await reviewerServices.createReviewerService({'email': email});
        res.status(200).json({
            status: "success",
            message: "Reviewer is added successfully",
            data: registeredInfo
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: "Reviewer Couldn't added Successfully",
            error: err,
            
        })
    }
};
exports.GetReviewerController = async (req, res, next) => {
    try {
        const email =req.body.email;
        console.log('email from GetReviewerController', email);
        const reviewerList = await reviewerServices.getReviewerServices({'email' : email});
        res.status(200).json({
            status: "success",
            message: "Reviewer List get successfully",
            data: reviewerList
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: "Can't get Reviewer List",
            error: err,
            
        })
    }
};