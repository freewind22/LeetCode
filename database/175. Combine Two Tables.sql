# Write your MySQL query statement below
Select FirstName, lastName, City, State
From Person Left Join Address
On Person.PersonId = Address.PersonId
