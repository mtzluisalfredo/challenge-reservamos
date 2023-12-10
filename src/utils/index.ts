import _ from "lodash";

const labelsTypesLocations: any = {
  city: "Ciudad",
  airport: "Aeropuerto",
  terminal: "Terminal",
};

export const filterLocations = (response: {
  payload: { data: { display: any }[] };
}) => {
  const options = response.payload.data.map((item: { display: any }) => ({
    ...item,
    value: item,
    label: item.display,
  }));

  const groupedData = _.groupBy(options, "result_type");

  const result = _.map(groupedData, (options, label) => ({
    label: labelsTypesLocations[label],
    options: options.slice(0, 3),
  }));

  return result;
};
