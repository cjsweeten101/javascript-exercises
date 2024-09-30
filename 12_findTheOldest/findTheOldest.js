const findTheOldest = function(people) {
   return people.reduce( (currentOldest, currentPerson) => {
        let ageCurrent = calculateAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        let ageOldest = calculateAge(currentOldest.yearOfBirth, currentOldest.yearOfDeath);
    
        
        return ageCurrent > ageOldest ?  currentPerson :  currentOldest;
    }, people[0]);
};

function calculateAge(birthYear, deathYear) {
   return deathYear ? deathYear - birthYear : new Date().getFullYear() - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
