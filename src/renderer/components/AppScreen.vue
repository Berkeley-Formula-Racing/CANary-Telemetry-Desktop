<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar, Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  name: 'App',
  components: {
    Bar,
    Line
},
  data() {
    return {
      window: {
            width: 0,
            height: 0
      },
      rpmData: {
        labels: [0,1,2,3,4,5,6,7,8,9,10],
        datasets: [{
          label: 'RPM',
          backgroundColor: '#000000',
          data: [2000, 2500, 1600, 1900, 2500, 3000, 6000, 5000, 4800, 7200, 2000] }
        ]
      },
      batteryData: {
        labels: [0,1,2,3,4,5,6,7,8,9,10],
        datasets: [{
          label: 'Battery Voltage',
          backgroundColor: '#000000',
          data: [12.1, 12.2, 12.1, 12.1, 11.0, 10.5, 12.2, 12.3, 12.2, 12.1, 12.2] }
        ]
      },
      brakePressureData: {
        labels: [0,1,2,3,4,5,6,7,8,9,10],
        datasets: [{
          label: 'Brake Presure',
          backgroundColor: '#000000',
          data: [5, 100, 200, 700, 500, 350, 20, 75, 100, 650, 200] }
        ]
      },
      lineOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  computed: {
      chartData() { return /* mutable chart data */ },
      chartOptions() { return /* mutable chart options */ }
  },
  methods: {
      handleResize() {
          this.window.width = window.innerWidth;
          this.window.height = window.innerHeight;
      },
      addData(){
        console.log(this.rpmData)
        this.rpmData.datasets[0].data = this.rpmData.datasets[0].data.concat([2000]);
        this.rpmData.labels = this.rpmData.labels.concat([12]);
        // Chart.update();
      }
  },
  created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
  },
  destroyed() {
      window.removeEventListener('resize', this.handleResize);
  },
  
}
</script>


<template>
  <body>
  <div id="sidebar" class="d-flex flex-column flex-shrink-0 bg-dark">
    <a href="/" class="d-block p-3 link-dark text-decoration-none" title="CANary Desktop" data-bs-toggle="App" data-bs-placement="center">
      <!-- <svg class="bi pe-none" width="40" height="32"> <use xlink:href="#bootstrap"/></svg> -->
      <img src="./icons/bird.png" alt="Home" width="32" height="32">
      <span class="visually-hidden">Icon-only</span>
    </a>

    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li class="nav-item">
        <a href="#" class="nav-link active py-3 border-bottom rounded-0" aria-current="page" title="Home View" data-bs-toggle="tooltip" data-bs-placement="right">
          <img src="./icons/home.png" alt="Home" width="24" height="24">
        </a>
      </li>
      <li>
        <a href="#" class="nav-link py-3 border-bottom rounded-0" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
          <img src="./icons/creative-writing.png" alt="Home" width="24" height="24">
        </a>
      </li>
      <li>
        <a href="#" class="nav-link py-3 border-bottom rounded-0" title="Orders" data-bs-toggle="tooltip" data-bs-placement="right">
          <img src="./icons/3d-design.png" alt="Home" width="24" height="24">
        </a>
      </li>
      <li>
        <a href="#" class="nav-link py-3 border-bottom rounded-0" title="Products" data-bs-toggle="tooltip" data-bs-placement="right">
          <svg class="bi pe-none" width="24" height="24" role="img" aria-label="Products"><use xlink:href="#grid"/></svg>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link py-3 border-bottom rounded-0" title="Settings" data-bs-toggle="tooltip" data-bs-placement="right">
          <img src="./icons/gear.png" alt="Home" width="24" height="24">
        </a>
      </li>
    </ul>
    <!-- <div class="dropdown border-top">
      <a href="#" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" class="rounded-circle">
      </a>
      <ul class="dropdown-menu text-small shadow">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div> -->
  </div >

  <div class="row">
    <div class="column1">
      <h3 class="headerText">RPM</h3>
      <div id="lineChart" class="chart-container" style="position: relative;">
        <Line id="L" :data="rpmData" :options="lineOptions"></Line>
      </div>
      
      <div class="horizontalgap" style="width:10px"></div>
      <h3 class="headerText">Voltage</h3>
      <div id="lineChart" class="chart-container" style="position: relative;">
        <Line id="L" :data="batteryData" :options="lineOptions"></Line>
      </div>

      <div class="horizontalgap" style="width:10px"></div>
      <h3 class="headerText">Brake Pressure</h3>
      <div id="lineChart" class="chart-container" style="position: relative;">
        <Line id="L" :data="brakePressureData" :options="lineOptions"></Line>
      </div>

      <div class="horizontalgap" style="width:10px"></div>

      <div class="row">
        <div class="column">
          <h3 class="headerText">Engine Temperature</h3>
          <div id="textContainer" class="chart-container" style="position: relative;">
            <p class="largeText">200°C</p>
          </div>
        </div>
        <div class="column">
          <h3 class="headerText">Current Draw</h3>
          <div id="textContainer" class="chart-container" style="position: relative;">

            <div class="row">
              <div class="column3">
                <div class="horizontalgap2" style="width:10px"></div>
                <ul class="ul.bText">
                  <li class="bText"><strong>Label 1:</strong> 1A</li>
                  <li class="bText"><strong>Label 2:</strong> 1A</li>
                  <li class="bText"><strong>Label 3:</strong> 1A</li>
                  <li class="bText"><strong>Label 4:</strong> 1A</li>
                </ul>
              </div>
              <div class="column3">
                <div class="horizontalgap2" style="width:10px"></div>
                <ul class="ul.bText">
                  <li class="bText"><strong>Label 5:</strong> 1A</li>
                  <li class="bText"><strong>Label 6:</strong> 1A</li>
                  <li class="bText"><strong>Label 7:</strong> 1A</li>
                  <li class="bText"><strong>Label 8:</strong> 1A</li>
                </ul>
              </div>
              <div class="column3">
                <p class="largeText">1A</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
    <div class="column2">

      <h3 class="headerText">Sensor List</h3>
      <div id="textContainer" class="chart-container" style="position: relative;">
        <div class="horizontalgap" style="width:10px"></div>
        <div class="row">
          <div class="column4">
            <ul class="bText">
              <li class="bText">Sensor 1</li>
              <li class="bText">Sensor 2</li>
              <li class="bText">Sensor 3</li>
              <li class="bText">Sensor 4</li>
              <li class="bText">Sensor 5</li>
              <li class="bText">Sensor 6</li>
              <li class="bText">Sensor 7</li>
              <li class="bText">Sensor 8</li>
            </ul>
          </div>
          <div class="column4">
            <ul class="bText">
              <li class="bText">Sensor 9</li>
              <li class="bText">Sensor 10</li>
              <li class="bText">Sensor 11</li>
              <li class="bText">Sensor 12</li>
              <li class="bText">Sensor 13</li>
              <li class="bText">Sensor 14</li>
              <li class="bText">Sensor 15</li>
              <li class="bText">Sensor 16</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="horizontalgap" style="width:10px"></div>
      <h3 class="headerText">Safety Icons</h3>
      <div id="textContainer" class="chart-container" style="position: relative;">
        <p class="largeText">Text</p>
      </div>

      <div class="horizontalgap" style="width:10px"></div>
      <h3 class="headerText">Battery Voltage</h3>
      <div id="textContainer" class="chart-container" style="position: relative;">
        <p class="largeText">13.27 V</p>
      </div>

      <div class="horizontalgap" style="width:10px"></div>
      <h3 class="headerText">Placeholder</h3>
      <div id="textContainer" class="chart-container" style="position: relative;">
        <p class="li.bText">Category 1</p>
              <select name="category1" id="cat1" multiple>
                <option value="sensor1">Sensor 1</option>
                <option value="sensor2">Sensor 2</option>
                <option value="sensor3">Sensor 3</option>
                <option value="sensor4">Sensor 4</option>
              </select>
      </div>

    </div>
  </div>

  
  <!-- <h1>({{this.window.height}}) x {{ this.window.width }}</h1> -->
  <button @click="addData">Click</button>
</body>
</template>

<style scoped>
#sidebar {
  width: 5%;
  float: left;
}

#lineChart {
  vertical-align: top;
  float: middle;
  height: 50%;
  width: 100%;
  background: #FFFFFF;
  border: 5px solid rgb(122, 124, 238);
}

#textContainer {
  vertical-align: top;
  float: middle;
  height: 50%;
  width: 100%;
  background: #FFFFFF;
  border: 5px solid rgb(122, 124, 238);
}


</style>