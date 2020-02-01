import React from "react";
import { Show, SimpleShowLayout, DateField } from "react-admin";

const SimShow = props => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="created" label="Pada Tanggal" />
        <DateField source="berlaku_hingga" label="Berlaku Hingga" />
      </SimpleShowLayout>
    </Show>
  );
};

export default SimShow;
