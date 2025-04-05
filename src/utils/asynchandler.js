const asyncHandler=(requestHandler)=>{
    (req,res,nest)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next)
    }
}



export {asyncHandler}

// const asyncHandler = () => {}
// const asyncHandler = (func) =>()=> {}
// const asyncHandler = (func) => async()=>{}


// const asyncHandler=(fn)=>async(req,res,next)=>{
//     try {
//         await fn(req,res,next)
        
//     } catch (error) {
//         res.status(error.code||500).json({
//           success:false ,
//           message:err.message

//         })
        
//     }

// }