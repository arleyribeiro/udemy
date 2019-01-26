using System;
using Inheritance.Entities;

namespace Inheritance
{
    class Program
    {
        static void Main(string[] args)
        {
            Account acc = new Account(1001, "Alex", 0.0);
            BusinessAccount bacc = new BusinessAccount(1002, "Maria", 0.0, 500.0);

            //upcasting
            Account acc1 = bacc;

            //downcasting is an operation insecurity 
            if(acc is BusinessAccount)
            {
                //BusinessAccount baac1 = (BusinessAccount)acc;                
                BusinessAccount baac1 = acc as BusinessAccount;
            }
        }
    }
}
