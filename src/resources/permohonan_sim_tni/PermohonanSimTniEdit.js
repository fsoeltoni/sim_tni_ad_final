import React, { useState, useEffect } from "react";
import { Edit, SimpleForm, TextInput, NumberInput } from "react-admin";
import moment from "moment";

const PermohonanSimTniEdit = props => {
  const [initialValues, setInitialValues] = useState();

  useEffect(() => {
    const updated = moment();

    setInitialValues({ updated });
  }, []);

  return (
    <Edit {...props}>
      <SimpleForm initialValues={initialValues}>
        <TextInput source="nama" label="Nama" />
        <NumberInput source="kode" label="Kode" />
      </SimpleForm>
    </Edit>
  );
};

export default PermohonanSimTniEdit;
