import RadioComp from './radio_input';

type RadioCompProps = {
  label: string;
};

const Radio: React.FC<RadioCompProps> = ({ label }) => {
    return (
      <RadioComp 
        label={label}
      />
    );
  };
  
  export default Radio;