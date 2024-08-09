import InputComp from './normal_input';

type InputCompProps = {
    type: string;
    label: string;
};

const Inputs: React.FC<InputCompProps> = ({ type, label }) => {
    return (
      <InputComp 
        type={type}
        label={label}
      />
    );
  };
  
  export default Inputs;