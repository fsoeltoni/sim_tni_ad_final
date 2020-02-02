import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  DeleteButton
} from "react-admin";

const GolonganSimTniList = props => {
  const sort = { field: "created", order: "DESC" };

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

export default GolonganSimTniList;
