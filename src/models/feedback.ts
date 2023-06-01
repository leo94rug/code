class Feedback {
    id: string;
    title: string;
    date: string;
    description: string;
  
    constructor(title: string,date: string,description: string,id: string) {
        this.title = title;
        this.date = date;
        this.description = description;
        this.id = id;
    }
  }
  
  export default Feedback;