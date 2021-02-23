<template>
  <div id="app">
    <h2>5x5 Yau Ranking</h2>
    <br>
    <v-simple-table>
      <template>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th><v-btn elevation="2" @click="doSort('single')">sort</v-btn></th>
            <th><v-btn elevation="2" @click="doSort('average')">sort</v-btn></th>
          </tr>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Single</th>
            <th>Average</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) of result" :key="item">
            <td>{{ index + 1 }}</td>
            <td>{{ item[0] }}</td>
            <td>{{ item[1] }}</td>
            <td>{{ item[2] }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      result: [],
      persons: [
        "2008UENO01", "2009OLSO01", "2011HOFF02", "2011RHEI01", "2012ITOR01",
        "2013FERT01", "2013GALA04", "2013KOBA01", "2015FIRM01", "2015GOWT01",
        "2015KUCA01", "2015MATT05", "2015MOHA10", "2015ROBI04", "2015TAKA05",
        "2016MORA24", "2016YENC01", "2017HONG17", "2017PALI04", "2017SZYS01",
        "2018PIKE01", "2018VASY01", "2009LIUE01", "2009YAUR01", "2007VALK01",
        "2010HULL01", "2010UTOM01", "2010WUIF01", "2012BEAH01", "2012GONZ10",
        "2012MCNE01", "2013WANG67", "2014CZAP01", "2014LEES01", "2014RAJE03",
        "2014VORL01", "2014WENW01", "2014YELI01", "2014ZAKR01", "2015CHNG01",
        "2015GROH02", "2015KOVA07", "2015OAKK01", "2015RAOJ01", "2015SING22",
        "2015STAU01", "2015WANG09", "2016KOLA02", "2016MART29", "2016MELN01",
        "2016NUNE11", "2017HUAN77", "2017KIRB01", "2015LEEJ12"
      ]
    }
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      var url = "https://www.worldcubeassociation.org/api/v0/persons?per_page=100&wca_ids=" + this.persons[0];
      for (var i = 1; i < this.persons.length; i++) {
        url += "," + this.persons[i]
      }
      this.axios.get(url)
        .then((response) => {
          var data = [];
          for (var i = 0; i < response.data.length; i++) {
            data.push([response.data[i].person.name,
                            this.timeToFloat(response.data[i].personal_records["555"].single.best),
                            this.timeToFloat(response.data[i].personal_records["555"].average.best)]);
          }
          this.result = data;
          this.doSort("average");
        })
        .catch((e) => {
          console.log(e);
        })
    },
    doSort: function(sortType) {
      if (sortType == "single") {
        this.result.sort(function(a, b) {
          return a[1] - b[1];
        });
      } else if (sortType == "average") {
        this.result.sort(function(a, b) {
          return a[2] - b[2];
        });
      }
    },
    timeToFloat: function(time) {
      var newTime = parseInt(time) / 100;
      if (parseInt(time) % 10 == 0) {
        newTime += "0";
      }
      return newTime;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
