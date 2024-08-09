type DropdownCompProps = {
    options: string[];
    selectedOption: string;
    label: string;
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const DropdownComp: React.FC<DropdownCompProps> = ({ options, selectedOption, label, handleChange }) => {
    return (
      <div className="">
        <select 
            className="h-11 bg-slate-900 rounded-lg text-white p-2 w-1/5" 
            name="option" 
            value={selectedOption} 
            onChange={handleChange} 
            required
          >
            <option value="" disabled>{label}</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
      </div>
    );
  };
  
  export default DropdownComp;