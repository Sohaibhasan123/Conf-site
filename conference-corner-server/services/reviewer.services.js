const reviewerModel = require("../models/addReviewer.model")

exports.createReviewerService = async ({ 'email': email }) => {
    const submitInfo = await reviewerModel.create({ 'email': email });
    console.log('reviewerInfo from services',submitInfo);
    return submitInfo;
};
exports.getReviewerServices = async ({ 'email': email }) => {

    const submitInfo = await reviewerModel.find({ 'email': email });
    console.log('from review services getReviewerServices',submitInfo);
    return submitInfo;
};