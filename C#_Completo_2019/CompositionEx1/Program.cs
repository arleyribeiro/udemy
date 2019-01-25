using System;
using System.Globalization;
using CompositionEx1.Entities;
using CompositionEx1.Entities.Enums;

namespace CompositionEx1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter department's name: ");
            string dptName = Console.ReadLine();
            Console.WriteLine("Enter worker data: ");
            Console.Write("Name: ");
            string name = Console.ReadLine();
            Console.Write("Level (Junior/MidleLevel/Senior): ");
            WorkLevel level = Enum.Parse<WorkLevel>(Console.ReadLine());
            Console.Write("Base Salary: ");
            double baseSalary = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            
            Department dept = new Department(dptName);
            Worker worker = new Worker(name, level, baseSalary, dept);

            Console.Write("How many contracts to this worker? ");
            int n = int.Parse(Console.ReadLine());
            for(int i=1; i<=n; i++) {
                Console.WriteLine($"Enter #{i} contract data:");
                Console.Write("Date (DD/MM/YYYY): ");
                DateTime date = DateTime.Parse(Console.ReadLine());
                Console.Write("Value per hour: ");
                double valueHour = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
                Console.Write("Duration (hours): ");
                int hours = int.Parse(Console.ReadLine());

                worker.Contracts.Add(new HourContract(date, valueHour, hours));
            }

            Console.Write("Enter month and year to calculate income (MM/YYYY): ");
            string dateToCalculate = Console.ReadLine();
            int month = int.Parse(dateToCalculate.Substring(0,2));
            int year = int.Parse(dateToCalculate.Substring(3));
            Console.WriteLine($"Name: { worker.Name }");
            Console.WriteLine($"Department: { worker.Department.Name }");
            Console.WriteLine($"Income for { dateToCalculate }: { worker.Income(year, month).ToString("F2", CultureInfo.InvariantCulture) }");

        }
    }
}
