const express=require('express')
const router=express.Router()

const packageController=require('../Controllers/package.conroller')

router.route('/')
    .get(packageController.getPackage)
    .post(packageController.createPackage)
router.route('/:id')
    .patch(packageController.updatePackege)
    .delete(packageController.deletePackage)

module.exports=router