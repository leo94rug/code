interface GenericError {
    message?: string;
    errors?: { [key: string]: string };
    // Altre proprietà se presenti nella risposta del server
  }
  export default GenericError;