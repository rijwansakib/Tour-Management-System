const { query, json } = require('express')
const { countDocuments } = require('../Model/package')
const packege = require('../Model/package')
const { post } = require('../Route/package.route')
const { createPackegService, getPackageService, updatePackegService, deletePackegeService, getPackageServiceById, getTrandingService, getCheapestService } = require('../Service/package.service')

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

//get packege

exports.getPackage = async (req, res, next) => {
    try {


        let filters = { ...req.query };
        const excludeFields = ['sort', 'page', 'limit']
        excludeFields.forEach(field => delete filters[field])

        let filtersSrting = JSON.stringify(filters)
        filtersSrting = filtersSrting.replace(/\b(gt|gte|lt|lte|in|elemMatch|eq)\b/g, (match) => `$${match}`);
        filters = JSON.parse(filtersSrting)



        //sort
        const queries = {}
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ')
            queries.sortBy = sortBy
        }
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ')
            queries.fields = fields
        }

        //pagination
        if (req.query.page) {
            const { page = 1, limit = 10 } = req.query;
            const skip = (page - 1) * parseInt(limit)
            queries.skip = skip;
            queries.limit = parseInt(limit)
        }




        const Packege = await getPackageService(filters, queries)
        res.status(200).json({
            status: 'success',
            message: 'data get successfully',
            data: Packege
        })

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'data not found',
            error: error.message
        })

    }

}


//get single package
exports.getPackageOne = async (req, res, next) => {

        try {

            const { id} = req.params
            const result = await getPackageServiceById(id, req.body);
           
            result.result.viewCount+=1
            await result.result.save() 
            res.status(200).json({
                status: 'success',
                message: 'data found successfully',
                data: { result}

            })


        } catch (error) {
            res.status(400).json({
                status: 'fail',
                message: 'data not found',
                error: error.message

            })
        }
}
//update packege

exports.updatePackege = async (req, res, next) => {
    try {


        const { id } = req.params;
        const result = await updatePackegService(id, req.body);
        res.status(200).json({
            status: 'success',
            message: 'data update successfully',
            data: result
        })

    } catch (error) {

        res.status(400).json({
            status: 'fail',
            message: 'data update fail',
            error: error.message
        })

    }
}

// delete package

exports.deletePackage = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await deletePackegeService(id, req.body);
        res.status(200).json({
            status: 'success',
            message: 'data deleted successfully',
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'data delete fail',
            error: error.message
        })
    }
}


//tranding package

exports.trandingPackage=async(req,res,next)=>{
    try {
        const {id}=req.params
        const result= await getTrandingService(id,req.body)
        
        
        res.status(200).json({
            status:'success',
            message:'tranding package found successfully',
            data:result

        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:'tranding data not found',
            error:error.message
        })
        
    }

}
//cheapest package

exports.cheapestPackage=async(req,res,next)=>{
    try {
        const{id}=req.params
        const result=await getCheapestService(id,req.body)

        res.status(200).json({
            status: 'success',
            message: 'cheapest package found successfully',
            data: result

        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'cheapest data not found',
            error: error.message
        })

    }

}