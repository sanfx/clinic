<template>
    <div>
        <div class="header"><h1>Doctor Check up & Treatment</h1></div>
        <form id="checkUpForm" v-on:submit="saveRecord">
            <div class="c1">
        <div id="wrapper">

            <div class="row">
                <div class="column first ">Name</div>
                <div class="column longColumn" style="text-align:left;">Jhudu Prasad</div>
                <div class="column">s/o</div>
                <div class="column longColumn"  style="text-align:left;">Dhag Prasad</div>
            </div>
            <div class="row">
                <div class="column first ">Age/Gender</div>
                <div class="column longColumn" style="text-align:left;">24/M</div>
                <div class="column longColumn" style="text-align:left;">Village/City</div>
                <div class="column " style="text-align:left;">Jhagra</div>
            </div>
            <div class="row">
                <div class="column first ">Contact</div>
                <div class="column longColumn"  style="text-align:left;">85217277720</div>
                <div class="column">Date/Ttime</div>
                <div class="column">12-12-2012</div>
            </div>
        </div>
        <hr>
        <div>
            <div class=" alignLabel" style="z-index:-1;">
                <label for="chiefComplaint"><span>Chief Complaint
                         </span>
                </label>
            </div>

            <div>
                <textarea style="float: left; width:100%; min-height:100px"
                        placeholder="Enter patient compaint here..."
                        ref="someName"
                        v-model="chiefComplaint"
                        widh="100%"
                ></textarea>
            </div>
        </div>
        <div>
            <div class=" alignLabel" style="z-index:-1;">
                <label for="symptoms"><span>Symptoms
                         </span>
                </label>
            </div>

            <div style="float: left; width:100%; min-height:100px">
                <vue-taggable-select
                        make-it-taggable="good!"
                        :taggable="true"
                        v-model="symptoms"
                        :options="['vomiting', 'fever','nausea','pain', 'somach-ache', 'headache', 'burns','heaviness']"
                        :required="true"
                ></vue-taggable-select>
            </div>
        </div>
        <div>
            <div class=" alignLabel" style="z-index:-1;">
                <label for="treatment"><span>Treatment
                         </span>
                </label>
            </div>

            <div>
                <textarea style="float: left; width:100%; min-height:100px"
                          ref="someName"
                          v-model="treatment"
                          widh="100%"
                ></textarea>
            </div>
        </div>
        <div>
            <div class=" alignLabel" style="z-index:-1;">
                <label for="prescription"><span>Prescription
                         </span>
                </label>
            </div>

            <div>
                <textarea style="float: left; width:100%; min-height:100px"
                          ref="someName"
                          v-model="prescription"
                          widh="100%"
                ></textarea>
            </div>
        </div>
        <div>
            <div class=" alignLabel" style="z-index:-1;">
                <label for="Referredto"><span>Referred to
                         </span>
                </label>
            </div>

            <div>
                <input style="float: left; width:100%; min-height:40px; font-size:20px;"
                          ref="someName"
                          v-model="referto"
                          widh="100%"
                ></input>
            </div>
        </div>
                <div class="alignBtn">
                    <label><span>&nbsp;</span><input type="submit" v-on:click.prevent="generateSlip()" value="Save and See next Patient" />
                    </label>
                </div>

    </div>

        </form>
    <div class="sidebar">Patient Queue</div>

    </div>
</template>

<script>
    import Vue from 'vue';
    import VueTaggableSelect from "vue-taggable-select";


    Vue.component('vue-taggable-select', VueTaggableSelect);

    export default {
        name: 'Checkup', //this is the name of the component/p];\;\
        data: function () {
            return {
                symptoms: null,
                chiefcomplaint: '',
                treatment:'',
                chiefComplaint: '',
                prescription: '',
                referto: ''
            }
        },
        methods: {
            saveRecord: function(e){


            }
        }
    }
</script>

<style scoped>
    #wrapper {
        min-width: 450px;
        height: auto;
        border: 1px solid black;
    }

    .row {
        padding: 4px;
    }
    .column {
        border: 0px solid;
        border-left: none;
        padding: 4px;
        display: table-cell;
    }

    .first {
        border-left: 0px solid;
    }

    .longColumn {
        min-width: 250px;
    }
    .c1{
        float:left;
        width:75%;
    }
    .alignLabel {
        display: overlay;
        position: relative;
        font-weight: bold;
        bottom: 0;
        left: 0;
        float: left;
        align: left;
    }
    .alignBtn {
        display: overlay;
        text-align: right;
        align: right;
        bottom: -150px;
        vertical-align: bottom;
        border: 0;
        height: 0;
        float: right;
    }

    .sidebar{
        float:right;
        width:25%;
    }
</style>