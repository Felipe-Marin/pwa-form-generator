export interface FormRequest {
    formId: string;
    date: number;
    form: Object;
    status: FormRequestStatus;
}

export enum FormRequestStatus {
    pending,
    sended
}
