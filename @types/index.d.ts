declare interface JobInfoType {
  id: string;
  company: string;
  company_logo: string;
  company_url: string;
  created_at: string;
  description: string;
  how_to_apply: string;
  location: string;
  title: string;
  type: string;
  url: string;
}

declare interface StoreType {
  isRequestingJobs: boolean;
  jobsInfoList: JobInfoType[];
  jobInfo: JobInfoType;
}

declare interface ActionType {
  type: string;
  requestUrl?: string;
  isRequestingJobs?: boolean;
  jobsInfoList?: JobInfoType[];
  jobInfo?: JobInfoType;
  jobId?: string;
}

declare type DispatchType = (obj: ActionType) => ActionType;
