// Function to generate a random number within a specified range
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to generate a dataset for a given number of days
function generateDataset(startDate, days) {
    const dataset = [];
    let currentTime = startDate;

    for (let i = 0; i < days; i++) {
        const dataPoint = {
            open: getRandom(12100, 12700),
            high: getRandom(12300, 12900),
            low: getRandom(12000, 12700),
            close: getRandom(12300, 12700),
            time: currentTime
        };

        dataset.push(dataPoint);

        // Incrementing time by 1 day (86400 seconds)
        currentTime += 86400;
    }

    return dataset;
}

const startDate = 1672371900; // Replace this with your desired start timestamp
const days = 90; // Number of days in 3 months

const generatedData = generateDataset(startDate, days);
console.log(generatedData);
