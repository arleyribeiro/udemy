namespace Inheritance.Entities
{
    class Account
    {
        public int Number { get; private set; }
        public string Holder { get; private set; }
        public double Balance { get; protected set; }

        public Account()
        {            
        }

        public Account(int number, string holder, double balance)
        {
            Number = number;
            Holder = holder;
            Balance = balance;
        }

        public void WithDraw(double amount)
        {

        }

        public void Deposit(double amount)
        {
            Balance += amount;
        }
    }
}