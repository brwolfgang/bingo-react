import React from "react";
import { useFormik } from "formik";

const Configuracao = ({ palavraBingo, handleChangePalavraBingo }) => {
    const formik = useFormik({
        initialValues: {
            palavra: palavraBingo
        },
        validate: (values) => {
            const errors = {};

            if (!values.palavra || !values.palavra.trim()) {
                errors.palavra = "É necessário definir uma palavra! 👀";
            } else if(values.palavra.trim().length != 5) {
                errors.palavra = "A palavra precisa ter 5 caracteres! 👀";
            }

            return errors;
        },
        onSubmit: values => {
            handleChangePalavraBingo(values.palavra)
        }
    })

    return (

        // <div className="modal" tabIndex="-1">
        //     <div className="modal-dialog">
        //         <div className="modal-content">
        //             <div className="modal-header">
        //                 <h5 className="modal-title">Modal title</h5>
        //                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        //                     <span aria-hidden="true">&times;</span>
        //                 </button>
        //             </div>
        //             <div className="modal-body">
        <form onSubmit={formik.handleSubmit}>
            <div className="form-row">
                <div className="col-12">
                    <div className="form-group text-left">
                        <label htmlFor="inputPalavraBingo">Nome do Bingo</label>
                        <input className="form-control" id="palavra" type="text" 
                        value={formik.values.palavra} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        {formik.touched.palavra && formik.errors.palavra ? <div>{formik.errors.palavra}</div> : null}
                        <small id="inputHelp" className="form-text text-muted">Palavras com 5 letras funcionam melhor 👍</small>
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="col-12">
                    <div className="form-group text-center">
                        <input type="submit" value="Salvar Palavra" className="btn btn-primary"/>
                    </div>
                </div>
            </div>
        </form>
        // </div>
        //             <div className="modal-footer">
        //                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        //                 <button type="button" className="btn btn-primary">Save changes</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>





    )
}

export default Configuracao;