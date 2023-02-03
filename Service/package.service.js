const query=require('express')

const package =require('../Model/package')


//create package

exports.createPackegService=async (data)=>{
    const Package =await package.create(data)
    return Package;
}


//get package

exports.getPackageService= async (filters,query)=>{
    const Package= await package.find({})

    //const totalPackage=await Package.countDocuments(filters)
    return {Package}
}

//update Package

exports.updatePackegService= async(packageId,data)=>{

    const result= await package.updateOne(
        {
            _id:packageId
        },{
            $set:data
        },{
            runValidators:true
        })
    return result
}


//Delete Package

exports.deletePackegeService= async(packageId)=>{
    const result= await package.deleteOne(
        {
            _id: packageId

        },
        {
            runValidators:true
        }
    )

    return result
}