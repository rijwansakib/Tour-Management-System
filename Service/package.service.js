const query=require('express')

const package =require('../Model/package')


//create package

exports.createPackegService=async (data)=>{
    const Package =await package.create(data)
    return Package;
}


//get package

exports.getPackageService= async (filters,queries)=>{
    const Package= await package.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy)

   const totalPackage = await package.countDocuments(filters)
    return {Package,totalPackage}
}

//get single package

exports.getPackageServiceById = async (packageId) => {

    const result = await package.findById( packageId)

    return result
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