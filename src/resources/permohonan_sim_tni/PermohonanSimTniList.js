import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  DeleteButton
} from "react-admin";

const PermohonanSimTniList = props => {
  const sort = { field: "created", order: "DESC" };

  return (
    <List {...props} sort={sort}>
      <Datagrid>
        <TextField source="nama" label="Nama" />
        <TextField source="kode" label="Kode" />
        <EditButton />
        <ShowButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default PermohonanSimTniList;
