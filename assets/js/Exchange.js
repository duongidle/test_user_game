document.querySelector('section.exchange').innerHTML = `
<div class="modal fade" id="exchange" tabindex="-1" aria-labelledby="exchangeLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content bg-grey-color p-2">
            <div class="modal-header bg-black-color d-flex justify-content-center border-0 p-1">
                <h6 class="text-white-color">
                    Recharge/Exchange
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-0 my-3">
                <!-- btn start -->
                <div class="container bg-black-color p-2">
                    <ul class="nav exchange-tab row px-2" id="nav-tab" role="tablist">
                        <li class="nav-item col-4 p-0" role="presentation">
                            <button class="nav-link active col-12" id="recharge-tab" data-bs-toggle="pill" data-bs-target="#recharge" aria-controls="recharge" aria-selected="true">
                                <i class="fa fa-arrow-up" aria-hidden="true"></i>
                                Recharge application
                            </button>
                        </li>
                        <li class="nav-item col-4 px-1" role="presentation">
                            <button class="nav-link col-12" id="application-tab" data-bs-toggle="pill" data-bs-target="#application" aria-controls="application" aria-selected="false">
                                <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                Application for currency exchange
                            </button>
                        </li>
                        <li class="nav-item col-4 p-0" role="presentation">
                            <button class="nav-link col-12" id="history-tab" data-bs-toggle="pill" data-bs-target="#history" aria-controls="history" aria-selected="false">
                                <i class="fa fa-bars" aria-hidden="true"></i>
                                history
                            </button>
                        </li>
                    </ul>
                </div>
                <!-- btn end -->
                <!-- main start -->
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="recharge" role="tabpanel" aria-labelledby="recharge-tab">
                        <!-- input start -->
                        <div class="container p-3 bg-black-color text-white-color mt-2 d-flex flex-column align-items-center">
                            <p>-if the name of the depositor and the account holder do not match, processing is not possible.</p>
                            <p>-The maximum deposit amount at one time must not exceed KRW 10 million</p>
                        
                            <div class="input-group">
                                <label class="col-4 text-end pe-4" for="nameOf">Name of depositor</label>
                                <input type="text" class="form-control col-8 bg-grey-color border-0 rounded" name="" id="nameOf"
                                    aria-describedby="helpId" placeholder="">
                            </div>
                        
                            <div class="input-group mt-4">
                                <label class="col-4 text-end pe-4" for="amount">Recharge amount</label>
                                <input type="number" class="form-control col-8 bg-grey-color border-0 rounded text-white-color text-end"
                                    value="0" min="0" name="" id="amount" aria-describedby="helpId" placeholder="">
                            </div>
                        </div>
                        <!-- input end -->
                        
                        <!-- amount start -->
                        <div class="container bg-black-color p-2 mt-2">
                            <div class="btn-group w-100">
                                <button class="btn btn-secondary border border-1 border-dark">10,000</button>
                                <button class="btn btn-secondary border border-1 border-dark">50,000</button>
                                <button class="btn btn-secondary border border-1 border-dark">100,000</button>
                                <button class="btn btn-secondary border border-1 border-dark">500,000</button>
                                <button class="btn btn-secondary border border-1 border-dark">1 million</button>
                                <button class="btn btn-secondary border border-1 border-dark">5 million</button>
                                <button class="btn btn-secondary border border-1 border-dark">10 million</button>
                                <button class="btn btn-secondary border border-1 border-dark">delete</button>
                            </div>
                        </div>
                        <!-- amount end -->
                        
                        <!-- apply btn start -->
                        <div class="container bg-black-color mt-2 p-2">
                            <button class="btn btn-sm btn-warning col-12">
                                Apply for a recharge
                            </button>
                        </div>
                        <!-- apply btn end-->
                    </div>
                    <div class="tab-pane fade" id="application" role="tabpanel" aria-labelledby="application-tab">
                        <!-- input start -->
                        <div class="container p-3 bg-black-color text-white-color mt-2 d-flex flex-column align-items-center">
                            <p>-After applying for currency exchange, your money will be deducted immediately</p>

                            <div class="input-group my-4">
                                <label class="col-4 text-end pe-4">Holding amount</label>
                                <label class="col-8 text-start">10,000 won</label>
                            </div>
                        
                            <div class="input-group mt-2 mb-4">
                            <label class="col-4 text-end pe-4" for="password">Currency exchange amount</label>
                            <input type="number" class="form-control col-8 bg-grey-color border-0 rounded text-white-color text-end"
                                value="0" min="0" name="" id="password" aria-describedby="helpId" placeholder="">
                            </div>
                        
                            <div class="input-group">
                                <label class="col-4 text-end pe-4" for="curExchange">Withdrawal password</label>
                                <input type="text" class="form-control col-8 bg-grey-color border-0 rounded" name="" id="curExchange"
                                    aria-describedby="helpId" placeholder="withdrawal password">
                            </div>
                        
                           
                        </div>
                        <!-- input end -->
                        
                        <!-- amount start -->
                        <div class="container bg-black-color p-2 mt-2">
                            <div class="btn-group w-100">
                                <button class="btn btn-secondary border border-1 border-dark">10,000</button>
                                <button class="btn btn-secondary border border-1 border-dark">50,000</button>
                                <button class="btn btn-secondary border border-1 border-dark">100,000</button>
                                <button class="btn btn-secondary border border-1 border-dark">500,000</button>
                                <button class="btn btn-secondary border border-1 border-dark">1 million</button>
                                <button class="btn btn-secondary border border-1 border-dark">5 million</button>
                                <button class="btn btn-secondary border border-1 border-dark">10 million</button>
                                <button class="btn btn-secondary border border-1 border-dark">delete</button>
                            </div>
                        </div>
                        <!-- amount end -->
                        
                        <!-- apply btn start -->
                        <div class="container bg-black-color mt-2 p-2">
                            <button class="btn btn-sm btn-warning col-12">
                                Apply for a exchange
                            </button>
                        </div>
                        <!-- apply btn end-->
                    </div>
                    <div class="tab-pane fade" id="history" role="tabpanel" aria-labelledby="history-tab">

                        <!-- btn start  -->
                        <div class="container bg-black-color p-2 mt-2">
                            <div class="row gx-2">
                                <div class="col-4">
                                    <button class="btn btn-sm btn-outline-danger w-100">
                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                        Delete all
                                    </button>
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-sm btn-secondary bg-grey-color w-100 border border-dark">
                                        charging history
                                    </button>
                                </div>
                                <div class="col-4">
                                    <button class="btn btn-sm btn-warning w-100">
                                        Currency Exchange
                                    </button>
                                </div>

                            </div>
                        </div>
                        <!-- btn end  -->

                        <!-- table start -->
                        <table class="table table-hover mt-2">
                            <thead>
                                <tr class="table-light">
                                    <th class="text-center">Application date</th>
                                    <th class="text-center">Withdrawal amount</th>
                                    <th class="text-center">processing result</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-black-color">
                                    <td class="text-center text-white-color border-0" colspan="3">No data</td>
                                </tr>
                            </tbody>
                        </table>
                        <!-- table end -->
                        <div class="d-flex justify-content-end">
                            <div class="btn-group" >
                                <div class="btn btn-outline-secondary">before</div>
                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                </div>
                                <div class="btn btn-outline-secondary">after</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- main end -->
                

                
            </div>
        </div>
    </div>
</div>
`;