This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run project:

- install dependencies: `npm i`
- run local webserver: `npm start`

## Tasks

`src/data.json` contains data about a company and its credit risk data as a time series over 11 months.

### 1. Plot time series on line chart

For the company in data.json, plot the PD and LGD values (one or the other, not both at the same time) on a line chart

- use the charting library of your choice
- when charting the PD, the graph needs to be plotted by the PD value, but the label for each point needs to be the Rating
- when charting the LGD, the graph needs to be plotted by the LGD value and the label for each point needs to be the LGD
- use a button or control to flip between PD/LGD charting
- Y axis range/labels: charting by PD: empty labels, charting by LGD: 0 - 100 range
- X axis: dates (format: "Mar 19")

### 2. Add an info box next to the chart

Display the reference data for this company in a div to the right of the chart

- include: name, id, industry, country and region
- by default, also include the most recent PD, PDMedianProxyBps, Rating, PDContributionCount and SP data. Regardless of the charting value (PD/LGD)

#### BONUS
- when the user hovers over data points on the graph, update the PD, PDMedianProxyBps, Rating, PDContributionCount and SP data for the active month, regardless of the charting value (PD/LGD)

### 3. Show the data in a table below

In a table below the chart and info box, display the time series points for each month with their respective

- PD,
- Rating,
- PDContributionCount,
- PDMedianProxyBps,
- LGD,
- LGDContributionCount

values.
