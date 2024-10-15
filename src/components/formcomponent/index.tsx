import React, { useEffect, useState } from 'react';
import { TextField, Button, Stack, Checkbox, FormControlLabel } from '@mui/material';

const FormComponent = (props: any) => {
  const { editData, setEdit } = props;
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    grade: "",
    isChecked: false,
  });

  useEffect(() => {
    if (editData) {
      setFormData({
        id: editData.id || "",
        name: editData.name || "",
        age: editData.age || "",
        grade: editData.grade || "",
        isChecked: editData.isChecked || false,
      });
    } else {
      generateRandomString();
    }
  }, [editData]);

  function handleSubmit(e: React.FormEvent) {
    const existingData = localStorage.getItem("formData");
    let dataArray = existingData ? JSON.parse(existingData) : [];
    if (editData) {
      const updatedData = dataArray.map((data: any) =>
        data.id === formData.id ? formData : data
      );
      localStorage.setItem("formData", JSON.stringify(updatedData));
    } else {
      dataArray.push(formData);
      localStorage.setItem("formData", JSON.stringify(dataArray));
    }
    setEdit("false");
  }

  function generateRandomString() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
    const randomNumber = Math.floor(Math.random() * 100);
    const result = randomChar + randomNumber;
    const formDataArray = JSON.parse(localStorage.getItem("formData") || '[]');
    if (formDataArray.some((data: any) => data.id === result)) {
      generateRandomString();  
    } else {
      setFormData((prev) => ({ ...prev, id: result }));
    }
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  }
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setFormData((prev: any) => ({
      ...prev,
      isChecked: checked,
    }));
  };
  return (
    <React.Fragment>
      <h2 style={{ textAlign: 'center' }}>Student Record Management Form</h2>
      <form onSubmit={handleSubmit} style={{ padding: '30px' }}>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            onChange={handleChange}
            type="text"
            name="id"
            variant="outlined"
            color="secondary"
            label="ID"
            value={formData.id}
            fullWidth
            required
            disabled 
          />
          <TextField
            onChange={handleChange}
            type="text"
            name="name"
            variant="outlined"
            color="secondary"
            label="Name"
            value={formData.name}
            fullWidth
            required
          />
        </Stack>
        <TextField
          onChange={handleChange}
          type="number"
          name="age"
          variant="outlined"
          color="secondary"
          label="Age"
          value={formData.age}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          onChange={handleChange}
          type="text"
          name="grade"
          variant="outlined"
          color="secondary"
          label="Grade"
          value={formData.grade}
          required
          fullWidth
          sx={{ mb: 4 }}
        />
        <FormControlLabel
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          label="Enrollment Status"
          control={
            <Checkbox
              name="isChecked"
              checked={formData.isChecked}
              onChange={handleCheckboxChange}
              color="secondary"
              sx={{
                mr: 1,
              }}
            />
          }
        />
        <br />
        <Button variant="outlined" color="secondary" type="submit">
          Submit
        </Button>
      </form>
    </React.Fragment>
  );
};
export default FormComponent;