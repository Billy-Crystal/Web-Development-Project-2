//Function Component
function FormRepairDetail() {
    //Component UI: HTML Rendering
    return (
        <>
            <h2>Repair Details</h2>
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">Purchase Date *</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="date"
                    id="purchaseDate"
                    required
                />
            </div>
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">Repair Date *</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="date"
                    id="repairDate"
                    required
                />
            </div>
            {/*Under Warranty*/}
            <div class="row">
                <fieldset class="border border-primary col-12 col-lg-11 ms-1 me-4 mb-3">
                    <legend class="col-11 float-none w-auto">
                        Under Warranty
                    </legend>
                    <div>
                        <label class="col-12 col-md-12 col-lg-4">
                            Warranty
                        </label>
                        <input type="checkbox" id="warranty" />
                    </div>
                </fieldset>
            </div>
            {/*Other details*/}
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">IMEI Number: *</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="number"
                    id="imei"
                    required
                />
            </div>
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">Make:</label>
                <select class="col-12 col-md-12 col-lg-7" id="makeList">
                    <option value="none" selected>
                        None
                    </option>
                    <option value="iphone">iPhone</option>
                    <option value="samsung">Samsung Galaxy</option>
                    <option value="nokia">Nokia</option>
                </select>
            </div>
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">Model Number:</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="number"
                    id="modelnumber"
                />
            </div>
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">
                    Fault Category: *
                </label>
                <select class="col-12 col-md-12 col-lg-7" id="faultcategory">
                    <option value="none" selected>
                        None
                    </option>
                    <option value="screen">Screen</option>
                    <option value="battery">Battery</option>
                </select>
            </div>
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">Description: *</label>
                <textarea
                    class="col-12 col-md-12 col-lg-7"
                    id="description"
                    required
                    style={{ resize: "vertical", minHeight: "135px" }}
                />
            </div>
        </>
    );
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default FormRepairDetail;
