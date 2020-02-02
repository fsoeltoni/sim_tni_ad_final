import React from "react";
import { Show, SimpleShowLayout, TextField } from "react-admin";

const JenisPemohonShow = props => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="nama" label="Nama" />
      </SimpleShowLayout>
    </Show>
  );
};

export default JenisPemohonShow;
