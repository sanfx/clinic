<template>
    <div id="form-edit">
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
                    <div>
                        <input type="text" v-model="patientName"></input>
                    </div>
                </div>
                <div class="alignLabel">
                    <table border="0">
                        <tr>
                            <td style="width=30%">
                                <select name="" id="" v-model="selectedRelationship">
                                    <option style="height=150px" :value="n" v-for="n in relationships">{{n.name}}</option>
                                </select>
                            </td>
                            <td style="vertical-align: middle;">&nbsp; of &nbsp; </td>
                            <td style="width:335px">
                                <input class="parentNameOption" type="text" v-model="nameOfparent"></input>
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
            <div style="display:flex;flex-direction: column; padding: 10px">
                <div class="alignLabel">
                    <label for="dateTimelabel">
                        <span id="dateTimelabel"style="width:100%; text-align: left;">Date/Time of visit: <span class="required">*</span>
                        </span>
                    </label>
                </div>
                <div>
                    <vue-datetimepicker  @change="handleChange($event)"></vue-datetimepicker>
                </div>
                </div>
            <div class="alignLabel">
            <table border="0" id="cssTable"><tr>
                <td>
                    <label for="age"><span>Age <span class="required">*</span></span></label>
                </td>
                <td>
                    <select>
                        <option v-model="age" :value="n" v-for="n in 121">{{n}}</option>
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
                    <label>
                        <span>Town/City <span class="required">*</span></span>
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
            <div class="alignBtn">
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
                    <h2> {{selectedDepartment.parent}} Clinic</h2>
                    <small>For an appointment call +91-{{selectedDepartment.phone}} </small>
                    </div>
                    <br>
                    <table>
                        <tr>
                            <td style="font-style:bold;"><b>Patient Name:</b> </td>
                            <td>{{patientName}}  {{selectedRelationship.abbrev}}/o {{nameOfparent}}</td>
                        </tr>
                        <tr>
                            <td>
                                <b>Age: </b> &nbsp; {{age}} &nbsp;
                            </td>
                            <td>
                                <b>Gender: </b> &nbsp; {{gender}}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Town / City:</b>  &nbsp; {{townCity}}
                            </td>
                            <td>
                                <b>Landline/ Mobile: </b> &nbsp; {{contactNumber}}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Department: </b> {{selectedDepartment.name}}
                            </td>
                            <td>
                                &nbsp; &nbsp;<i>See </i>&nbsp; <b> Dr. {{selectedDepartment.doc}}</b>
                            </td>
                        </tr>
                        <tr>
                            <td> <b>Date/Time of Visit:</b></td>
                            <td>{{this.dateTime}}</td>
                        </tr>
                        <tr>
                            <td><b>Patient Signature:</b></td>
                            <td align="center"> ........................................... </td>
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
        </div>

</template>

<script>
    var $ = window.jQuery = require('jquery')
    import Vue from 'vue'
    import { mapFields } from 'vuex-map-fields';
    import VueTextareaAutosize from 'vue-textarea-autosize'
    import printJS from 'print-js'
    import vuedatetimepicker from './vue-datetimepicker.vue'

    Vue.use(VueTextareaAutosize)

// http://haixing-hu.github.io/vue-datetime-picker/
    export default {
        name: 'Attend',
        data : function (){
            return {
                patientName: "",
                displayState: 'block',
                attendType: "",
                nameOfparent: '',
                selectedDepartment: '',
                gender: '',
                dateTime: '',
                selectedRelationship : '',
                relationships : [{name: 'Son', abbrev: 'S'}, {name: 'Daughter', abbrev: 'D'}],
                department: '',
                departments : [{name: 'Medicene', parent: 'Swarnkamal', doc: 'Kanwaljit Singh', phone: '9417089045'},
                    {name: 'Dental', parent: 'Vikas Dental', doc: 'Vikas', phone: '9815610902'}],
                townCity: '',
                contactNumber: '',
                address: '',
                age: '0'
            }
        },
        components: {
        'vue-datetimepicker': vuedatetimepicker,

        },
        created() {
        },
        mounted: function() {

        },
        methods: {
            handleChange: function(data){
                this.dateTime = data;
            },
            changeValue: function(newValue) {
                this.selectedValue = newValue;
            },
            generateSlip: function() {
                window.location = "#slip"
                this.displayState = 'block';
            },
            printSlip: function(){
                printJS('printSlip', 'html', style="display: inline-block; text-align: center; padding: 30px; margin: 15px; text-align: center; padding: 15px; vertical-align: top;");
            },
            editSlip: function(){
                this.displayState = 'none';
                window.location = '#form-edit'
            },
        makePDF: function(){

            var doc = new jsPDF()

            doc.setFontSize('30')
            doc.setFontStyle('bold')
            doc.text(60, 10, '{selectedDepartment.parent} Clinic')

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
            doc.text(110, 30, {nameOfparent})

            doc.setFontType('bold')
            doc.text(10, 40, 'Age: ')
            doc.setFontType('normal')
            doc.text(30, 40, '29 years')

            doc.setFontType('bold')
            doc.text(60, 40, "Gender: ")
            doc.setFontType('normal')
            doc.text(86, 40, 'Male')
            doc.setFontType('bold')

            doc.setFontType('bold')
            doc.text(10, 50, 'Town / City: ')
            doc.setFontType('normal')
            doc.text(60, 50, 'Amreeka Ton')

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

            printJS('docs/printjs.pdf')
        }

        }
    }
</script>
<style scoped>
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
        text-align: center;
        padding: 15px;
    }
    .center-slip-header
    {
        display: inline-block;
        max-width: 300px;
        text-align: center;
        padding: 30px;
        background-color: #ddd;
        border-radius: 3px;
        margin: 15px;
        vertical-align: top;
    }
</style>