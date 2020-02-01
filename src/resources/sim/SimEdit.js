import React, { useState, useEffect } from "react";
import { Edit, SimpleForm } from "react-admin";
import moment from "moment";

const SimEdit = props => {
  const [initialValues, setInitialValues] = useState();

  useEffect(() => {
    const updated = moment();

    setInitialValues({ updated });
  }, []);

  return (
    <Edit {...props}>
      <SimpleForm initialValues={initialValues}></SimpleForm>
    </Edit>
  );
};

export default SimEdit;
