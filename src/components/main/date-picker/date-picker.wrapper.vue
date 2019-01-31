<template>
  <div class="wrapper">
    <date-picker v-model="date"></date-picker>
    <p>
      Month: {{date.month}}
      Year: {{date.year}}
    </p>
  </div>
</template>

<script>
  import datePicker from './date-picker.child';

  export default {
    name:'datePickerWrapper',

    components: {
      datePicker
    },

    data() {
      return {
        date: {
          month: 1,
          year: 2017
        }
      }
    }
  }
</script>