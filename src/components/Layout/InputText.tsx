import InputField from "../../models/types/InputField";

type Props = {
    inputField: InputField;
}

const InputText: React.FC<Props> = ({ inputField }) => {
    return (
        <input
            id={inputField.id}
            type={inputField.type}
            name={inputField.name}
            required={inputField.required}
            defaultValue={inputField.defaultValue ? inputField.defaultValue : ''}
        />

    );
}

export default InputText;



