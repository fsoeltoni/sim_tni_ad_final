import React, { useState, useEffect } from "react";
import { Create, SimpleForm, TextInput, NumberInput } from "react-admin";
import moment from "moment";

const GolonganSimTniCreate = props => {
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
      </SimpleForm>
    </Create>
  );
};

export default GolonganSimTniCreate;
