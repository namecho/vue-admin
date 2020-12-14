<template>
  <div class="home">
    <FileUpload />
  </div>
</template>
<script>
import FileUpload from "@/components/FileUpload";
export default {
  components: { FileUpload }
};
</script>
<style lang="scss" scoped>
.home {
  padding: 20px;
}
</style>
