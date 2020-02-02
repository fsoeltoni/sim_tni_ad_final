import React from "react";
import {
  List,
  Datagrid,
  DateField,
  ReferenceField,
  TextField,
  EditButton,
  ShowButton,
  DeleteButton
} from "react-admin";

const SimList = props => {
  const sort = { field: "created", order: "DESC" };

  return (
    <List {...props} sort={sort}>
      <Datagrid>
        <DateField source="created" label="Pada Tanggal" />
        <DateField source="berlaku_hingga" label="Berlaku Hingga" />
        <ReferenceField
          source="permohonan_sim_tni_id"
          reference="permohonan_sim_tni"
          label="Permohonan SIM-TNI"
        >
          <TextField source="nama" />
        </ReferenceField>
        <EditButton />
        <ShowButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default SimList;
