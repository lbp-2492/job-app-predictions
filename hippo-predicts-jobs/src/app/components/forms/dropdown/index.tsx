import DropdownComp from './dropdown_input';

type DropdownCompProps = {
  options: string[];
  selectedOption: string;
  label: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Dropdown: React.FC<DropdownCompProps> = ({ options, selectedOption, label, handleChange }) => {
    return (
      <DropdownComp 
        options={options} 
        selectedOption={selectedOption} 
        label={label}
        handleChange={handleChange} 
      />
    );
  };
  
  export default Dropdown;