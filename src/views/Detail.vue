<template>
  <div>
    <div class="container preFade" :class="{'fadeIn': !isFade}">
      <div class="row mt-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-light">
            <li class="breadcrumb-item"><a href="#" class="text-success font-weight" @click.prevent="returnPage"> {{ currentZone }} </a></li>
            <li class="breadcrumb-item active" aria-current="page"> {{ data.Name }} </li>
          </ol>
        </nav>
      </div>
      <div class="row mt-5">
        <div class="col-md-6">
          <img :src="data.Picture1" :alt="data.Picdescribe1" width="100%">
        </div>
        <div class="col-md-6 d-flex flex-column">
          <h2> {{ data.Name }} </h2>
          <h3 class="h6 text-secondary mt-5 lh-fix"> {{ data.Description }} </h3>
          <small class="mt-auto"> {{ data.Add }} </small>
          <small> {{ data.Tel }} </small>
          <small> {{ data.Changetime }} </small>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-6">
          <p class="lh-fix">
            <span class="text-danger h3"> <i class="fas fa-info-circle"></i> 介 紹</span>
            <br>
            <br>
            {{ data.Toldescribe }}
          </p>
        </div>
        <div class="col-md-6">
          <div class="row d-flex flex-column">
            <div class="col">
              <p class="lh-fix">
                <span class="text-danger h3"> <i class="fas fa-car"></i> 交 通 方 式</span>
                <br>
                <br>
                {{ data.Travellinginfo }}
                <span v-if="!data.Travellinginfo">暫無交通路線資訊</span>
              </p>
            </div>
            <div class="col mt-5">
              <p class="lh-fix">
                <span class="text-danger h3"> <i class="far fa-clock"></i> 開 放 時 間</span>
                <br>
                <br>
                <i class="far fa-clock text-danger"></i> {{ data.Opentime }}
                <br>
                <br>
                <i class="fas fa-clipboard-check text-danger" v-if="data.Ticketinfo"></i> {{ data.Ticketinfo }}
                <br>
                <br>
                <i class="fas fa-car text-danger" v-if="data.Parkinginfo"></i> {{ data.Parkinginfo }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: {},
      currentZone: '',
      currentPage: 0,
      isFade: true
    }
  },
  methods: {
    returnPage () {
      const vm = this
      if (vm.currentZone === '全部區域') {
        vm.currentZone = ''
      }
      vm.$router.push('/')
      setTimeout(() => {
        vm.$bus.$emit('getZone', vm.currentZone, vm.currentPage)
      }, 50)
    }
  },
  created () {
    const vm = this

    vm.$bus.$on('getDetail', (item, currentZone, currentPage) => {
      vm.data = item
      vm.currentZone = currentZone
      vm.currentPage = currentPage
      vm.isFade = false
    })
  }
}
</script>
