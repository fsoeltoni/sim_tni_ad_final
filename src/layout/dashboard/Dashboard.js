import React, { useState, useCallback, useEffect } from "react";
import { useDataProvider } from "react-admin";
import moment from "moment";

const Dashboard = () => {
  const [state, setState] = useState({});
  const dataProvider = useDataProvider();

  const fetchSim = useCallback(async () => {
    const { data: allSim } = await dataProvider.getList("sim", {
      sort: { field: "created", order: "DESC" },
      pagination: { page: 1, perPage: 50000000 }
    });

    const aggregations = allSim
      .filter(
        sim => moment(sim.created).format("YYYY") === moment().format("YYYY")
      )
      .reduce(
        (stats, sim) => {
          stats.simThnIni.push(sim);

          if (moment(sim.created).format("M") === moment().format("M")) {
            stats.simBlnIni.push(sim);
          }

          return stats;
        },
        {
          simThnIni: [],
          simBlnIni: []
        }
      );

    setState(state => ({
      ...state,
      simThnIni: aggregations.simThnIni,
      simBlnIni: aggregations.simBlnIni
    }));
  }, [dataProvider]);

  useEffect(() => {
    fetchSim();
  }, []);

  return null;
};

export default Dashboard;
