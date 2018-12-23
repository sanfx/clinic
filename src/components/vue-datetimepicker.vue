<template>
	 <div class='input-group date col-sm'>
        <input type='text' class="form-control" />
        <span class="input-group-addon">
            <span class="glyphicon glyphicon-calendar sm"></span>
        </span>
    </div>
</template>

<script>
var $ = window.jQuery = require('jquery')
import moment from 'moment'
import eonosdandatetimepicker from 'eonasdan-bootstrap-datetimepicker'

export default {
  name: 'vue-datetimepicker',
  data () {
    return {
      value: ''
    }
  },
  watch: {
    options: function (options) {
      // update options
      $(this.$el).datetimepicker({ data: options })
    }
  },
  mounted: function () {
    var vm = this
    var mycomp = $(this.$el).datetimepicker({format: "YYYY/MM/DD HH:mm"})
    mycomp.on('dp.change', function (e) {
      vm.value = e.date.format("YYYY/MM/DD HH:mm ")
      vm.$emit('change', vm.value)
    })
  },
  destroyed: function () {
    $(this.$el).off().datetimepicker('destroy')
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>