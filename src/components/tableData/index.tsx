import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import Popup from "../popup";
import UserContext from "../contextapi/usercontext";

function TableData() {
    const [formData, setFormData] = useState<any[]>([]);
    const [edit, setEdit] = useState("false");
    const [editData, setEditData] = useState<any>();
    const { handleChangeData, handleFilterData } = useContext(UserContext);
    const [duplicateData, setDuplicateData] = useState<any[]>([]);

    useEffect(() => {
        if (handleChangeData) {
            const filtered = formData.filter(
                item =>
                    item.name.toLowerCase().includes(handleChangeData.toLowerCase()) ||
                    item.grade.toLowerCase().includes(handleChangeData.toLowerCase())
            );
            setFormData(filtered);
        } else {
            setFormData(duplicateData);
        }
    }, [handleChangeData]);

    // useEffect(() => {
    //     setFormData(duplicateData);

    //     if (handleFilterData) {
    //         const isCheckedFilter = handleFilterData.toLowerCase();
    //         let bool: Boolean;
    //         if (isCheckedFilter === "active") {
    //             bool = true;
    //         } else if (isCheckedFilter === "inactive") {
    //             bool = false;
    //         }
    //         const filtered = formData.filter(item => item.isChecked === bool);
    //         setFormData(filtered);
    //     } else {
    //         setFormData(duplicateData);
    //     }
    // }, [handleFilterData]);
    useEffect(() => {
        setFormData(duplicateData);
    }, [duplicateData]);
    
    useEffect(() => {
        if (handleFilterData) {
            const isCheckedFilter = handleFilterData.toLowerCase();
            let bool: boolean;
            if (isCheckedFilter === "active") {
                bool = true;
            } else if (isCheckedFilter === "inactive") {
                bool = false;
            }
            const filtered = duplicateData.filter(item => item.isChecked === bool);
            setFormData(filtered);
        } else {
            setFormData(duplicateData);
        }
    }, [handleFilterData, duplicateData]); 
    
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("formData") || '[]');
        setFormData(storedData);
        setDuplicateData(storedData);
    }, []);

    function handleEdit(val: any) {
        setEdit("true");
        setEditData(val);
    }

    function handleDelete(val: any) {
        const updatedData = formData.filter((item: any) => val.id !== item.id);
        setFormData(updatedData);
        localStorage.setItem("formData", JSON.stringify(updatedData));
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            {edit && <Popup edit={edit} setEdit={setEdit} editData={editData} />}
            <TableContainer component={Paper} sx={{
                width: '100%',
                boxShadow: 3,
                borderRadius: '10px',
                overflowX: 'auto',  // Enable horizontal scrolling on smaller screens
            }}>
                <Table sx={{ minWidth: '600px' }}> {/* Set minimum width for table to allow scrolling */}
                    <TableHead>
                        <TableRow sx={{ backgroundColor: '#3f51b5', color: 'white' }}>
                            <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>ID</TableCell>
                            <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Name</TableCell>
                            <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Age</TableCell>
                            <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Grade</TableCell>
                            <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Enrollment Status</TableCell>
                            <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {formData.map((val: any) => (
                            <TableRow
                                key={val.id}
                                sx={{
                                    '&:nth-of-type(odd)': { backgroundColor: '#f0f0f5' },
                                    '&:hover': { backgroundColor: '#e0e0e0' },
                                }}
                            >
                                <TableCell align="center">{val.id}</TableCell>
                                <TableCell align="center">{val.name}</TableCell>
                                <TableCell align="center">{val.age}</TableCell>
                                <TableCell align="center">{val.grade}</TableCell>
                                <TableCell align="center">{val.isChecked ? "Active" : "Inactive"}</TableCell>
                                <TableCell align="center" sx={{
                                    whiteSpace: 'nowrap', // Prevents text from wrapping
                                    '@media (max-width: 600px)': {  // Adjusts for small screens
                                        fontSize: '12px',
                                        padding: '6px',
                                    },
                                }}>
                                    <span
                                        onClick={() => handleEdit(val)}
                                        style={{ cursor: "pointer", color: "blue", marginRight: '10px' }}
                                    >
                                        Edit
                                    </span>
                                    <span
                                        onClick={() => handleDelete(val)}
                                        style={{ cursor: "pointer", color: "blue" }}
                                    >
                                        / Delete
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default TableData;
