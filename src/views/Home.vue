<template>
  <div>
    <!-- loading -->
    <div class="loadingAnimation" v-if="isLoading">
      <div class="text-center">
        <h3 class="text-success h4">載入中 請稍候...</h3>
        <i class="fas fa-spinner fa-spin fa-3x text-danger"></i>
      </div>
    </div>

    <!-- content -->
    <section class="preFade" :class="{'fadeIn': !isFade}">
      <div class="content preFade" :class="{'fadeIn': !isFade}">
        <!-- leftSide -->
        <div class="computerleftSide d-flex align-items-center justify-content-center flex-column px-4">
          <div class="mt-auto">
            <h1 class="h3 text-white">高雄旅遊資訊網</h1>
            <select class="form-control mt-2" v-model="currentZone">
              <option value="" disabled selected>請選擇行政區...</option>
              <option value="">全部區域</option>
              <option :value="item" v-for="item in locations" :key="item.id"> {{ item }} </option>
            </select>
          </div>
          <div class="mt-auto mb-3">
            <ul class="d-flex justify-content-center text-center p-0 mb-0">
              <li class="list-unstyled mx-2 h4"><a href="https://www.facebook.com/YuTsungChih" target="_blank"><i class="fab fa-facebook text-white"></i></a></li>
              <li class="list-unstyled mx-2 h4"><a href="https://www.instagram.com/youxiaaaaaa/" target="_blank"><i class="fab fa-instagram text-white"></i></a></li>
              <li class="list-unstyled mx-2 h4"><a href="https://github.com/Youxiaaa" target="_blank"><i class="fab fa-github-alt text-white"></i></a></li>
            </ul>
              <h2 class="h6 text-white">Copyright &copy; 2021 YoYo游</h2>
          </div>
        </div>
        <div class="leftSide d-flex align-items-center justify-content-center flex-column px-4" :class="{'leftSideMove': sideMove}">
          <div class="leftSideBtn">
            <div class="d-flex justify-content-center mt-2">
              <h2 class="text-white" @click="sideMove = !sideMove" v-if="sideMove">&laquo;</h2>
              <h2 class="text-white" @click="sideMove = !sideMove" v-else>&raquo;</h2>
            </div>
          </div>
          <div class="mt-auto">
            <h1 class="h3 text-white mt-4">高雄旅遊資訊網</h1>
            <select class="form-control mt-2" v-model="currentZone">
              <option value="" disabled selected>請選擇行政區...</option>
              <option value="">全部區域</option>
              <option :value="item" v-for="item in locations" :key="item.id"> {{ item }} </option>
            </select>
          </div>
          <div class="mt-auto mb-3">
            <ul class="d-flex justify-content-center text-center p-0 mb-0">
              <li class="list-unstyled mx-2 h4"><a href="https://www.facebook.com/YuTsungChih" target="_blank"><i class="fab fa-facebook text-white"></i></a></li>
              <li class="list-unstyled mx-2 h4"><a href="https://www.instagram.com/youxiaaaaaa/" target="_blank"><i class="fab fa-instagram text-white"></i></a></li>
              <li class="list-unstyled mx-2 h4"><a href="https://github.com/Youxiaaa" target="_blank"><i class="fab fa-github-alt text-white"></i></a></li>
            </ul>
            <h2 class="h6 text-white">Copyright &copy; 2021 YoYo游</h2>
          </div>
        </div>
        <!-- rightSide -->
        <div class="computerrightSide">
          <div class="container">
            <div class="row">
              <div class="col-md-3 my-3" v-for="item in filterData[currentPage]" :key="item.id">
                <div class="card h-100" @click="checkDetail(item)">
                  <div class="card-header p-0">
                    <img v-lazy="item.Picture1" :alt="item.Picdescribe1" height="150px" width="100%">
                  </div>
                  <div class="card-body p-0 pl-3 py-3 bg-white">
                    <h2 class="h6 text-secondary font-fix"> {{ item.Name }} </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <!-- pagination -->
            <nav aria-label="Page navigation example" class="d-flex justify-content-center my-5" v-if="filterData.length > 2">
              <ul class="pagination">
                <li class="page-item" :class="{'pageDisabled': currentPage === 0}">
                  <a class="page-link text-success" href="#" aria-label="Previous" @click.prevent="currentPage -= 1">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item" v-for="item in filterData.length" :key="item.id" :class="{'active': currentPage === item - 1}"><a class="page-link text-success" href="#" @click.prevent="currentPage = item - 1" :class="{'pageActive': currentPage === item - 1}"> {{ item }} </a></li>
                <li class="page-item" :class="{'pageDisabled': currentPage === filterData.length - 1}">
                  <a class="page-link text-success" href="#" aria-label="Next" @click.prevent="currentPage += 1">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
        </div>
        <div class="rightSide px-4" :class="{'rightSideMove': sideMove}">
          <!-- 遮罩 -->
          <div class="curtain" :class="{'curtainShow': sideMove}"></div>
          <div class="container">
            <div class="row">
              <div class="col-md-3 my-3" v-for="item in filterData[currentPage]" :key="item.id">
                <div class="card h-100" @click="checkDetail(item)">
                  <div class="card-header p-0">
                    <img v-lazy="item.Picture1" :alt="item.Picdescribe1" height="200px" width="100%">
                  </div>
                  <div class="card-body p-0 pl-3 py-3 bg-white">
                    <h2 class="h6 text-secondary"> {{ item.Name }} </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <!-- pagination -->
            <div class="d-flex justify-content-center my-5" v-if="filterData.length > 1">
              <span class="h5 text-secondary d-flex align-self-center">第</span>
              <select v-model="currentPage" class="mx-3 p-2">
                <option :value="item - 1" v-for="item in filterData.length" :key="item.id"> {{ item }} </option>
              </select>
              <span class="h5 text-secondary d-flex align-self-center">頁</span>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      data: [],
      currentPage: 0,
      locations: [
        '鹽埕區', '鼓山區', '左營區', '楠梓區', '三民區', '新興區', '前金區', '苓雅區', '前鎮區', '旗津區', '小港區', '鳳山區', '林園區', '大寮區', '大樹區', '大社區', '仁武區', '鳥松區', '岡山區', '橋頭區', '燕巢區', '田寮區', '阿蓮區', '路竹區', '湖內區', '茄萣區', '永安區', '彌陀區', '梓官區', '旗山區', '美濃區', '六龜區', '甲仙區', '杉林區', '內門區', '茂林區', '桃源區', '那瑪夏區'
      ],
      currentZone: '',
      isFade: true,
      sideMove: false
    }
  },
  computed: {
    filterData () {
      const vm = this
      const newData = []
      let filterData = []

      if (vm.currentZone !== '') {
        filterData = JSON.parse(sessionStorage.getItem('localData')).filter((item) => item.Add.indexOf(vm.currentZone) !== -1)
        vm.currentPage = 0
        vm.sideMove = false
      } else {
        filterData = JSON.parse(sessionStorage.getItem('localData'))
        vm.sideMove = false
      }

      filterData.forEach((item, i) => {
        if (i % 32 === 0) {
          newData.push([])
        }
        const page = parseInt(i / 32)
        newData[page].push(item)
      })
      return newData
    }
  },
  methods: {
    checkDetail (item) {
      const vm = this
      if (vm.currentZone === '') {
        vm.currentZone = '全部區域'
      }
      vm.isFade = !vm.isFade
      setTimeout(() => {
        vm.$router.push(`detail/${item.Id}`)
      }, 300)
      setTimeout(() => {
        vm.$bus.$emit('getDetail', item, vm.currentZone, vm.currentPage)
      }, 400)
    }
  },
  created () {
    const vm = this
    const api = 'https://api.kcg.gov.tw/api/service/get/9c8e1450-e833-499c-8320-29b36b7ace5c'
    vm.isLoading = true

    if (sessionStorage.getItem('localData') !== null) {
      vm.isLoading = false
      vm.isFade = false
    } else {
      vm.$http.get(api).then((res) => {
        vm.isLoading = false
        vm.isFade = false
        vm.data = res.data.data.XML_Head.Infos.Info
        sessionStorage.setItem('localData', JSON.stringify(res.data.data.XML_Head.Infos.Info))
      })
    }
    vm.$bus.$on('getZone', (currentZone, currentPage) => {
      vm.currentZone = currentZone
      vm.currentPage = currentPage
    })
  }
}
</script>
