namespace Inheritance.Entities
{
    class BusinessAccount : Account
    {
        public double LoanLimite { get; set; }

        public BusinessAccount()
        {
        }

        public BusinessAccount(int number, string holder, double balance, double loanLimit) : base(number, holder, balance)
        {
            LoanLimite = loanLimit;
        }
        public void Loan(double amount)
        {
            if(amount <= LoanLimite)
            {
                Balance += amount;
            }
        }    
    }
}