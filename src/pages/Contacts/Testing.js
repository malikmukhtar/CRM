import React from 'react'

function Testing() {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 className="mb-sm-0">FACILITY/CLINIC</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
                                    <li className="breadcrumb-item active">Basic Elements</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card bg-primary">
                            <div className="card-body p-0">
                                <div className="alert alert-danger rounded-top alert-solid alert-label-icon border-0 rounded-0 m-0 d-flex align-items-center" role="alert">
                                    <i className="ri-error-warning-line label-icon"></i>
                                    <div className="flex-grow-1 text-truncate">
                                        Your Subscription expires in <b>315</b> days.
                                    </div>
                                    <div className="flex-shrink-0">
                                        <a href="pages-pricing.html" className="text-reset text-decoration-underline"><b>Renew Subscription</b></a>
                                    </div>
                                </div>

                                <div className="row align-items-end">
                                    <div className="col-sm-8">
                                        <div className="p-3">
                                            <p className="fs-16 lh-base text-white">Welcome!<span className="fw-semibold"> Emmanuel</span> Ozomah</p>

                                        </div>
                                    </div>
                                    <div className="col-sm-4">

                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header align-items-center d-flex">
                                <h4 className="card-title mb-0 flex-grow-1">Practice Registration Form</h4>

                            </div>
                            <div className="card-body">
                                <div className="live-preview">
                                    <div className="row gy-4">
                                        <div className="col-xxl-6 col-md-6">
                                            <div>
                                                <label htmlFor="basiInput" className="form-label">Name of practice</label>
                                                <input type="password" className="form-control" id="basiInput"/>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-md-6">
                                            <label htmlFor="placeholderInput" className="form-label">Type of Practice</label>
                                            <select className="form-select mb-3" aria-label="Default select example">
                                                <option selected="">Select type of practice </option>
                                                <option value="1">Declined Payment</option>
                                                <option value="2">Delivery Error</option>
                                                <option value="3">Wrong Amount</option>
                                            </select>
                                        </div>
                                        <div className="col-xxl-12 col-md-6">
                                            <div>
                                                <label htmlFor="placeholderInput" className="form-label">Practice address</label>
                                                <input type="password" className="form-control" id="placeholderInput" placeholder="Placeholder"/>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-md-6">
                                            <label htmlFor="placeholderInput" className="form-label">State of Practice</label>
                                            <select className="form-select mb-3" aria-label="Default select example">
                                                <option selected="">Select your Status </option>
                                                <option value="1">Declined Payment</option>
                                                <option value="2">Delivery Error</option>
                                                <option value="3">Wrong Amount</option>
                                            </select>
                                        </div>
                                        <div className="col-xxl-6 col-md-6">
                                            <label htmlFor="placeholderInput" className="form-label">L.G.A of Practice</label>
                                            <select className="form-select mb-3" aria-label="Default select example">
                                                <option selected="">Select your Status </option>
                                                <option value="1">Declined Payment</option>
                                                <option value="2">Delivery Error</option>
                                                <option value="3">Wrong Amount</option>
                                            </select>
                                        </div><div className="col-xxl-6 col-md-6">
                                            <div>
                                                <label htmlFor="placeholderInput" className="form-label">Practice address</label>
                                                <input type="password" className="form-control" id="placeholderInput" placeholder="Placeholder"/>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-md-6">
                                            <div>
                                                <label htmlFor="placeholderInput" className="form-label">Practice address</label>
                                                <input type="password" className="form-control" id="placeholderInput" placeholder="Placeholder"/>
                                            </div>
                                        </div>

                                        <div className="col-xxl-5 col-md-6">
                                            <div>
                                                <label htmlFor="exampleInputdate" className="form-label">DATE PRACTICE COMMENCED</label>
                                                <input type="date" className="form-control" id="exampleInputdate"/>
                                            </div>
                                        </div>
                                        <div className="col-xxl-7 col-md-6 pt-2">
                                            <div>

                                                <div className="col-lg-12 pt-4">
                                                    <fieldset className="row mb-3 mr-3">
                                                        <legend className="col-form-label col-sm-8 pt-0">IS THE PRACTICE ATTACHED TO A GENERAL MEDICAL PRACTICE?</legend>
                                                        <div className="col-sm-4">
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" id="allTransactions" name="allFilters" checked=""/>
                                                                    <label className="form-check-label" htmlFor="allTransactions">Yes</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" id="allTransactions" name="allFilters" checked=""/>
                                                                    <label className="form-check-label" htmlFor="allTransactions">No</label>
                                                            </div>

                                                        </div>
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-12 col-md-6">
                                            <div className="col-xl-12">
                                                <div className="table-responsive mt-4 mt-xl-0">
                                                    <table className="table table-success table-striped table-nowrap align-middle mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Invoice</th>
                                                                <th scope="col">Amount</th>
                                                                <th scope="col">Date</th>
                                                                <th scope="col">Status</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="fw-medium">01</td>
                                                                <td>Basic Plan</td>
                                                                <td>$860</td>
                                                                <td>Nov 22, 2021</td>
                                                                <td><i className="ri-checkbox-circle-line align-middle text-success"></i> Subscribed</td>
                                                                <td>
                                                                    <div className="hstack gap-3 flex-wrap">
                                                                        <a href="javascript:void(0);" className="link-success fs-15"><i className="ri-edit-2-line"></i></a>
                                                                        <a href="javascript:void(0);" className="link-danger fs-15"><i className="ri-delete-bin-line"></i></a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fw-medium">02</td>
                                                                <td>Premium Plan</td>
                                                                <td>$1200</td>
                                                                <td>Nov 10, 2021</td>
                                                                <td><i className="ri-close-circle-line align-middle text-danger"></i> Unsubscribed</td>
                                                                <td>
                                                                    <div className="hstack gap-3 flex-wrap">
                                                                        <a href="javascript:void(0);" className="link-success fs-15"><i className="ri-edit-2-line"></i></a>
                                                                        <a href="javascript:void(0);" className="link-danger fs-15"><i className="ri-delete-bin-line"></i></a>
                                                                    </div>
                                                                </td>
                                                            </tr>


                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-md-6">
                                            <div>
                                                <label htmlFor="basiInput" className="form-label">NAME OF REGISTERED PRACTITIONER IN-CHARGE</label>
                                                <input type="password" className="form-control" id="basiInput"/>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-md-6">
                                            <div>
                                                <label htmlFor="formtextInput" className="form-label">QUALIFICATION OF PRACTITIONER(S) IN-CHARGE:</label>
                                                <select className="form-select mb-3" aria-label="Default select example">
                                                    <option selected="">Select your Status </option>
                                                    <option value="1">Declined Payment</option>
                                                    <option value="2">Delivery Error</option>
                                                    <option value="3">Wrong Amount</option>
                                                </select>

                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-md-6">
                                            <div>
                                                <label htmlFor="basiInput" className="form-label">REG. NO. WITH NIGERIAN OPTOMETRIC ASSOCIATION:</label>
                                                <input type="password" className="form-control" id="basiInput"/>
                                            </div>
                                        </div>
                                        <div className="col-xxl-12 col-md-6">
                                            <div className="col-xl-12">
                                                <div className="table-responsive mt-4 mt-xl-0">
                                                    <table className="table table-success table-striped table-nowrap align-middle mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Invoice</th>
                                                                <th scope="col">Amount</th>
                                                                <th scope="col">Date</th>
                                                                <th scope="col">Status</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="fw-medium">01</td>
                                                                <td>Basic Plan</td>
                                                                <td>$860</td>
                                                                <td>Nov 22, 2021</td>
                                                                <td><i className="ri-checkbox-circle-line align-middle text-success"></i> Subscribed</td>
                                                                <td>
                                                                    <div className="hstack gap-3 flex-wrap">
                                                                        <a href="javascript:void(0);" className="link-success fs-15"><i className="ri-edit-2-line"></i></a>
                                                                        <a href="javascript:void(0);" className="link-danger fs-15"><i className="ri-delete-bin-line"></i></a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fw-medium">02</td>
                                                                <td>Premium Plan</td>
                                                                <td>$1200</td>
                                                                <td>Nov 10, 2021</td>
                                                                <td><i className="ri-close-circle-line align-middle text-danger"></i> Unsubscribed</td>
                                                                <td>
                                                                    <div className="hstack gap-3 flex-wrap">
                                                                        <a href="javascript:void(0);" className="link-success fs-15"><i className="ri-edit-2-line"></i></a>
                                                                        <a href="javascript:void(0);" className="link-danger fs-15"><i className="ri-delete-bin-line"></i></a>
                                                                    </div>
                                                                </td>
                                                            </tr>


                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6">
                                            <div>



                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                                        <label className="form-check-label" htmlFor="gridCheck">
                                                            I HEREBY ACCEPT RESPONSIBILITY FOR ANY WRONG INFORMATION INCLUDED IN THIS FORM.
                                                        </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="text-end">
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="code-view d-none">
                                    <pre className="language-markup" style={{height:" 450px"}} tabIndex="0"><code className="language-markup"><span className="token comment">&lt;!-- Basic Input --&gt;</span>
                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span>
                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>basiInput<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-label<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Basic Input<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>
                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>password<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-control<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>basiInput<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code>

                                        <code className="language-markup"><span className="token comment">&lt;!-- Input with Label --&gt;</span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>labelInput<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-label<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Input with Label<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>password<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-control<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>labelInput<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code>

                                        <code className="language-markup"><span className="token comment">&lt;!-- Input with Placeholder --&gt;</span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>placeholderInput<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-label<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Input with Placeholder<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>password<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-control<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>placeholderInput<span className="token punctuation">"</span></span> <span className="token attr-name">placeholder</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Placeholder<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code>

                                        <code className="language-markup"><span className="token comment">&lt;!-- Input with Value --&gt;</span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>valueInput<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-label<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Input with Value<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-control<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>valueInput<span className="token punctuation">"</span></span> <span className="token attr-name">value</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Input value<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code>

                                        <code className="language-markup"><span className="token comment">&lt;!-- Readonly Plain Text Input --&gt;</span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>readonlyPlaintext<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-label<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Readonly Plain Text Input<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-control-plaintext<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>readonlyPlaintext<span className="token punctuation">"</span></span> <span className="token attr-name">value</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Readonly input<span className="token punctuation">"</span></span> <span className="token attr-name">readonly</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code>

                                        <code className="language-markup"><span className="token comment">&lt;!-- Readonly Input --&gt;</span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>readonlyInput<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-label<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Readonly Input<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-control<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>readonlyInput<span className="token punctuation">"</span></span> <span className="token attr-name">value</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Readonly input<span className="token punctuation">"</span></span> <span className="token attr-name">readonly</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code>

                                        <code className="language-markup"><span className="token comment">&lt;!-- Disabled Input --&gt;</span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>disabledInput<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-label<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Disabled Input<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-control<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>disabledInput<span className="token punctuation">"</span></span> <span className="token attr-name">value</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Disabled input<span className="token punctuation">"</span></span> <span className="token attr-name">disabled</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code>

                                        <code className="language-markup"><span className="token comment">&lt;!-- Input with Icon --&gt;</span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>iconInput<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-label<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Input with Icon<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-icon<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>email<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-control form-control-icon<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>iconInput<span className="token punctuation">"</span></span> <span className="token attr-name">placeholder</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>example@gmail.com<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>i</span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>ri-mail-unread-line<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>i</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code>

                                        <code className="language-markup"><span className="token comment">&lt;!-- Input with Icon Right --&gt;</span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>iconrightInput<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-label<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Input with Icon Right<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-icon right<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>email<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-control form-control-icon<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>iconrightInput<span className="token punctuation">"</span></span> <span className="token attr-name">placeholder</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>example@gmail.com<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>i</span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>ri-mail-unread-line<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>i</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code>

                                        <code className="language-markup"><span className="token comment">&lt;!-- Input Date --&gt;</span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>exampleInputdate<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-label<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Input Date<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>date<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-control<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>exampleInputdate<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code>

                                        <code className="language-markup"><span className="token comment">&lt;!-- Input Time --&gt;</span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>exampleInputtime<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-label<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Input Time<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>time<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-control<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>exampleInputtime<span className="token punctuation">"</span></span> <span className="token attr-name">value</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>08:56 AM<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code>

                                        <code className="language-markup"><span className="token comment">&lt;!-- Input Password --&gt;</span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>exampleInputpassword<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-label<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Input Password<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>password<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-control<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>exampleInputpassword<span className="token punctuation">"</span></span> <span className="token attr-name">value</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>44512465<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code>

                                        <code className="language-markup"><span className="token comment">&lt;!-- Example Textarea --&gt;</span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>exampleFormControlTextarea5<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-label<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Example Textarea<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>textarea</span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-control<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>exampleFormControlTextarea5<span className="token punctuation">"</span></span> <span className="token attr-name">rows</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>3<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>textarea</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code>

                                        <code className="language-markup"><span className="token comment">&lt;!-- Form Text --&gt;</span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>formtextInput<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-label<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Form Text<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>password<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-control<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>formtextInput<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>passwordHelpBlock<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            Must be 8-20 characters long.
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code>

                                        <code className="language-markup"><span className="token comment">&lt;!-- Color Picker --&gt;</span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>colorPicker<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-label<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Color Picker<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>color<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-control form-control-color w-100<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>colorPicker<span className="token punctuation">"</span></span> <span className="token attr-name">value</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#364574<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code>

                                        <code className="language-markup"><span className="token comment">&lt;!-- Input Border Style --&gt;</span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>borderInput<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-label<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Input Border Style<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-control border-dashed<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>borderInput<span className="token punctuation">"</span></span> <span className="token attr-name">placeholder</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Enter your name<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code>

                                        <code className="language-markup"><span className="token comment">&lt;!-- Datalist example --&gt;</span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>exampleDataList<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-label<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Datalist example<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-control<span className="token punctuation">"</span></span> <span className="token attr-name">list</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>datalistOptions<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>exampleDataList<span className="token punctuation">"</span></span> <span className="token attr-name">placeholder</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Search your country...<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>datalist</span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>datalistOptions<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>option</span> <span className="token attr-name">value</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Switzerland<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>option</span> <span className="token attr-name">value</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>New York<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>option</span> <span className="token attr-name">value</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>France<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>option</span> <span className="token attr-name">value</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Spain<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>option</span> <span className="token attr-name">value</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Chicago<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>option</span> <span className="token attr-name">value</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Bulgaria<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>option</span> <span className="token attr-name">value</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Hong Kong<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>datalist</span><span className="token punctuation">&gt;</span></span></code>

                                        <code className="language-markup"><span className="token comment">&lt;!-- Rounded Input --&gt;</span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>exampleInputrounded<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-label<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Rounded Input<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-control rounded-pill<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>exampleInputrounded<span className="token punctuation">"</span></span> <span className="token attr-name">placeholder</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Enter your name<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code>

                                        <code className="language-markup"><span className="token comment">&lt;!-- Floating Input --&gt;</span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-floating<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text<span className="token punctuation">"</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>form-control<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>firstnamefloatingInput<span className="token punctuation">"</span></span> <span className="token attr-name">placeholder</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Enter your firstname<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>firstnamefloatingInput<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Floating Input<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>
                                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Testing