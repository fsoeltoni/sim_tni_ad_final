import React from "react";
import {
  List,
  Datagrid,
  DateField,
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
        <EditButton />
        <ShowButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default SimList;
