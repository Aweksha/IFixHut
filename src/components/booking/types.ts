export type ServiceCategory = 
  | 'iphone-cellphone'
  | 'ipad-tablet'
  | 'laptop'
  | 'computer'
  | 'pc-network'
  | 'other';

export interface FormData {
  serviceCategory: string;
  deviceModel: string;
  issueType: string;
  issueDescription: string;
  urgentService: boolean;
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  attachments: File[];
}