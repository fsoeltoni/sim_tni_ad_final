import React, { useState, useEffect } from "react";
import { Create, SimpleForm } from "react-admin";
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
      <SimpleForm initialValues={initialValues}></SimpleForm>
    </Create>
  );
};

export default SimCreate;
