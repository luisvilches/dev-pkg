const Pkg = require('.././models/pkg');


exports.pkgFind = (req,res,next) => {
    // funcion para buscar los registros
    Pkg.find((err,response) => {
        if(err) {
            res.status(500).json({
                state: 'error',
                message: err
            })
        }else{
            res.status(200).json({
                state: 'success',
                message: 'Operacion exitosa',
                data: response
            })
        }
    })

}
exports.pkgFindById = (req,res) => {
	// funcion para buscar un registros por id
    Pkg.findById({_id: req.params.id},(err,response) => {
        if(err) {
            res.status(500).json({
                state: 'error',
                message: err
            })
        }else{
            res.status(200).json({
                state: 'success',
                message: 'Operacion exitosa',
                data: response
            })
        }
    })
}
exports.pkg = (req,res) => {
	// funcion para buscar un registros por id
    Pkg.findOne({name: req.params.pkg},(err,response) => {
        if(err) {
            res.status(500).json({
                state: 'error',
                message: err
            })
        }else{
            res.status(200).json({
               response
            })
        }
    })
}
exports.pkgCreate = (req,res) => {
	// funcion para crear registros
    let data = new Pkg({
        name: req.body.name,
        description: req.body.description,
        wget:req.body.wget,
        script1: req.body.script1,
        script2: req.body.script2,
        script3: req.body.script3,
        script4: req.body.script4,
        script5: req.body.script5,
        version: req.body.version,
        date: new Date()
    })

    data.save((err,response) => {
        if(err) {
            res.status(500).json({
                state: 'error',
                message: err
            })
        }else{
            res.status(200).json({
                state: 'success',
                message: 'Operacion exitosa',
                data: response
            })
        }
    })
}
exports.pkgUpdate = (req,res) => {
	// funcion para actualizar registros

    let data = new Pkg({
        _id: req.params.id,
        name: req.body.name,
        description: req.body.description,
        wget:req.body.wget,
        script1: req.body.script1,
        script2: req.body.script2,
        script3: req.body.script3,
        script4: req.body.script4,
        script5: req.body.script5,
        version: req.body.version,
        date: new Date()
    })

    Pkg.update({name:req.params.id},data,(err,response) => {
        if(err) {
            res.status(500).json({
                state: 'error',
                message: err
            })
        }else{
            res.status(200).json({
                state: 'success',
                message: 'Operacion exitosa',
                data: response
            })
        }
    })

}
exports.pkgDelete = (req,res) => {
	// escribe tu funcion para eliminar registros
     Pkg.remove({_id:req.params.id},(err,response) => {
        if(err) {
            res.status(500).json({
                state: 'error',
                message: err
            })
        }else{
            res.status(200).json({
                state: 'success',
                message: 'Operacion exitosa',
                data: response
            })
        }
    })
}
