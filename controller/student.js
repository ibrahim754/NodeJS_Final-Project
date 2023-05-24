import studentModel from "../models/student.js";
import subjectModel from "../models/subject.js";

export const index = async (req, res) => {
  const students = await studentModel.find().lean()
  res.render('students/index', { students })
}

export const create = async (req, res) => {
  res.render('students/create')
};

export const store = async (req, res) => {
  const { username, password, acadimic_number } = req.body;
  try {
    await studentModel.create({
      username, password, acadimic_number: parseInt(acadimic_number)
    })
    res.redirect('/students')
  }
  catch (err) {
    console.log(err.message)
  }
}
export const save = async (req, res) => {
 console.log(req.body) ; 
 res.render("students/reg");
 
}
export const reg = (req, res) => {
   console.log("Student Loged in ");
  res.render("students/reg");


}
export const register = async (req, res) => {
  console.log("Students want to enroll new course");  
  const subjects = await subjectModel.find({},{name:1}).lean();

  res.render("students/register",{subjects});


}
export const view = async(req, res) => {
  console.log("Student want to view pervious_subjects");
   res.render("students/view");


}
export const print = async (req, res) => {
 res.render('students/enrolled'); 

}
export const show = async (req, res) => {
  console.log("show")
}