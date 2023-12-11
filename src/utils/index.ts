import { CityData } from "@/types/hero";
import _ from "lodash";

const labelsTypesLocations: any = {
  city: "Ciudad",
  airport: "Aeropuerto",
  terminal: "Terminal",
};

export const filterLocations: any = (response: {
  payload: { data?: CityData[] | undefined };
}) => {
  const options = response?.payload?.data?.map((item: CityData) => ({
    ...item,
    value: item.id,
    label: item.display,
  }));

  const groupedData = _.groupBy(options, "result_type");

  const result = _.map(groupedData, (options, label) => ({
    label: labelsTypesLocations[label],
    options: options.slice(0, 3),
  }));

  return result;
};
