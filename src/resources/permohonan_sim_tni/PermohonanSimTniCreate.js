import React, { useState, useEffect } from "react";
import { Create, SimpleForm, TextInput, NumberInput } from "react-admin";
import moment from "moment";

const PermohonanSimTniCreate = props => {
  const [initialValues, setInitialValues] = useState();

  useEffect(() => {
    const created = moment();
    const updated = created;

    setInitialValues({ created, updated });
  }, []);

  return (
    <Create {...props}>
      <SimpleForm initialValues={initialValues}>
        <TextInput source="nama" label="Nama" />
        <NumberInput source="kode" label="Kode" />
      </SimpleForm>
    </Create>
  );
};

export default PermohonanSimTniCreate;
