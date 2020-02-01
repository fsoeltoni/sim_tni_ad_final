import React from "react";
import { Admin, Resource } from "react-admin";
import attrs from "./providers/attrs";
import data from "./providers/data";
import SimCreate from "./resources/sim/SimCreate";
import SimList from "./resources/sim/SimList";
import SimEdit from "./resources/sim/SimEdit";
import SimShow from "./resources/sim/SimShow";

const title = attrs.title;
const dataProvider = data;

const App = () => (
  <Admin title={title} dataProvider={dataProvider}>
    <Resource
      name="sim"
      options={{ label: "SIM" }}
      list={SimList}
      create={SimCreate}
      edit={SimEdit}
      show={SimShow}
    />
  </Admin>
);

export default App;
