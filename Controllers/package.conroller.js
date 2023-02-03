const { query, json } = require('express')
const { createPackegService, getPackageService, updatePackegService, deletePackegeService } = require('../Service/package.service')


// create package

exports.createPackage = async (req, res, next) => {
    try {
        const package = await createPackegService(req.body)
        const result = await package.save()
        res.status(200).json({
            status: 'success',
            message: 'data insert successfully!',
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'data insert fail',
            error: error.message
        })
    }
}

//get product

exports.getPackage = async (req, res, next) => {
    try {
        const Packege=await getPackageService()
        res.status(200).json({
            status:'success',
            message:'data get successfullt',
            data:Packege
        })

    } catch (error) {
        res.status(400).json({
            status: 'fail',
                message: 'data not found',
                    error: error.message
        })

    }

}

//update product

exports.updatePackege=async(req,res,next)=>{
    try {
        const {id}=req.params;
        const result= await updatePackegService(id,req.body);
        res.status(200).json({
            status: 'success',
            message: 'data update successfully',
            data: result
        })
        
    } catch (error) {

        res.status(400).json({
            status:'fail',
            message:'data update fail',
            error:error.message
        })
        
    }
}

// delete package

exports.deletePackage=async(req,res,next)=>{
    try {
        const {id}=req.params;
        const result=await deletePackegeService(id,req.body);
        res.status(200).json({
            status:'success',
            message:'data deleted successfully',
           data:result
        })
        
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:'data delete fail',
            error:error.message
        })
    }
}