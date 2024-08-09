type InputCompProps = {
    type: string;
    label: string;
};

const InputComp: React.FC<InputCompProps> = ({ type, label }) => {
    return (
        <InputComp 
            type={type} 
            label={label}
        />
    );
  };
  
  export default InputComp;