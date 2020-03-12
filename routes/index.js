const router = require('express').Router();

const students = [
    {
        name: "Yvette Klu",
        DOB: "12/20/2000",
        program: "BSC CS",
        level: "200",
        image:"/images/img1.jpg"
    },
    {
        name: "Derrick Anum Mensah",
        DOB: "12/20/2000",
        program: "BSC CS",
        level: "200",
        image:"/images/img2.jpg"
    },
    {
        name: "Eugene Plait",
        DOB: "12/20/2000",
        program: "BSC CS",
        level: "200",
        image:"/images/img3.jpg"
    },
    {
        name: "Asante Philemon",
        DOB: "12/20/2000",
        program: "BSC CS",
        level: "200",
        image:"/images/img4.jpg"
    },
    {
        name: "Dominic Bluawofogbe",
        DOB: "12/20/2000",
        program: "BSC CS",
        level: "200",
        image:"/images/img5.jpg"
    }
]


router.get('/', (req, res)=>{
    res.render('home', {
        title:'Home',
        students
    })
});

router.get('/student/:id', (req, res)=>{
    const id = req.params.id;
    const student = students[id];
    res.render('student', {
        title: students[id].name,
        student
    })
});

module.exports = router;