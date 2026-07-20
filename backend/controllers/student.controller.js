exports.getStudents = (req, res) => {
    res.json({ message: "All Students" });
};

exports.addStudent = (req, res) => {
    res.status(201).json({
        message: "Student Added Successfully",
        student: req.body
    });
};

exports.updateStudent = (req, res) => {
    res.json({
        message: "Student Updated",
        studentId: req.params.id
    });
};

exports.deleteStudent = (req, res) => {
    res.json({
        message: "Student Deleted",
        studentId: req.params.id
    });
};