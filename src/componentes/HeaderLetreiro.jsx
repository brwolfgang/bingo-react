import React from "react";

const HeaderLetreiro = (props) => {
    return (
        <div className="col-2">
            <div className="form-group">
                <dt>Letra</dt>
                <dd>{props.letra.toUpperCase()}</dd>
            </div>
        </div>
    )
}

export default HeaderLetreiro;