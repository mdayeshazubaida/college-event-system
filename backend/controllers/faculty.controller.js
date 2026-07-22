let faculty = [];

exports.getFaculty = (req, res) => {
    res.json(faculty);
};

exports.addFaculty = (req, res) => {
    faculty.push(req.body);
    res.json({
        message: "Faculty added successfully",
        data: faculty
    });
};

exports.updateFaculty = (req, res) => {
    const id = req.params.id;

    if (faculty[id]) {
        faculty[id] = req.body;
        res.json({
            message: "Faculty updated successfully",
            data: faculty
        });
    } else {
        res.status(404).json({
            message: "Faculty not found"
        });
    }
};

exports.deleteFaculty = (req, res) => {
    const id = req.params.id;

    if (faculty[id]) {
        faculty.splice(id, 1);
        res.json({
            message: "Faculty deleted successfully",
            data: faculty
        });
    } else {
        res.status(404).json({
            message: "Faculty not found"
        });
    }
};