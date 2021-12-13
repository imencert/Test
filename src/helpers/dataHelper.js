export function configData(data) {
  if (typeof data === "object" && data) {
    const { country, id, industry, name, region } = data[0].response.entity;
    const creditRiskArray = data[0].response.data;

    const mostRecentDate = creditRiskArray.reduce((acc, value) => {
      if (acc > value.date) return acc;
      else return value.date;
    }, creditRiskArray[0]);

    const mostRecentMonthData = creditRiskArray.find(
      value => value.date === mostRecentDate
    );

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    const returnFormattedDate = date => {
      const stringDate = date.toString();
      const isoDate =
        stringDate.substr(0, 4) +
        "-" +
        stringDate.substr(4, 2) +
        "-" +
        stringDate.substr(6, 2);
      const dateObject = new Date(isoDate);
      const month = months[dateObject.getMonth()];
      const year = dateObject
        .getFullYear()
        .toString()
        .substr(2, 2);
      const formattedDate = month + " " + year;

      return formattedDate;
    };

    const creditRiskData = creditRiskArray
      .filter(risk => risk.PD)
      .map(risk => {
        const filteredRisk = {
          date: returnFormattedDate(risk.date),
          PD: risk.PD,
          Rating: risk.Rating,
          PDContributionCount: risk.PDContributionCount,
          PDMedianProxyBps: risk.PDMedianProxyBps,
          LGD: risk.LGD,
          LGDContributionCount: risk.LGDContributionCount
        };
        return filteredRisk;
      });

    const reversedCreditRiskData = [...creditRiskData].reverse();

    const {
      PD,
      PDMedianProxyBps,
      Rating,
      PDContributionCount,
      SP
    } = mostRecentMonthData;

    const companySectionData = [
      { id: 1, label: "Company", content: name },
      { id: 2, label: "ID", content: id },
      { id: 3, label: "Industry", content: industry },
      { id: 4, label: "Country", content: country },
      { id: 5, label: "Region", content: region },
      { id: 6, label: "PD", content: PD },
      { id: 7, label: "PD Median Proxy Bps", content: PDMedianProxyBps },
      { id: 8, label: "Rating", content: Rating },
      { id: 9, label: "PD Contribution Count", content: PDContributionCount },
      { id: 10, label: "SP", content: SP }
    ];

    const tableHeaderData = [
      "Month",
      "Rating",
      "PD Contribution Count",
      "PD Median Proxy Bps",
      "LGD Contribution Count",
      "LGD",
      "LGD Contribution Count"
    ];

    const appData = {
      lineChartData: reversedCreditRiskData,
      companySectionData: companySectionData,
      tableData: {
        tableHeaderData: tableHeaderData,
        tableRowsData: creditRiskData
      }
    };

    return appData;
  }
}
