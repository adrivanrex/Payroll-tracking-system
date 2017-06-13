Department = {
  "one": "Cost Center",
  "two": "Finance",
  "three": "CMO",
  "four": "COA",
  "five": "Budget",
  "six": "Remittance",
  "seven": "Accounting",
  "eight": "TORU",
  "nine": "Cashier"
  
}



file = {
  "one": {
    Department: "cmo",
    Name: "First Payroll",
    owner: "Iligan City",
    location: ["cmo","budget"],
    CostCenterCheck: true,
    FinanceCheck: false,
    CMOCheck: false,
    COACheck: false,
    BudgetCheck: false,
    RemittanceCheck: false,
    AccountingCheck: false,
    TORUCheck: false,
    CashierCheck: false,
  },
  "second":{
    Name: "Second Payroll",
    Department: "Budget",
  }
};




inputSearch = 'cmo';
if(file.one.Department == inputSearch){
  console.log(file.one);
}else{
  console.log("file does not exist");
}



