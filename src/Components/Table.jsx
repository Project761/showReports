import React, { useEffect, useState } from 'react'
import { fetchData } from '../hooks/Api'

const Table = () => {

    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [checkboxIdArray, setCheckboxIdArray] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        fetchData('ReportModule/GetData_Report').then((res) => {
            console.log(res)
            if (res.length > 0) {
                setSelectedCheckboxes(res);
            } else {
                setSelectedCheckboxes([]);
            }
        })
    };

    const handleCheckboxChange = (checkboxId) => {
        // Check if the checkbox is already in the array
        if (checkboxIdArray.includes(checkboxId)) {
            // If it is, remove it
            setCheckboxIdArray((prevSelected) =>
                prevSelected.filter((id) => id !== checkboxId)
            );
        } else {
            // If it's not, add it to the array
            setCheckboxIdArray((prevSelected) => [...prevSelected, checkboxId]);
        }
    };

    console.log(checkboxIdArray)

    return (
        <>
            <div className="section-body view_page_design pt-1">
                <div className="col-12 col-sm-12">
                    <div className="card Agency">
                        <div className="card-body">
                            <div className="row  ">
                                <div className={`col-12 col-md-12`}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="bg-line text-white   py-1 px-2 d-flex justify-content-between align-items-center">
                                                <p className="p-0 m-0">Incident</p>
                                            </div>
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th colSpan={12}>Section-1</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {selectedCheckboxes.map((checkbox) => (
                                                        // console.log(checkbox),
                                                        <div key={checkbox.SectionID}>
                                                            <input
                                                                type="checkbox"
                                                                id={checkbox?.SectionID}
                                                                checked={checkboxIdArray.includes(checkbox?.SectionID)}
                                                                onChange={() => handleCheckboxChange(checkbox?.SectionID)}
                                                            />
                                                            <label htmlFor={checkbox.SectionID}>{checkbox.SectionName}</label>
                                                        </div>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <hr />
                                            <table class="table">
                                                <thead>
                                                    <th colSpan={12}>Section-2</th>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Mark</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Mark</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Mark</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table