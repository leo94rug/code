import InputField from "../../models/types/InputField";

type Props = {
    inputField: InputField;
}

const TextArea: React.FC<Props> = ({ inputField }) => {
    return (
        <textarea
            id={inputField.id}
            name={inputField.name}
            required={inputField.required}
            rows={inputField.rows ? inputField.rows : 5}
            defaultValue={inputField.defaultValue ? inputField.defaultValue : ''}
        />

    );
}

export default TextArea;



