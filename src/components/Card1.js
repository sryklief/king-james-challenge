import React, { useContext } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import satrix from '..//satrix.png';
import tax from '../tax.png';
import unit from '../unit.png';
import info from '../info.png';

const data = require("./data.json");

const CardItem = () => {
    return (
        <div class="content">
            <div class="card">
                <div className="card bg-light">
                    <div className="card-header bg-primary text-white">
                        <div class="row">
                            <div class="col-2">
                            <img className="tax" src={tax}></img>
                            </div>
                            <div class="col-lg-6">
                                <h5 className="card-title">
                                    {data.portfolio.clientAccountGroups[2].productLabel}
                                </h5>
                                <p>
                                    Investor Code:{" "}
                                    <b>{data.portfolio.clientAccountGroups[2].accountGroupId}</b>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <CircularProgressbar
                                value={data.portfolio.clientAccountGroups[2].allocationPercentage}
                                text={`${data.portfolio.clientAccountGroups[2].percentageComplete}%`}
                            />
                            <hr />
                            <div class="last-updated">
                                <p class="text">Last updated:  </p>
                                <p class="date"><b>{data.portfolio.clientAccountGroups[2].updatedDate}</b></p>
                                <p class="text-funds">Total funds:{" "} </p>
                                <p class="funds"><b>{data.portfolio.clientAccountGroups[2].funds.length}</b></p>
                            </div>
                            </div>
                            <div class="col-lg-6">
                                    <p class="text">Almost there 50% done with your application
                                    <hr />
                                    Pick up where you left off or &nbsp; &nbsp;<button type="button" class="btn btn-outline-primary">Cancel &times;</button>
                                    </p>
                                    
                            </div>
                        </div>
                        <hr />
                        <button type="button" class="btn btn-primary">RESUME APPLICATION</button>
                    </div>
                </div>
            </div>
            <div class="card">
                <div className="card bg-light">
                    <div className="card-header bg-primary text-white">
                    <div class="row">
                            <div class="col-2">
                            <img className="tax" src={tax}></img>
                            </div>
                            <div class="col-lg-6">
                                <h5 className="card-title">
                                    {data.portfolio.clientAccountGroups[2].productLabel}
                                </h5>
                                <p>
                                    Investor Code:{" "}
                                    <b>{data.portfolio.clientAccountGroups[2].accountGroupId}</b>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <CircularProgressbar
                                value={data.portfolio.clientAccountGroups[1].allocationPercentage}
                                text={`${data.portfolio.clientAccountGroups[1].percentageComplete}%`}
                            />
                            <hr />
                            <div class="last-updated">
                                <p class="text">Application submitted: </p>
                                <p class="date"><b>{data.portfolio.clientAccountGroups[1].updatedDate}</b></p>
                                <p class="text-funds">Total funds:{" "} </p>
                                <p class="funds"><b>{data.portfolio.clientAccountGroups[1].funds.length}</b></p>
                                
                            </div>
                            </div>
                            <div class="col-lg-6">
                                    <p class="text">Well Done! We have all the information we need.
                                    <hr />
                                    Your investment is currently pending
                                    </p>
                                    
                            </div>
                        </div>
                        <div class="bottom"><hr /></div>
                        
                    </div>
                </div>
            </div>
            <div class="card">
                <div className="card bg-light">
                    <div className="card-header bg-primary text-white">
                        <div class="row">
                            <div class="col-2">
                                <img className="unit" src={unit}></img>
                            </div>
                            <div class="col-lg-6">
                                <h5 className="card-title">
                                {data.portfolio.clientAccountGroups[0].productLabel}
                                </h5>
                                <p>
                                Investor Code:{" "}
                                <b>{data.portfolio.clientAccountGroups[0].accountGroupId}</b>
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="card-body">
                                <p class="text">Total Value: <br />
                                    <p class="value"><b>R{data.portfolio.clientAccountGroups[0].marketValue.toFixed(2)}</b></p>
                                    <hr />
                                </p>
                            
                            <div class="last-updated">
                                <p class="text">Total available &nbsp;<img className="info" src={info}></img> </p>
                                <p class="avail"><b>R{data.portfolio.clientAccountGroups[0].availableMarketValue.toFixed(2)}</b></p>
                                <p class="text-funds">Total funds:{" "} </p>
                                <p class="funds"><b>{data.portfolio.clientAccountGroups[0].funds.length}</b></p>
                                <p class="invest">Investing since:{" "}<p class="invest-date">{data.portfolio.clientAccountGroups[0].inceptionDate}</p></p>
                                <button type="button" class="btn btn-primary">VIEW FUND</button>
                            </div>
                        <hr />
                        <div class="trust-btm"><img className="satrix" src={satrix}></img></div>
                        
                    </div>
                </div>
            </div>
        </div>
            
    );
};

export default CardItem;