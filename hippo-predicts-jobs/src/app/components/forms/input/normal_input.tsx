type InputCompProps = {
    type: string;
    label: string;
};

const InputComp: React.FC<InputCompProps> = ({ type, label }) => {
    return (
        <input className="h-11 bg-slate-900 rounded-lg text-white p-2 w-1/5" type={type} placeholder={label} required />
    );
  };
  
  export default InputComp;