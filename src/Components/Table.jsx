import React from 'react'

const Table = () => {
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
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                       
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                       
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                       
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                       
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                       
                                                    </tr>
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