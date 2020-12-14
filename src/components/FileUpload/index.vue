<template>
  <div class="upload">
    <el-upload
      :ref="chunkedUpload"
      :action="uploadUrl"
      :data="uploadData"
      :http-request="httpRequest"
      :show-file-list="false"
    >
      <div class="upload-wrap">
        <i class="icon el-icon-plus"></i>
      </div>
    </el-upload>
    <el-progress
      class="progress"
      v-if="progressFlag"
      :percentage="loadProgress"
      :show-text="false"
    ></el-progress>
  </div>
</template>

<script>
import SparkMD5 from "spark-md5";
export default {
  data() {
    return {
      uploadUrl: "http://192.168.40.220:10300/file/upload",
      uploadData: {},

      loadProgress: 0, // 动态显示进度条
      progressFlag: true, // 关闭进度条

      chunkSize: 1024 * 1024 * 0.01
    };
  },
  methods: {
    md5(file) {
      return new Promise((resolve, reject) => {
        const spark = new SparkMD5.ArrayBuffer();
        const fileReader = new FileReader();
        fileReader.onload = e => {
          spark.append(e.target.result);
          resolve(spark.end());
        };
        fileReader.onerror = () => {
          reject("error");
        };
        fileReader.readAsArrayBuffer(file);
      });
    },
    chunkedUpload() {},
    async httpRequest(file) {
      let fileRaw = file.file;

      // 整个文件 hash
      const fileHash = await this.md5(fileRaw);

      // 切片
      let chunkList = [];
      for (let i = 0; i < fileRaw.size; i = i + this.chunkSize) {
        chunkList.push(fileRaw.slice(i, i + this.chunkSize, fileRaw.size));
      }

      // 切片 hash
      let chunkHashList = await Promise.all(
        chunkList.map(async item => {
          return await this.md5(item);
        })
      );
      console.log(fileHash, chunkHashList);
    }
  }
};
</script>

<style lang="scss" scoped>
.upload {
  width: 300px;
  .upload-wrap {
    width: 300px;
    height: 160px;
    border: 2px solid #ccc;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin-bottom: 6px;
    .icon {
      font-size: 36px;
      color: #ccc;
    }
  }
}
</style>
