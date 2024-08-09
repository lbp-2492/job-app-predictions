type RadioCompProps = {
    label: string;
};

const RadioComp: React.FC<RadioCompProps> = ({ label }) => {
    return (
        <div className="">
            <label className="label-top">{label}</label>
            <div className="radio-buttons">
                <input className="" type="radio" name="response" value="yes" required></input>
                <span className="radio-spacing">Yes</span>
                <input className="" type="radio" name="response" value="no" required></input>
                <span className="radio-spacing">No</span>
            </div>
            <br />
        </div>
    );
  };
  
  export default RadioComp;