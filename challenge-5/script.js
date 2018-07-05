/**CODING CHALLENGE - 5
Suppose you are working in a small town administration and 
in charge of two town elements: 
1.  Parks 
2.  Streets

Currently, there are 3 Parks and 4 streets.
All parks and streets have a name and build year.

The boss needs final report as:
1.  Tree density of each park (no. of trees / park area)
2.  Average age of town's park (Sum of ages / no of parks)
3.  Name of park that has more than thousand trees
4.  Average length of the town's streets
5.  Size classification of all streets:
    tiny / small / normal / big / huge, default is normal

*/
class Park {
    constructor(name, buildYear, trees, area) {
        this.name = name;
        this.buildYear = buildYear;
        this.trees = trees;
        this.area = area;
    }
    getAge() {
        return new Date().getFullYear() - this.buildYear;
    }
    getDensity() {
        return this.trees / this.area;
    }
    printDetails() {
        console.log(`${this.name} has a tree density of ${this.getDensity()} trees per sq km`);
    }
}

class Street {
    constructor(name, buildYear, length, size = 'normal') {
        this.name = name;
        this.buildYear = buildYear;
        this.length = length;
        this.size = size;
    }
    getLength() {
        return this.length;
    }
    printDetails() {
        console.log(`${this.name}, built in ${this.buildYear} is a ${this.size} street.`);
    }
}

{
    const parks = [
        new Park('Green Park', 1950, 8700, 150),
        new Park('National Park', 1857, 4725, 250),
        new Park('Melghat Sanctuary', 1908, 6100, 100)
    ];

    const streets = [
        new Street('Main Road', 1920, 25),
        new Street('Ring Road', 2005, 35, 'big'),
        new Street('Gandhi Street', 1960, 15, 'small'),
        new Street('Market Street', 1982, 10, 'tiny')
    ];

    function averageParkAge(parks) {
        let sum = 0;
        if (parks.length > 0) {
            parks.forEach(
                park => sum += park.getAge()
            );
            return sum / parks.length;
        } else {
            return -1;
        }
    }

    function averageStrretLength(streets) {
        let sum = 0;
        if (streets.length > 0) {
            streets.forEach(
                street => sum += street.getLength()
            );
            return [sum, sum / streets.length];
        } else {
            return [sum, -1];
        }
    }

    function finalReport(parks, streets) {
        console.log(`--------PARKS REPORT--------`);
        console.log(`Our ${parks.length} parks have an average age of ${averageParkAge(parks)} years`);
        for (const park of parks) {
            park.printDetails();
        }
        const bigParks = parks.map(el => {
            if (el.trees > 1000) {
                return el.name;
            }
        });
        console.log(bigParks + ' have more than 1000 trees');

        console.log(`-------STREETS REPORT-------`);
        const [totalLength, avgLength] = averageStrretLength(streets);
        console.log(
            `Our ${streets.length} streets have a total length of ${totalLength} km, 
            with an average of ${avgLength} km`
        );
        for (const street of streets) {
            street.printDetails();
        }
    }
    finalReport(parks, streets);
}