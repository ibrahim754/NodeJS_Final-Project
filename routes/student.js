import { Router } from "express";
import { index, create, store, show, reg , register, print, view , save } from '../controller/student.js'


const router = new Router();
router.get('/', index); // show all the students

router.get('/create', create); // get form 

router.post('/reg', save );
router.get('/reg', reg );
 

router.get('/register', register);

router.get('/print', print);

router.get('/view', view);

router.post('/', store); // post data to db

router.get('/:id', show); // get details of the student

export default router;