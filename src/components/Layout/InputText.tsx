import useInput from "../../hooks/UseInput";
import InputField from "../../models/types/InputField";
import './InputText.module.css';

type Props = {
    id: string;
    type: string;
    name: string;
    required: boolean;
    value: string;
    hasError:boolean;
    onBlur: (value:any) => void;
    onChange: (value:any) => void;
    label: string;
}

const InputText: React.FC<Props> = ({     id,
    type,
    name,
    required,
    value,
    hasError,
    onBlur,
    onChange,
    label }) => {


    const nameInputClasses = hasError
        ? 'form-control invalid'
        : 'form-control';
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <div className={nameInputClasses}>
                <input
                    id={id}
                    type={type}
                    name={name}
                    required={required}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                />
                {hasError && (
                    <p className='error-text'>{label} must not be empty.</p>
                )}
            </div>
        </p>
    );
}

export default InputText;



