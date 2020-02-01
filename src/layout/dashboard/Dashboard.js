import React, { useState, useCallback, useEffect } from "react";
import { useDataProvider } from "react-admin";

const Dashboard = () => {
  const [state, setState] = useState({});
  const dataProvider = useDataProvider();

  const fetchSim = useCallback(async () => {
    const { data: allSim } = await dataProvider.getList("sim", {
      sort: { field: "created", order: "DESC" },
      pagination: { page: 1, perPage: 50000000 }
    });

    setState(state => ({
      ...state,
      allSim
    }));
  }, [dataProvider]);

  useEffect(() => {
    fetchSim();
  }, []);

  return null;
};

export default Dashboard;
