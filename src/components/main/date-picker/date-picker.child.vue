<template>
  <div class="date-picker">
    Month: <input type="number" ref="monthPicker" @input="updateDate()"/>
    Year: <input type="number" ref="yearPicker" @input="updateDate()"/>
  </div>
</template>

<script>
  export default {
    name:'datePicker',
    props: [''],

    methods: {
      updateDate() {
        this.$emit('input', {
          month: +this.$refs.monthPicker.value,
          year: +this.$refs.yearPicker.value
        })
      }
    }
  };
</script>