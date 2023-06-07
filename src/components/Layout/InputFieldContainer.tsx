
type Props = {
    children: React.ReactNode;
    htmlFor: string;
    title?:string;
}

const InputFieldContainer: React.FC<Props> = ({ children,htmlFor,title }) => {
    return (
        <p>
        <label htmlFor={htmlFor}>{title}</label>
        {children}
      </p> 

        
    );
}

export default InputFieldContainer;



