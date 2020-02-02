import React, { useState, useEffect } from "react";
import { Edit, SimpleForm, TextInput, NumberInput } from "react-admin";
import moment from "moment";

const GolonganSimTniEdit = props => {
  const [initialValues, setInitialValues] = useState();

  useEffect(() => {
    const updated = moment();

    setInitialValues({ updated });
  }, []);

  return (
    <Edit {...props}>
      <SimpleForm initialValues={initialValues}>
        <TextInput source="nama" label="Nama" />
      </SimpleForm>
    </Edit>
  );
};

export default GolonganSimTniEdit;
