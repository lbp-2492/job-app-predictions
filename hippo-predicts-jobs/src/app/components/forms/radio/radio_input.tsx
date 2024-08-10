type RadioCompProps = {
    label: string;
};

const RadioComp: React.FC<RadioCompProps> = ({ label }) => {
    return (
        <div className="flex items-center space-x-4">
            <label className=""> {label}</label>
  
            <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-1">
                    <input className="form-radio" type="radio" name="response" value="yes" required />
                    <span>Yes</span>
                </label>
                <label className="flex items-center space-x-1">
                    <input className="form-radio" type="radio" name="response" value="no" required />
                    <span>No</span>
                </label>
            </div>
        </div>
    );
  };
  
  export default RadioComp;