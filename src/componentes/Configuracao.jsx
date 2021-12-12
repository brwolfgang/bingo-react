import React from "react";

const Configuracao = ({palavraBingo, handleChangePalavraBingo}) => {
    return (
        <div className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-row">
                            <div className="col-12">
                                <div className="form-group text-left">
                                    <label htmlFor="inputPalavraBingo">Nome do Bingo</label>
                                    <input className="form-control" id="inputPalavraBingo" type="text" value={palavraBingo} onChange={(e) => handleChangePalavraBingo(e.target.value)} />
                                    <small id="inputHelp" className="form-text text-muted">Palavras com 5 letras funcionam melhor 👍</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default Configuracao;