<template>
    <div>
        <vx-card title="CRÉDITOS PENDIENTES">
            <div id="printMe">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row p-2 table-active">
                                    <!-- <div class="col-md-6">
                                        <img
                                            src="/images/crediprendas.png"
                                            width="50%"
                                        />
                                    </div> -->

                                    <div class="col-md-6 text-right">
                                        <p class="font-weight-bold mb-1">
                                            CRÉDITOS PENDIENTES
                                        </p>
                                        <p class="text-muted">
                                            {{ getDateNow() }}
                                        </p>
                                    </div>
                                </div>
                                <div v-for="loan in loans" :key="loan.id">
                                    <div class="row">
                                        <p
                                            class="font-weight-bold col-md-6 text-left"
                                        >
                                            CRÉDITO NO.{{ loan.loan }} -
                                            {{ loan.description }}
                                        </p>
                                        <p class="col-md-3 text-left">
                                            Balance:
                                            {{
                                                mymoney(
                                                    loan.normal_credit.LOAN
                                                        .balance
                                                )
                                            }}
                                        </p>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-3 text-left">
                                            <p>
                                                Cliente: {{ loan.client.name }}
                                            </p>
                                        </div>
                                        <div class="col-md-3 text-left">
                                            <p>DPI: {{ loan.client.dpi }}</p>
                                        </div>
                                        <div class="col-md-3 text-left">
                                            <p>
                                                Departamento:
                                                {{
                                                    loan.client.nameDepartament
                                                }}
                                            </p>
                                        </div>
                                        <div class="col-md-3 text-left">
                                            <p>
                                                Municipio:
                                                {{ loan.client.nameTown }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-3 text-left">
                                            <p>
                                                Dirección:
                                                {{ loan.client.address }}
                                            </p>
                                        </div>
                                        <div class="col-md-3 text-left">
                                            <p>
                                                Colonia:
                                                {{ isNull(loan.client.suburb) }}
                                            </p>
                                        </div>
                                        <div class="col-md-3 text-left">
                                            <p>
                                                Zona:
                                                {{ isNull(loan.client.zone) }}
                                            </p>
                                        </div>
                                        <div class="col-md-3 text-left">
                                            <p>
                                                Teléfono:
                                                {{
                                                    isNull(loan.client.mobile)
                                                }}/{{
                                                    isNull(
                                                        loan.client.telephone
                                                    )
                                                }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <p
                                            class="font-weight-bold col-md-3 text-left"
                                        >
                                            Interés normal
                                        </p>
                                        <p class="col-md-3 text-left">
                                            Fecha:
                                            {{ convertDate(loan.paymentDate) }}
                                        </p>
                                        <p class="col-md-3 text-left">
                                            Interés:
                                            {{
                                                mymoney(
                                                    getPayment(
                                                        loan.normal_credit.LOAN,
                                                        loan.normal_credit
                                                            .LOANS,
                                                        loan.normal_credit
                                                            .DAYINIT,
                                                        loan.normal_credit
                                                            .DAYEND,
                                                        loan.normal_credit.DAYS,
                                                        loan.normal_credit
                                                            .DAYSMONTH,
                                                        loan.normal_credit
                                                            .DAYSONE,
                                                        loan.normal_credit
                                                            .DAYSTATUS,
                                                        loan.normal_credit
                                                            .DAYSDIFF,
                                                        loan.normal_credit
                                                            .CAPITAL,
                                                        loan.normal_credit
                                                            .DATEBEGIN,
                                                        loan.normal_credit
                                                            .SAMEMONTH
                                                    ).interest
                                                )
                                            }}
                                        </p>
                                    </div>
                                    <div class="row">
                                        <p
                                            class="font-weight-bold col-md-3 text-left"
                                        >
                                            Interés hasta hoy
                                        </p>
                                        <p class="col-md-3 text-left">
                                            Fecha:
                                            {{ convertDate(loan.paymentNow) }}
                                        </p>
                                        <p class="col-md-3 text-left">
                                            Interés:
                                            {{
                                                mymoney(
                                                    getPayment(
                                                        loan.current_credit
                                                            .LOAN,
                                                        loan.current_credit
                                                            .LOANS,
                                                        loan.current_credit
                                                            .DAYINIT,
                                                        loan.current_credit
                                                            .DAYEND,
                                                        loan.current_credit
                                                            .DAYS,
                                                        loan.current_credit
                                                            .DAYSMONTH,
                                                        loan.current_credit
                                                            .DAYSONE,
                                                        loan.current_credit
                                                            .DAYSTATUS,
                                                        loan.current_credit
                                                            .DAYSDIFF,
                                                        loan.current_credit
                                                            .CAPITAL,
                                                        loan.current_credit
                                                            .DATEBEGIN,
                                                        loan.current_credit
                                                            .SAMEMONTH
                                                    ).interestday
                                                )
                                            }}
                                        </p>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <vs-button @click="print" class="btnx" type="filled"
                >Imprimir</vs-button
            >
        </vx-card>
    </div>
</template>
<script>
import axios from "axios";
import Vue from "vue";
import { eight } from "../../utils/eight";
import VueHtmlToPaper from "vue-html-to-paper";
import VueMoment from "vue-moment";
const moment = require("moment");

Vue.use(VueMoment, {
    moment
});
const options = {
    name: "_blank",
    specs: ["fullscreen=yes", "titlebar=no", "scrollbars=no"],
    styles: [
        "/css/bootstrap.min.css",
        "/js/bootstrap.min.js",
        "/js/jquery.min.js",
        "/css/voucher.css"
    ]
};

Vue.use(VueHtmlToPaper, options);
export default {
    data() {
        return {
            loans: []
        };
    },
    methods: {
        mymoney(value) {
            return eight.money(parseFloat(value));
        },
        isNull(value) {
            if (value === null) return "----";
            return value;
        },
        getLoans() {
            let vm = this;
            axios
                .get("/api/getNotifications")
                .then(response => {
                    let loans = response.data;
                    vm.loans = loans.sort((a, b) =>
                        a.description > b.description ? 1 : -1
                    );
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getDateNow() {
            return moment()
                .locale("es")
                .format("LL");
        },
        convertDate(date) {
            return moment(date)
                .locale("es")
                .format("LL");
        },
        print() {
            this.$htmlToPaper("printMe");
        },
        parseDecimalFixed(value) {
            return parseFloat(value).toFixed(2);
        },
        parseDecimal(value) {
            return parseFloat(this.parseDecimalFixed(value));
        },
        getPayment(
            loan,
            loans,
            dayinit,
            dayend,
            days,
            daysmonth,
            daysone,
            daystatus,
            daysdiff,
            capital,
            datebegin,
            samemonth
        ) {
            let vm = this;
            let interestday = 0;
            let interest = 0;
            if (loans.length > 0) {
                // MENOR O IGUAL QUE DOS
                if (
                    daystatus !== "IGUAL" &&
                    daysdiff <= 2 &&
                    samemonth == true
                ) {
                    let newDays = 0;
                    if (daystatus === "MENOR") newDays = days + daysdiff;
                    else newDays = days - daysdiff;
                    interestday = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * newDays
                        )
                    );
                    interest = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * daysmonth
                        )
                    );
                    daystatus = "IGUAL";
                } else if (
                    daystatus !== "IGUAL" &&
                    daysdiff <= 2 &&
                    samemonth == false
                ) {
                    interestday = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * daysmonth
                        )
                    );
                    interest = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * daysmonth
                        )
                    );
                    daystatus = "IGUAL";
                }
                // EXACTAMENTE IGUAL SAME MONTH TRUE
                else if (daystatus === "IGUAL" && samemonth == true) {
                    interestday = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * days
                        )
                    );
                    interest = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * daysmonth
                        )
                    );
                }
                // EXACTAMENTE IGUAL SAME MONTH FALSE
                else if (daystatus === "IGUAL" && samemonth == false) {
                    interestday = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * daysmonth
                        )
                    );
                    interest = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * daysmonth
                        )
                    );
                }
                // MENOR
                else if (daystatus === "MENOR") {
                    interestday = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * days
                        )
                    );
                    interest = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * daysmonth
                        )
                    );
                }
                // MAYOR
                else if (daystatus === "MAYOR") {
                    let amountinfringment = 0;
                    if (parseInt(loan.amount) >= parseInt(0) && parseInt(loan.amount) <= parseInt(5000)) {
                        amountinfringment = vm.parseDecimal(
                            vm.parseDecimal(10) * vm.parseDecimal(daysdiff)
                        );
                    } else if (parseInt(loan.amount) > parseInt(5000) && parseInt(loan.amount) <= parseInt(10000)) {
                        amountinfringment = vm.parseDecimal(
                            vm.parseDecimal(15) * vm.parseDecimal(daysdiff)
                        );
                    }
                    else if (parseInt(loan.amount) > parseInt(10000)) {
                        amountinfringment = vm.parseDecimal(
                            vm.parseDecimal(20) * vm.parseDecimal(daysdiff)
                        );
                    }
                    // BEGIN CALCULATE INTEREST / INTERESTDAY
                    interestday = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * daysmonth
                        ) + amountinfringment
                    );
                    interest = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * daysmonth
                        )
                    );
                    // END CALCULATE INTEREST / INTERESTDAY
                }
            } else {
                capital = loan.monthlyAmount;
                // ES IGUAL O DOS DIAS ANTES O DOS DIAS DESPUES
                if (
                    daystatus !== "IGUAL" &&
                    daysdiff <= 2 &&
                    samemonth == true
                ) {
                    let newDays = 0;
                    if (daystatus === "MENOR") newDays = days + daysdiff;
                    else newDays = days - daysdiff;
                    interestday = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * newDays
                        )
                    );
                    interest = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * daysmonth
                        )
                    );
                    daystatus = "IGUAL";
                }
                // ES IGUAL O DOS DIAS ANTES O DOS DIAS DESPUES
                else if (
                    daystatus !== "IGUAL" &&
                    daysdiff <= 2 &&
                    samemonth == false
                ) {
                    interestday = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * daysmonth
                        )
                    );
                    interest = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * daysmonth
                        )
                    );
                    daystatus = "IGUAL";
                }
                // EXACTAMENTE IGUAL SAME MONTHE TRUE
                else if (daystatus === "IGUAL" && samemonth == true) {
                    interestday = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * days
                        )
                    );
                    interest = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * daysmonth
                        )
                    );
                }
                // EXACTAMENTE IGUAL SAME MONT FALSE
                else if (daystatus === "IGUAL" && samemonth == false) {
                    vm.interestday = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * daysmonth
                        )
                    );
                    interest = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * daysmonth
                        )
                    );
                }

                // MENOR
                else if (daystatus === "MENOR") {
                    interestday = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * days
                        )
                    );
                    interest = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * daysmonth
                        )
                    );
                }
                // MAYOR
                else if (daystatus === "MAYOR") {
                    let amountinfringment = 0;
                    if (parseInt(loan.amount) >= parseInt(0) && parseInt(loan.amount) <= parseInt(5000)) {
                        amountinfringment = vm.parseDecimal(
                            vm.parseDecimal(10) * vm.parseDecimal(daysdiff)
                        );
                    } else if (parseInt(loan.amount) > parseInt(5000) && parseInt(loan.amount) <= parseInt(10000)) {
                        amountinfringment = vm.parseDecimal(
                            vm.parseDecimal(15) * vm.parseDecimal(daysdiff)
                        );
                    }
                    else if (parseInt(loan.amount) > parseInt(10000)) {
                        amountinfringment = vm.parseDecimal(
                            vm.parseDecimal(20) * vm.parseDecimal(daysdiff)
                        );
                    }
                    // BEGIN CALCULATE INTEREST / INTERESTDAY
                    interestday = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * daysmonth
                        ) + amountinfringment
                    );
                    interest = Math.ceil(
                        vm.parseDecimal(
                            vm.parseDecimal(
                                vm.parseDecimal(
                                    vm.parseDecimal(loan.balance) *
                                        vm.parseDecimal(
                                            vm.parseDecimal(loan.percentage) /
                                                100
                                        )
                                ) / daysmonth
                            ) * daysmonth
                        )
                    );
                    // END CALCULATE INTEREST / INTERESTDAY
                }
            }
            return {
                interest,
                interestday
            };
        }
    },
    mounted() {
        this.getLoans();
    }
};
</script>
