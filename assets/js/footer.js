let footer = document.getElementById('footer');

footer.innerHTML = `
<!-- model holding amount start -->
<div class="modal fade" id="holdingmoney" tabindex="-1" aria-labelledby="holdingmoneyLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content bg-grey-color p-2">
            <div class="modal-header bg-black-color d-flex justify-content-center border-0 p-1">
                <h6 class="text-white-color">
                    Cash/Point History
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-0 my-3">
                <!-- table start -->
                <table class="table table-hover">
                    <thead>
                        <tr class="table-light">
                            <th class="text-center">Processing date</th>
                            <th class="text-center">cash</th>
                            <th class="text-center">leftover</th>
                            <th class="text-center col-4">memo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-black-color">
                            <td class="text-center text-white-color border-0">06-08 14:24</td>
                            <td class="text-center text-menu-color border-0">10,000</td>
                            <td class="text-center text-white-color border-0">10,000</td>
                            <td class="text-center text-white-color border-0">null</td>
                        </tr>
                    </tbody>
                </table>
                <!-- table end -->
                <div class="d-flex justify-content-end">
                    <div class="btn-group">
                        <div class="btn btn-outline-secondary">before</div>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off">
                            <label class="btn btn-outline-light" for="btnradio1">One</label>
                        </div>
                        <div class="btn btn-outline-secondary">after</div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
<!-- model holding amount end -->

<!-- model inbox start -->
<div class="modal fade " id="inbox" tabindex="-1" aria-labelledby="inboxLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content bg-grey-color p-2">
            <div class="modal-header bg-black-color d-flex justify-content-center border-0 p-1">
                <h6 class="text-white-color">
                    note box
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-0 my-3">
                <!-- button start -->
                <div class="bg-black-color d-inline-block p-2">
                    <button class="btn btn-sm btn-warning">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                        Delete all
                    </button>
                    <button class="btn btn-sm btn-warning" >
                        <i class="fas fa-pen"></i>
                        read all
                    </button>
                </div>
                <!-- button end -->

                <!-- message start -->
                <div class="bg-black-color text-center text-white-color mt-2 py-1 cur"  data-bs-toggle="modal" data-bs-target="#messageModal">
                    <div class="col-9">
                        Slot Annountcenment PGSOFT G...
                    </div>
                </div>
                <!-- message ed-->

                <div class="d-flex justify-content-end mt-2">
                    <div class="btn-group">
                        <div class="btn btn-outline-secondary">before</div>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                            <label class="btn btn-outline-secondary" for="btnradio1">One</label>
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                            <label class="btn btn-outline-secondary" for="btnradio2">2</label>
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                            <label class="btn btn-outline-secondary" for="btnradio3">3</label>
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
                            <label class="btn btn-outline-secondary" for="btnradio4">4</label>
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off">
                            <label class="btn btn-outline-secondary" for="btnradio5">5</label>
                        </div>
                        <div class="btn btn-outline-secondary">after</div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    <!-- model message start -->
    <div class="model fade" id="messageModal">
        <div class="modal-dialog w-100" style="position: fixed; right: 0; top: 4rem; z-index: 1000000;">
            <div class="modal-content bg-grey-color p-2">
                <div class="modal-header bg-black-color d-flex justify-content-center border-0 p-1">
                    <h6 class="text-white-color">
                        check the message
                    </h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-1 my-3 bg-grey-lighter-color">
                    <div class="d-flex justify-content-between text-white-color">
                        <p>Sender:</p>
                        <p>Recupie:()</p>
                    </div>
                    <div class="container bg-grey-color text-white-color p-2" style="min-height: 10rem;">
                        asdofh
                    </div>
            
                </div>
            </div>
        </div>
    </div>
    <!-- model message end -->
</div>
<!-- model inbox end -->

<!-- modal recovery start -->
<div class="modal fade" id="recoveryModal" tabindex="-1" aria-labelledby="recoveryModalLabel" aria-hidden="true">
    <div class="modal-dialog w-25">
        <div class="modal-content bg-grey-color p-2 rounded-0">
            <div class="modal-header bg-black-color d-flex justify-content-center border-0 p-1 rounded-0">
                <h6 class="text-white-color">
                    money recovery
                </h6>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-0 d-flex justify-content-center p-4 flex-column">
                <button class="btn btn-warning bg-yellow-color w-100 my-2">Evolution money recovery</button>
                <button class="btn btn-warning bg-yellow-color w-100 my-2">slot money recovery</button>


            </div>
        </div>
    </div>
</div>
<!-- modal recovery end -->
`;
