import React, { useState, useEffect } from "react";
import { Edit, SimpleForm, ReferenceInput, SelectInput } from "react-admin";
import moment from "moment";

const SimEdit = props => {
  const [initialValues, setInitialValues] = useState();

  useEffect(() => {
    const updated = moment();

    setInitialValues({ updated });
  }, []);

  return (
    <Edit {...props}>
      <SimpleForm initialValues={initialValues}>
        <ReferenceInput
          source="permohonan_sim_tni_id"
          reference="permohonan_sim_tni"
          sort={{ field: "id", order: "ASC" }}
          label="Permohonan SIM-TNI"
        >
          <SelectInput optionText="nama" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

export default SimEdit;
