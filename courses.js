const express = require('express')
const courses = require('../Courses')
const router = express.Router()


//get all courses
router.get('/api/courses', (req, res) => {
    res.send(courses);
})
//get a specific course
router.get('/api/course/:id', (req, res) => {
    let currentCourse = checkedCourse(req.params.id);
    if(!currentCourse) return res.status(400).send('Not Found');
    res.send(currentCourse);
})
//create a course
router.post('/api/courses', (req, res) => {
  const {error} = validate(req.body);
  if(error) return res.status(400).send(error);
  let newCourse = {
      id : courses.length + 1,
      name : req.body.name

  }
  courses.push(newCourse);
  res.send(newCourse)
})
//delete course
router.delete('/api/course/:id', (req, res) => {
    let currentCourse = checkedCourse(req.params.id);
    if(!currentCourse) return res.status(400).send('Not Found');
    let index = courses.indexOf(currentCourse);
    res.send(currentCourse);
    courses.splice(index,1)
    
})

//check course with the given id
function checkedCourse(id) {
    return courses.find(c => c.id === parseInt(id));
}
//validate
function validate(course) {
    const schema = Joi.object({
        name : Joi.string().min(3).required()
    })
    return schema.validate(course)
}
module.exports = router