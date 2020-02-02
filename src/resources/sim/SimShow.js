import React from "react";
import {
  Show,
  SimpleShowLayout,
  DateField,
  ReferenceField,
  TextField
} from "react-admin";

const SimShow = props => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="created" label="Pada Tanggal" />
        <DateField source="berlaku_hingga" label="Berlaku Hingga" />
        <ReferenceField
          source="permohonan_sim_tni_id"
          reference="permohonan_sim_tni"
          label="Permohonan SIM-TNI"
        >
          <TextField source="nama" />
        </ReferenceField>
        <ReferenceField
          source="golongan_sim_tni_id"
          reference="golongan_sim_tni"
          label="Golongan SIM-TNI"
        >
          <TextField source="nama" />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};

export default SimShow;
