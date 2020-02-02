import React, { useState, useEffect } from "react";
import { Create, SimpleForm, ReferenceInput, SelectInput } from "react-admin";
import moment from "moment";

const SimCreate = props => {
  const [initialValues, setInitialValues] = useState();

  useEffect(() => {
    const created = moment();
    const updated = created;
    const berlaku_hingga = moment(created).add(5, "y");

    setInitialValues({ created, updated, berlaku_hingga });
  }, []);

  return (
    <Create {...props}>
      <SimpleForm initialValues={initialValues}>
        <ReferenceInput
          source="permohonan_sim_tni_id"
          reference="permohonan_sim_tni"
          sort={{ field: "id", order: "ASC" }}
          label="Permohonan SIM-TNI"
        >
          <SelectInput optionText="nama" />
        </ReferenceInput>
        <ReferenceInput
          source="golongan_sim_tni_id"
          reference="golongan_sim_tni"
          sort={{ field: "id", order: "ASC" }}
          label="Golongan SIM-TNI"
        >
          <SelectInput optionText="nama" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default SimCreate;
