const yogaModel = require('../models/yoga');

/* 
Route           /yoga/all-yoga-pose
Description 	Get the list of all the Yoga Poses
Access          PUBLIC
Methods         GET
*/
// http://localhost:8000/api/yoga/all-yoga-pose
module.exports.getAllYogaPoses = async (req, res) => {

    const getAllYogaPoses = await yogaModel.find();

    return res.json(getAllYogaPoses);

}


/* 
Route           /specific-yoga-pose/:id
Description 	Get the specific Yoga Pose Details
Access          PUBLIC
Parameter       id
Methods         GET
*/
// http://localhost:8000/api/specific-yoga-pose/:id
module.exports.getSpecificYogaPoses =  async (req, res) => {

    const { id } = req.params;

    const getSpecificYogaPoses = await yogaModel.findOne({ _id: id });

    if (getSpecificYogaPoses === null) {

        return res.json({ "Error": `No Yoga Pose Found : ${id}` });
    }

    return res.json(getSpecificYogaPoses);
}


/* 
Route           /yoga-category/:category
Description 	Get list of all Yoga Poses based on category as sitting, lying or standing
Access          PUBLIC
Parameter       category
Methods         GET
*/
// http://localhost:8000/api/yoga-category/:category
module.exports.getSpecificYogaPoseOnCategory = async (req, res) => {

    const { category } = req.params;

    const getSpecificYogaPoseOnCategory = await yogaModel.find({ category: category });


    if (getSpecificYogaPoseOnCategory.length === 0) {

        return res.json({ "error": `No Yoga Pose Found for the category of : ${category}` });

    }

    return res.json(getSpecificYogaPoseOnCategory);

}

/* 
Route           /add-new-yoga-pose
Description 	add a new Yoga Pose
Access          PUBLIC
Methods         POST
*/
// http://localhost:8000/api/add-new-yoga-pose
module.exports.addNewYogaPose = async (req, res) => {

    const addNewYogaPose = await yogaModel.create(req.body);

    return res.json({
        poseAdded: addNewYogaPose,
        message: "Yoga Pose Added Successfully!!!"
    });

}


/* 
Route           /update-yoga-pose/:id
Description 	Update the specific yoga pose
Access          PUBLIC
Parameter       id
Methods         PUT
*/
// http://localhost:8000/api/update-yoga-pose/:id
module.exports.updateYogaPose = async (req, res) => {

    const { id } = req.params;

    const updateYogaPose = await yogaModel.findOneAndUpdate({ _id: id }, req.body, { new: true });

    return res.json({
        updatedBook: updateYogaPose,
        message: "Yoga Pose Updated Successfully!!!"
    });

}

/*  
Route           /delete-yoga-pose/:id
Description 	Delete the specific Yoga Pose
Access          PUBLIC
Parameter       id
Methods         DELETE
*/
// http://localhost:8000/api/delete-yoga-pose/:id
module.exports.deleteYogaPose = async (req, res) => {

    const { id } = req.params;

    const deleteYogaPose = await yogaModel.deleteOne({ _id: id });

    return res.json({

        deletedBook: deleteYogaPose,
        message: "Yoga Pose Deleted Successfully!!!"

    });
}
