import React from "react";
import { Admin, Resource } from "react-admin";
import attrs from "./providers/attrs";
import data from "./providers/data";
import SimCreate from "./resources/sim/SimCreate";
import SimList from "./resources/sim/SimList";
import SimEdit from "./resources/sim/SimEdit";
import SimShow from "./resources/sim/SimShow";
import Dashboard from "./layout/dashboard/Dashboard";
import PermohonanSimTniList from "./resources/permohonan_sim_tni/PermohonanSimTniList";
import PermohonanSimTniCreate from "./resources/permohonan_sim_tni/PermohonanSimTniCreate";
import PermohonanSimTniEdit from "./resources/permohonan_sim_tni/PermohonanSimTniEdit";
import PermohonanSimTniShow from "./resources/permohonan_sim_tni/PermohonanSimTniShow";

const title = attrs.title;
const dataProvider = data;

const App = () => (
  <Admin dashboard={Dashboard} title={title} dataProvider={dataProvider}>
    <Resource
      name="sim"
      options={{ label: "SIM" }}
      list={SimList}
      create={SimCreate}
      edit={SimEdit}
      show={SimShow}
    />
    <Resource
      name="permohonan_sim_tni"
      options={{ label: "Permohonan SIM-TNI" }}
      list={PermohonanSimTniList}
      create={PermohonanSimTniCreate}
      edit={PermohonanSimTniEdit}
      show={PermohonanSimTniShow}
    />
  </Admin>
);

export default App;
