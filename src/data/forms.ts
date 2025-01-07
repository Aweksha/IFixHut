

export interface UserInfo {
    name: string;
    email: string;
    phone: string;
}

export interface BaseFormData extends UserInfo {
    budget: string;
    comments: string;
}

export interface GamingPCFormData extends BaseFormData {
    useCase: string;
    processor: string;
    gpu: string;
    ram: string;
    customRam?: string;
    storageType: string;
    liquidCooling: boolean;
    caseDesign: string;
}

export interface WorkstationFormData extends BaseFormData {
    processor: string;
    ram: string;
    storageType: string;
    purpose: string;
}

export interface HomeOfficeFormData extends BaseFormData {
    usage: string;
    storage: string;
    monitor: boolean;
}

export interface FormProps {
    step: number;
    onNext: () => void;
    onBack: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit?: (data: any) => void;
}