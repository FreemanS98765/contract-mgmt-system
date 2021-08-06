import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

const ContractSingle = () => {
    const params = useParams();

    console.log(params.contractId);

    return (
        <Fragment>
            <h1>Contract Details</h1>
            <p>{params.contractId}</p>
        </Fragment>
    )
}

export default ContractSingle;