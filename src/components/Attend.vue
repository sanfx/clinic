<template>
    <!--https://www.techiediaries.com/vue-axios-tutorial/#Using_Axios_with_Vue-->
    <div id="form-edit">
        <!--<form id="form-edit" v-on:submit="saveRecord">-->
            <div class="ui form-style-2 form-control" >
                <div class="form-style-2-heading" >Attend In Patients</div>
                <div class="ui form" >
                    <div>
                        <div class="alignLabel">
                            <label for="patientName">
                                <span>Patient Name <span class="required">*</span>
                                </span>
                            </label>
                        </div>
                        For debugging: {{patientName}}
                        <div id="newPatientInput">
                            <input type="text" v-model="patientName" id="autocomplete">
                        </div>
                    </div>
                    <br/>
                    <div class="alignLabel">
                        <table border="0">
                            <tr>
                                <td style="width=50%">
                                    <select  @change="relationShipSet()" name="" id="" v-model="selectedRelationship">
                                        <option style="height=150px" :value="n" v-for="n in relationships">{{n.name}}</option>
                                    </select>
                                </td>
                                <td style="vertical-align: middle;">&nbsp; of &nbsp; </td>
                                <td style="width:335px">
                                    <input type="text" @blur="getPatientProfile"  v-model="nameOfrelative">
                                    </input>

                                </td>
                            </tr>
                        </table>
                    </div>

                    <div>
                        <div  class="alignLabel">
                            <label for="attendType"><span>Attend Type <span class="required">*</span></span></label>
                        </div>
                        <div>
                            <select>
                                <option v-model="attendType" :value="n" v-for="n in ['Please select', 'Appointment', 'Walk-in']">{{n}}</option>
                            </select>
                        </div>
                    </div>
                <div>
                    <div class="alignLabel">
                        <label for="dateTimelabel">
                            <span id="dateTimelabel"style="width:100%; text-align: left;">Date/Time of visit: <span class="required">*</span>
                            </span>
                        </label>
                    </div>
                    <div>
                        <vue-datetimepicker @change="handleChange($event)"></vue-datetimepicker>
                    </div>
                </div>
                    <br>
                <div class="alignLabel">
                <table border="0" id="cssTable" style="width: 100%"><tr>
                    <td>
                        <label for="age"><span>Age <span class="required">*</span></span></label>
                    </td>
                    <td>
                        <select v-model="age" >
                            <option :value="n" v-for="n in 121">{{n}}</option>
                        </select>
                    </td>
                    <td>
                        &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    </td>
                    <td>
                        <label for="gender"><span>Gender<span class="required">*</span></span></label>
                    </td>
                    <td>
                        <input type="radio"
                               id="male"
                               value="Male"
                               v-model="gender"> Male &nbsp;
                    </td>

                    <td>
                        <input type="radio"
                               id="female"
                               value="Female"
                               v-model="gender"> Female
                    </td>
                </tr>
                </table>
                </div>
                <div>
                <label>
                    <span>Department <span class="required">*</span></span>
                </label>
                </div>
                <div>
                    <select name="" id="" v-model='selectedDepartment'>
                        <option :value="n" v-for="n in departments">{{n.name}}</option>
                    </select>
                </div>
                <div>
                    <div class="alignLabel">
                        <label for="mobilePhone"><span>Mobile <span class="required">*</span></span></label>
                    </div>
                    <div>
                        <input type="text" v-model="contactNumber"></input>
                    </div>
                </div>
                    <div>
                        <div class="alignLabel">
                            <label for="email"><span>Email </span></label>
                        </div>
                        <div>
                            <input type="text" v-model="email"></input>
                        </div>
                    </div>
                <div>
                    <div class="alignLabel">
                        <label>
                            <span>Village/City <span class="required">*</span></span>
                        </label>
                    </div>
                    <div>
                        <input  type="text" v-model="townCity"></input></label>
                    </div>
                </div>

                <div>
                <div class="alignLabel">
                    <label for="address"><span>Address
                     </span>    </label></div>
                </div>

                <div class="alignLabel">
                    <textarea-autosize
                            placeholder="optionally enter full address here..."
                            ref="someName"
                            v-model="address"
                            :min-height="30"
                            :max-height="350"
                            @blur.native="onBlurTextarea"
                    ></textarea-autosize>
                </div>

                </div>
                <br>
                <div  class="alignBtn">
                    <label><span>&nbsp;</span><input type="submit" v-on:click.prevent="generateSlip()" value="Submit" />
                    </label>
                </div>

            <br>
            <h3 id="slip" ref="report-link"></h3>
            <div v-bind:style="{ display: displayState }">
                <br>
                <br>
                <br>
                <br>
                <h3>Make sure you enter record correctly !</h3>
                <div id="printSlip">
                    <div class=" center-slip-header slipContainer">
                    <h2> {{selectedDepartment.clinicName}} Clinic</h2>
                        <br>
                    <small>For an appointment call +91-{{selectedDepartment.phone}} </small>
                    </div>
                    <br>
                    <table class="slipTable">
                        <tr>
                            <td style="font-style:bold;" class="alignLabel"><b>Patient Name:</b> </td>
                            <td>{{patientName}}  {{selectedRelationship.abbrev}}/o {{nameOfrelative}}</td>
                        </tr>
                        <tr>
                            <td class="alignLabel">
                                <b>Age: </b> &nbsp; {{age}} &nbsp; years
                            </td>
                            <td class="alignLabel">
                                <b>Gender:</b> &nbsp; {{gender}}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Village/City:</b>  &nbsp; {{townCity}}
                            </td>
                            <td class="alignLabel">
                                <b>Landline/ Mobile: </b> &nbsp; {{contactNumber}}
                            </td>
                        </tr>
                        <tr>
                            <td class="alignLabel">
                                <b>Department: </b> {{selectedDepartment.name}}
                            </td>
                            <td>
                                &nbsp; &nbsp;<i>See </i>&nbsp; <b> Dr. {{selectedDepartment.doc}}</b>
                            </td>
                        </tr>
                        <tr>
                            <td class="alignLabel"> <b>Date/Time of Visit:</b></td>
                            <td>{{this.dateTime}}</td>
                        </tr>
                        <tr>
                            <td style="width: '60%';" class="alignLabel"><b>Patient Signature:</b></td>
                            <td align="left"> ........................................... </td>
                        </tr>
                    </table>
                </div>

                <div class="outerdiv">
                <div class="innerdiv alignLabel">
                    <input type="submit" v-on:click="editSlip()" value="Edit" />
                </div> &nbsp; &nbsp;
                <div class="innerdiv">
                        <input type="submit" v-on:click="saveRecord()" value=" Save" />
                </div>
                <div class="innerdiv alignBtn">
                    <input type="submit" v-on:click="printSlip()" value=" Save & Print" />
                </div>
                </div>
            </div>
                </div>
            <!--</form>-->
        </div>

</template>



<script>
    var $ = window.jQuery = require('jquery')

    import Vue from 'vue'
    import {APIService} from '../APIService';
    import {mapFields} from 'vuex-map-fields';
    import VueTextareaAutosize from 'vue-textarea-autosize'
    import printJS from 'print-js'
    import vuedatetimepicker from './vue-datetimepicker.vue'

    Vue.use(VueTextareaAutosize);

    const apiService = new APIService();
    export default {
        name: 'Attend',
        data : function (){
            return {
                patientName: "",
                patients: [],
                relatives: [],
                names: [],
                displayState: 'none',
                attendType: "",
                nameOfrelative: '',
                numberOfPatients: '',
                selectedDepartment: '',
                gender: '',
                email: '',
                patients: [],
                dateTime: '',
                selectedRelationship : 'Son',
                relationships : [
                    {name: 'Son', abbrev: 's'},
                    {name: 'Daughter', abbrev: 'd'},
                    {name: 'Wife', abbrev: 'w'}
                    ],
                department: '',
                departments : [
                        {name: 'Medicene', clinicName: 'Swarnkamal', doc: 'Kanwaljit Singh', phone: '9417089045'},
                    {name: 'Dental', clinicName: 'Vikas Dental', doc: 'Vikas', phone: '9815610902'}
                    ],
                townCity: '',
                contactNumber: '',
                address: '',
                age: '0',
                result: null,
            }
        },
        mounted() {

            if (typeof window.jQuery === "function") {
                jQuery("#autocomplete").autocomplete({
                    source: [
                        "c++",
                        "java",
                        "php",
                        "coldfusion",
                        "javascript",
                        "asp",
                        "ruby"
                    ]
                });
            } else {
                console.log("JQuery is not loaded");
            }
        },
        components: {
        'vue-datetimepicker': vuedatetimepicker,
        },
        created () {
            apiService.getnames(this.patientName).then(res => {
                this.names = res.names;

            console.log(res.names);
        })
        },
        methods: {

            addNewVisit: function(){
                var found = this.names.indexOf(this.patientName);
                if (found != -1){
                    apiService.getRelatives(this.patientName).then(res => {
                        this.relatives = res.relatives;
                        console.log(this.relatives);
                    })
//                    alert("Found profile of Patient: " + this.patientName + " !");
                    // TODO: call GetPatientProfile and do update
                }
            },
            getData: function(data){
                this.patientName = JSON.stringify(data, null, 4)
            console.log("getData called: " + this.patientName);
            },
            patientNameEntered: function(){
                var found = this.names.indexOf(this.patientName)
                if (found != -1){
                }
            },
            foundPatient: function(name){
              console.log("Found patient");
            },
            getPatientProfile: function(){
                console.log(this.relatives);
                var found = this.relatives.indexOf(this.nameOfrelative)
                {
                    // TODO: pull patient profile and update UI
                }
            },
            getnames: function(){
                apiService.getnames(this.patientName).then(res => {
                    this.names = res.names;
                })
            },
            handleChange: function(data){
                this.dateTime = data;
            },
            relationShipSet: function(){
                if (this.selectedRelationship.name == 'Son'){
                    this.gender = "Male"
                }
                else {
                    this.gender = "Female"
                }
            },
            changeValue: function(newValue) {
                this.selectedValue = newValue;
            },
            generateSlip: function() {
                window.location = "#slip"
                this.displayState = 'block';
            },
            printSlip: function(){
                printJS({
                    printable: 'printSlip',
                    type : 'html',
                    targetStyles: ['*'],
                });
            },
            dir: function d(object) {
                stuff = [];
                for (s in object) {
                    stuff.push(s);
                }
                stuff.sort();
                return stuff;
            },
            editSlip: function(){
                this.displayState = 'none';
                window.location = '#form-edit'
            },
            saveRecord: function(){
                var result = "";
                var data = {
                    "name":  this.patientName,
                    "townCity": this.townCity,
                    "contactnumber": this.contactNumber ,
                    "age": this.age,
                    "gender": this.gender,
                    "email": this.email,
                    "postalAddress": this.address,
                    "relation": this.selectedRelationship.name,
                    "relativeName": this.nameOfrelative,
                    "dateTimeofvisit":  this.dateTime,
                    "attendtype": this.attendType,
                    "department": this.department,
                    "doctor": this.selectedDepartment.doc
                }
                console.log(data);
                apiService.createPatient(data).then(res => {
                    this.resetForm()
                    this.displayState = 'none';
                    window.location = '#form-edit'
                    this.result = res.data
                    alert(this.result.message);

            });
            },
            resetForm: function() {
                this.patientName = ""
                this.townCity = ""
                this.contactNumber  = ""
                this.age = 0
                this.gender = ""
                this.email = ""
                this.address = ""
                this.selectedRelationship.name = ""
                this.nameOfrelative = null
                this.dateTime = ""
                this.attendType = ""
                this.department = ""
            },
            makePDF: function(){

                var doc = new jsPDF()

                doc.setFontSize('30')
                doc.setFontStyle('bold')
                doc.text(60, 10, '{selectedDepartment.clinicName} Clinic')

                doc.setFont('courier')
                doc.setFontSize('15')
                doc.setFontType('normal')
                doc.text(145, 20, 'Queue # ')
                doc.text(165, 20, ' 145SAT06')

                doc.setFont('helvetica')
                doc.setFontSize(18)
                doc.setFontType('bold')
                doc.text(10, 30, 'Patient Name: ')
                doc.setFontType('normal')
                doc.text(60, 30, 'Niki Lauda')

                doc.setFontStyle('bold')
                doc.text(95, 30, 's/o ')
                doc.setFontType('normal')
                doc.text(110, 30, {nameOfrelative})

                doc.setFontType('bold')
                doc.text(10, 40, 'Age: ')
                doc.setFontType('normal')
                doc.text(30, 40,  {age})

                doc.setFontType('bold')
                doc.text(60, 40, "Gender: ")
                doc.setFontType('normal')
                doc.text(86, 40, 'Male')
                doc.setFontType('bold')

                doc.setFontType('bold')
                doc.text(10, 50, 'Town / City: ')
                doc.setFontType('normal')
                doc.text(60, 50, {townCity})

                doc.setFontType('bold')
                doc.text(10, 60, 'Mobile: ')
                doc.setFontType('normal')
                doc.text(60, 60, '+1923232442')

                doc.setFontType('bold')
                doc.text(10, 70, 'Department: ')
                doc.setFontType('normal')
                doc.text(60, 70, 'Medicine')
                doc.setFontType('italic')
                doc.text(112, 70, 'See ')
                doc.setFontStyle('bold')
                doc.text(128, 70, 'Dr.')
                doc.text(138, 70, 'Kanwaljit Singh' )

                doc.setFontStyle('bold')
                doc.setFontSize(20)

                doc.text(10, 90, 'Date/Time: ')
                doc.setFontType('normal')
                doc.text(80, 90, '24/12/2018, 14:22')
                doc.setFontStyle('bold')
                doc.text(10, 110, 'Patient Signature:')
                doc.setFontType('normal')
                doc.text(80, 110, '................................')
                printJS('docs/printjs.pdf');
            }

        }
    }
</script>
<style >

    .input {
        position: relative;
        margin: $ ui-padding 0 ($ ui-padding *2);
        text-align: center;
        font-size: $ ui-font-size;

    @include mq('desk') {
        font-size: 14px;
    }
    }

    .form-style-2{
        max-width: 500px;
        padding: 20px 12px 10px 20px;
        font: 13px Arial, Helvetica, sans-serif;
        margin: 0 auto;
    }
    .form-style-2-heading{
        font-weight: bold;
        font-style: italic;
        border-bottom: 2px solid #000;
        margin-bottom: 20px;
        font-size: 15px;
        padding-bottom: 3px;
    }
    .form-style-2 label{
        display: block;
        margin: 0px 0px 15px 0px;
    }
    .form-style-2 label > span{
        width: 100px;
        font-weight: bold;
        float: left;
        padding-top: 4px;
        padding-right: 0px;
    }
    .form-style-2 span.required{
        color:red;
    }
    .form-style-2 input.input-field{
        width: 48%;
    }

    .form-style-2 input.input-field,
    .form-style-2 .textarea-field{
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        border: 1px solid #C2C2C2;
        box-shadow: 1px 1px 4px #EBEBEB;
        -moz-box-shadow: 1px 1px 4px #EBEBEB;
        -webkit-box-shadow: 1px 1px 4px #EBEBEB;
        border-radius: 3px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        padding: 10px;
        outline: none;
    }
    .form-style-2 .input-field:focus,
    .form-style-2 .textarea-field:focus{
        border: 1px solid #0C0;
    }
    .form-style-2 .textarea-field{
        height:100px;
        width: 55%;
    }
    select {
        border:1px solid #ccc;
        vertical-align:top;
        height:60px;
    }
    .form-style-2 input[type=submit],
    .form-style-2 input[type=button]{
        border: none;
        padding: 8px 15px 8px 15px;
        background: #4CAF50;
        color: #fff;
        box-shadow: 1px 1px 4px #DADADA;
        -moz-box-shadow: 1px 1px 4px #DADADA;
        -webkit-box-shadow: 1px 1px 4px #DADADA;
        border-radius: 3px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
    }
    .form-style-2 input[type=submit]:hover,
    .form-style-2 input[type=button]:hover{
        background: #EA7B00;
        color: #fff;
    }
    .alignLabel {
        display: overlay;
        position: relative;
        bottom: 0;
        left: 0;
        align: left;
    }

    .alignBtn {
        position: relative;
        text-align: right;
        align: right;
        vertical-align: bottom;
        border: 0;
        height: 0;
    }

    #cssTable td
    {
        height: 0;
        text-align: left;
        vertical-align: bottom;
    }
    .mytd {
        height: 0;
        text-align: left;
        vertical-align: bottom;
    }
    .outerdiv
    {

        /*background: red;*/
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items:center;
    }

    .innerdiv
    {
        height:40px;
        width: 100px;
        height: 0;
        margin: 2px;
        box-sizing: border-box;
        /*background: green;*/
    }
    select {
        border:1px solid #ccc;
        vertical-align:top;
        height:60px;
    }
    .parentNameOption {
        text-color:blue;
        width: 400px;
        text-decoration:none;
    }
    .slipContainer
    {
        text-align: left;
        padding: 15px;
    }
    .center-slip-header
    {
        display: inline-block;
        text-align: center;
        padding: 10px;
        background-color: #ddddd;
        margin: 15px;
        width: 100%;
        vertical-align: top;
    }
    .slipTable {
        padding: 20px;
        border: 1;
    }
</style>
