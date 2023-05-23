<template>
  <!-- 底部 -->
  <div class="footer">
    <div class="footer-container">
      <div class="copyright">
        <ul class="helpLink">
          <li>
            关于我们
          </li>
          
        </ul>
        <p>莆田学院新工科产业学院</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
.footer {
  margin-top: 50px;
  background-color: #c5e9fa;

  .footer-container {
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px;

    .copyright {
      padding: 20px;

      .helpLink {
        text-align: center;

        li {
          display: inline;
        }
      }
      p {
        margin: 10px 0;
        text-align: center;
      }
    }
  }
}
</style>
