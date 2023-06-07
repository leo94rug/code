type InputField ={
    id:string;
    type:"text" | "date" ;
    name:string;
    required:boolean;
    defaultValue?:any;
    rows?:number;
    component: "input" | "textArea";
    label?: string;
}
export default InputField;