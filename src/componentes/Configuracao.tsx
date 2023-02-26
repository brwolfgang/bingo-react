import * as React from 'react';
import {useFormik, FormikErrors} from "formik";
import {ConfiguracaoProps} from "../types";

const Configuracao = ({palavraBingo, handleChangePalavraBingo}: ConfiguracaoProps) => {
    const formik = useFormik({
        initialValues: {
            palavra: palavraBingo
        },
        validate: (values) => {
            const errors: FormikErrors<any> = {};

            if (!values.palavra || !values.palavra.trim()) {
                errors.palavra = "É necessário definir uma palavra! 👀";
            } else if (values.palavra.trim().length !== 5) {
                errors.palavra = "A palavra precisa ter 5 caracteres! 👀";
            }

            return errors;
        },
        onSubmit: values => {
            handleChangePalavraBingo(values.palavra)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}
              className="flex flex-col items-start flex-auto bg-gray-300 rounded-md m-2 px-2 py-1 md:w-1/2 w-3/4">
            <h1 className="text-left text-2xl self-stretch">Configurações</h1>

            <label htmlFor="inputPalavraBingo" className="text">Nome do Bingo</label>
            <input id="palavra" type="text"
                   className="bg-gray-100 rounded-md px-1" {...formik.getFieldProps('palavra')}/>
            {formik.touched.palavra && formik.errors.palavra ? <div>{formik.errors.palavra}</div> : null}
            <input type="submit" value="Salvar Palavra" className="bg-green-600 text-white py-1 px-2 rounded-md mt-2 mb-2"/>
        </form>
    )
}

export default Configuracao;