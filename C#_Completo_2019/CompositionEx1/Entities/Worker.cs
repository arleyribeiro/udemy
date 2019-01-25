using System.Collections.Generic;
using CompositionEx1.Entities;
using CompositionEx1.Entities.Enums;

namespace CompositionEx1.Entities
{
    public class Worker
    {
        public string Name { get; set; }
        public WorkLevel Level { get; set; }
        public double BaseSalary { get; set; }
        public Department Department { get; set; }
        public List<HourContract> Contracts { get; set; } = new List<HourContract>();
        public Worker()
        {            
        }

        public Worker(string name, WorkLevel level, double baseSalary, Department department)
        {
            Name = name;
            Level = level;
            BaseSalary = baseSalary;
            Department = department;
        }
        public void AddContract(HourContract hourContract)
        {
            Contracts.Add(hourContract);
        }
        public void removeContract (HourContract hourContract)
        {
            Contracts.Remove(hourContract);
        }

        public double Income(int year, int month)
        {
            double income = BaseSalary;
            foreach (HourContract contract in Contracts) 
            {
                if(contract.Date.Month == month && contract.Date.Year == year)
                {
                    income += contract.TotalValue();
                }
            }
            return income;
        }
    }
}