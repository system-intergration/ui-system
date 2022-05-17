export interface StatisticVacation {
  Employee_ID: number;
  Employment_Status: string;
  Hire_Date?: any;
  Workers_Comp_Code?: any;
  Termination_Date?: any;
  Rehire_Date?: any;
  Last_Review_Date?: any;
  Employee_Number: number;
  idEmployee: number;
  Last_Name: string;
  First_Name: string;
  SSN: string;
  Pay_Rate: string;
  PayRates_id: number;
  Vacation_Days: number;
  Paid_To_Date?: string;
  Paid_Last_Year?: string;
}

export interface ResponseVacation {
  dat: StatisticVacation[];
}

interface InfoEmployeeAdd {
  idEmployee: number;
  First_Name: string;
  Last_Name: string;
  SSN: number;
  City: string;
  Shareholder_Status: boolean;
  Gender: boolean;
  Department: string;
}

interface Pay_Rate {
  idPay_Rates: number;
  Pay_Rate_Name: string;
  Value: string;
  Tax_Percentage: string;
  Pay_Type: number;
  Pay_Amount: string;
  PT_Level_C: string;
}

interface ResponsePay_Rate {
  data: Pay_Rate[];
}
