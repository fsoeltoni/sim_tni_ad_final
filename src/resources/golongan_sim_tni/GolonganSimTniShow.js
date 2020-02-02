import React from "react";
import { Show, SimpleShowLayout, TextField } from "react-admin";

const GolonganSimTniShow = props => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="nama" label="Nama" />
      </SimpleShowLayout>
    </Show>
  );
};

export default GolonganSimTniShow;
