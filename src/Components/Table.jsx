import React, { useEffect, useState } from 'react';
import { fetchData, fetchPostData } from '../hooks/Api';

const Table = () => {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [checkboxIdArray, setCheckboxIdArray] = useState([]);
    const [sectionFields, setSectionFields] = useState({});
    const [storedResponses, setStoredResponses] = useState([]);
    const [groupedResponses, setGroupedResponses] = useState([]);

    console.log(sectionFields, 'section fields');

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        fetchData('ReportModule/GetData_Report').then((res) => {
            console.log(res);
            if (res.length > 0) {
                setSelectedCheckboxes(res);
            } else {
                setSelectedCheckboxes([]);
            }
        });
    };

    const handleFieldsButtonClick = async (sectionId) => {
        if (checkboxIdArray.includes(sectionId)) {
            try {
                const orderInput = document.getElementById(`manualInput_${sectionId}`);
                const order = orderInput ? parseInt(orderInput.value, 10) : 0;
    
                const fieldsData = await fetchPostData('ReportModule/GetData_ReportFields', {
                    SectionID: sectionId,
                });
    
                if (fieldsData && fieldsData.length > 0) {
                    const responsesWithOrder = fieldsData.map((response) => ({
                        ...response,
                        order,
                    }));
    
                    setStoredResponses((prevResponses) => [
                        ...prevResponses,
                        ...responsesWithOrder,
                    ]);
                } else {
                    console.log('No data available for SectionID:', sectionId);
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            console.log(`Checkbox for SectionID ${sectionId} is not checked`);
        }
    };
    

    const handleCheckboxChange = (checkboxId, order) => {
        if (checkboxIdArray.includes(checkboxId)) {
            setCheckboxIdArray((prevSelected) =>
                prevSelected.filter((id) => id !== checkboxId)
            );
        } else {
            setCheckboxIdArray((prevSelected) => [...prevSelected, checkboxId]);

            setSectionFields((prevFields) => ({
                ...prevFields,
                [checkboxId]: { order },
            }));
        }
    };


    const handleShowReport = () => {
        const groupedResponses = [];
        const sortedResponses = [...storedResponses].sort((a, b) => a.order - b.order);

        sortedResponses.forEach((response, index) => {

            const groupId = response.groupId;

            const existingGroup = groupedResponses.find(group => group.groupId === groupId);

            if (existingGroup) {
                existingGroup.responses.push(response);
            } else {
                groupedResponses.push({
                    groupId,
                    responses: [response],
                });
            }
        });

        setGroupedResponses(groupedResponses);
    };

    console.log(groupedResponses, 'grouped response')

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
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th colSpan={12}>Section Name</th>
                                                        <th>Order</th>
                                                        <th>Fields</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {selectedCheckboxes.map((checkbox) => (
                                                        <React.Fragment key={checkbox.SectionID}>
                                                            <tr>
                                                                <td>
                                                                    <input
                                                                        type="checkbox"
                                                                        id={checkbox?.SectionID}
                                                                        checked={checkboxIdArray.includes(
                                                                            checkbox?.SectionID
                                                                        )}
                                                                        onChange={() =>
                                                                            handleCheckboxChange(
                                                                                checkbox?.SectionID
                                                                            )
                                                                        }
                                                                    />
                                                                    <label htmlFor={checkbox.SectionID}>
                                                                        {checkbox.SectionName}
                                                                    </label>
                                                                </td>
                                                                <td colSpan={12}></td>
                                                                <td>
                                                                    <input
                                                                        type="number"
                                                                        id={`manualInput_${checkbox.SectionID}`}
                                                                        min="1"
                                                                        max="5"
                                                                    />
                                                                </td>

                                                                <td>
                                                                    <button
                                                                        onClick={() => handleFieldsButtonClick(checkbox.SectionID)}
                                                                        disabled={!checkboxIdArray.includes(checkbox.SectionID)}
                                                                    >
                                                                        Fields
                                                                    </button>

                                                                </td>
                                                            </tr>
                                                            {Array.isArray(sectionFields[checkbox.SectionID]) && (
                                                                <tr>
                                                                    <td colSpan={14}>
                                                                        {sectionFields[checkbox.SectionID].map((field) => (
                                                                            <div key={field.FieldID}>
                                                                                {field.FieldName}
                                                                                <input type="checkbox" />
                                                                            </div>
                                                                        ))}
                                                                    </td>
                                                                </tr>
                                                            )}

                                                        </React.Fragment>
                                                    ))}
                                                </tbody>
                                            </table>

                                            <button onClick={handleShowReport}>
                                                Show Report
                                            </button>

                                            {groupedResponses.map((group, index) => (
                                                <div key={index}>

                                                    <p>Group ID: {group.groupId}</p>
                                                    <ul>
                                                        {group.responses.map((response, responseIndex) => (
                                                            <li key={responseIndex}>
                                                                {response.FieldName}

                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Table;
