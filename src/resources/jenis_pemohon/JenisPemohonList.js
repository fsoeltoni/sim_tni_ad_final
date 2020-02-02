import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  DeleteButton
} from "react-admin";

const JenisPemohonList = props => {
  const sort = { field: "id", order: "ASC" };

  return (
    <List {...props} sort={sort}>
      <Datagrid>
        <TextField source="nama" label="Nama" />
        <EditButton />
        <ShowButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default JenisPemohonList;
