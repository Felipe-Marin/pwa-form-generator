export interface FormRequest {
    id: string;
    date: number;
    form: Object;
    status: FormRequestStatus;
}

export enum FormRequestStatus {
    pending,
    sended
}
