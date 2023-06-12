<template>
  <div>
    <p>name: {{ selectedItem.name }}</p>
    <p>Description: {{ selectedItem.description }}</p>
    <p>Created by: {{ selectedItem.createdby }}</p>
  </div>
</template>

<script>
import { api } from 'src/boot/axios'

export default {
  data() {
    return {
      selectedItem: {}
    }
  },
  mounted() {
    const id = this.$route.params.id
    api.get(`/manage/nutrition/cuisines/${id}`)
    .then(response => {
      this.selectedItem = response.data
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>






