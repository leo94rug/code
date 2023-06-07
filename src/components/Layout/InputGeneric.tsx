import InputField from "../../models/types/InputField";
import TextArea from "./TextArea";
import InputText from "./InputText";

type Props = {
    inputField: InputField;
}

const InputFieldGeneric: React.FC<Props> = ({ inputField }) => {
    return (
        {
            'input': <InputText  inputField={inputField}/>,
            'textArea': <TextArea  inputField={inputField}/>
          }[inputField.component]

    );
}

export default InputFieldGeneric;



