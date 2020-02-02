import React from "react";
import { Show, SimpleShowLayout, TextField } from "react-admin";

const PermohonanSimTniShow = props => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="nama" label="Nama" />
        <TextField source="kode" label="Kode" />
      </SimpleShowLayout>
    </Show>
  );
};

export default PermohonanSimTniShow;
