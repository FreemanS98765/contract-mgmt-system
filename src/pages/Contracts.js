import ContractList from '../components/contracts/ContractList'
import { CONTRACT_DATA } from '../data/data.js';

const Contracts = () => {
  return (
    <ContractList contracts={CONTRACT_DATA} />
  );
};

export default Contracts;
