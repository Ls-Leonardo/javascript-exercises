const findTheOldest = function(people) {
    return people.reduce((oldest, current)=> {
        const currentAge = current.yearOfDeath
        ? current.yearOfDeath - current.yearOfBirth
        : new Date().getFullYear() - current.yearOfBirth;

        const oldestAge = oldest.yearOfDeath
        ? oldest.yearOfDeath - oldest.yearOfBirth
        : new Date().getFullYear() - oldest.yearOfBirth;

        // Retorna a pessoa mais velha
        return currentAge > oldestAge ? current : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
