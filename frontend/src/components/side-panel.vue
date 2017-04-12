<script>
import Highcharts from 'highcharts'
import jquery from 'jquery'
import filter from 'd3'

export default {
    data() {
        return {
            data: {
                apiURL: 'https://hrims.herokuapp.com/api/data/?year=2014',
                energy_data: null,
                selected_year: 2014,
                selected_state: 'AK',
                total_energy_consumption: null,
                renew_energy_consumption: null,
                ethanol_prod_loss_energy_consumption: null,
                ethanol_energy_consumption: null,
                geothermal_energy_consumption: null,
                hydrop_energy_consumption: null,
                solar_energy_consumption: null,
                woodwaste_energy_consumption: null,
                wind_energy_consumption: null,
                nuc_energy_consumption: null,
                fossil_energy_consumption: null,
                coal_energy_consumption: null,
                natural_gas_energy_consumption: null,
                petroleum_energy_consumption: null,
                int_import_energy_consumption: null,
                int_state_energy_consumption: null
            }
        }
    },
    created: function() {
        this.fetchEnergyData();
    },
    methods: {
        fetchEnergyData: function() {
            var self = this;
            fetch(self.apiURL)
              .then(function(response) {
                self.energy_data = response.json()
                console.log(response.json())
              })
            jquery.get(self.apiURL, function(data) {
                self.energy_data = data.responseJSON
                self.total_energy_consumption = self.energy_data.filter(function(d) {
                    return d.statecode == self.selectedState && d.msn == "TETCB" && d.year == self.selectedYear
                })
                self.renew_energy_consumption = self.energy_data.filter(function(d) {
                    return d.statecode == self.selectedState && d.msn == "RETCB" && d.year == self.selectedYear
                })
                self.ethanol_prod_loss_energy_consumption = self.energy_data.filter(function(d) {
                    return d.statecode == self.selectedState && d.msn == "EMLCB" && d.year == self.selectedYear
                })
                self.ethanol_energy_consumption = self.energy_data.filter(function(d) {
                    return d.statecode == self.selectedState && d.msn == "EMTCB" && d.year == self.selectedYear
                })
                self.geothermal_energy_consumption = self.energy_data.filter(function(d) {
                    return d.statecode == self.selectedState && d.msn == "GETCB" && d.year == self.selectedYear
                })
                self.hydrop_energy_consumption = self.energy_data.filter(function(d) {
                    return d.statecode == self.selectedState && d.msn == "HYTCB" && d.year == self.selectedYear
                })
                self.solar_energy_consumption = self.energy_data.filter(function(d) {
                    return d.statecode == self.selectedState && d.msn == "SOTCB" && d.year == self.selectedYear
                })
                self.woodwaste_energy_consumption = self.energy_data.filter(function(d) {
                    return d.statecode == self.selectedState && d.msn == "WWTCB" && d.year == self.selectedYear
                })
                self.wind_energy_consumption = self.energy_data.filter(function(d) {
                    return d.statecode == self.selectedState && d.msn == "WYTCB" && d.year == self.selectedYear
                })
                self.nuc_energy_consumption = self.energy_data.filter(function(d) {
                    return d.statecode == self.selectedState && d.msn == "NUETB" && d.year == self.selectedYear
                })
                self.fossil_energy_consumption = self.energy_data.filter(function(d) {
                    return d.statecode == self.selectedState && d.msn == "FFTCB" && d.year == self.selectedYear
                })
                self.coal_energy_consumption = self.energy_data.filter(function(d) {
                    return d.statecode == self.selectedState && d.msn == "CLTCB" && d.year == self.selectedYear
                })
                self.natural_gas_energy_consumption = self.energy_data.filter(function(d) {
                    return d.statecode == self.selectedState && d.msn == "NNTCB" && d.year == self.selectedYear
                })
                self.petroleum_energy_consumption = self.energy_data.filter(function(d) {
                    return d.statecode == self.selectedState && d.msn == "PMTCB" && d.year == self.selectedYear
                })
                self.int_import_energy_consumption = self.energy_data.filter(function(d) {
                    return d.statecode == self.selectedState && d.msn == "ELNIB" && d.year == self.selectedYear
                })
                self.int_state_energy_consumption = self.energy_data.filter(function(d) {
                    return d.statecode == self.selectedState && d.msn == "ELISB" && d.year == self.selectedYear
                })
            })
        }
    },
    props: ['mapId'],
    mounted() {
        jquery(function() {
            var myChart = Highcharts.chart('container', {
                title: {
                    text: self.selectedState + ' Energy Consumption in ' + self.selectedYear + ' Breakdown'
                },
                lang: {
                    drillUpText: "◁- Back"
                },
                subtitle: {
                    text: "(Billion Btu)",
                    align: "left"
                },
                chart: {
                    type: "column"
                },
                xAxis: {
                    type: "category"
                },
                yAxis: {
                    title: {
                        text: "Energy Consumption Amount"
                    }
                },
                legend: {
                    enabled: true
                },
                tooltip: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true
                        },
                        stacking: 'normal'
                    }
                },
                series: [{
                    name: 'Nuclear',
                    data: [{
                        name: 'Total Energy Consumption',
                        y: self.nuc_energy_consumption[0].data,
                        drilldown: 'Total Energy Consumption Breakdown'
                    }]
                }, {
                    name: 'Fossil Fuel',
                    data: [{
                        name: 'Total Energy Consumption',
                        y: self.fossil_energy_consumption[0].data,
                        drilldown: 'Total Energy Consumption Breakdown'
                    }]
                }, {
                    name: 'Renewable',
                    data: [{
                        name: 'Total Energy Consumption',
                        y: self.renew_energy_consumption[0].data,
                        drilldown: 'Total Energy Consumption Breakdown'
                    }]
                }],
                drilldown: {
                    drillUpButton: {
                        relativeTo: 'spacingBox',
                        position: {
                            y: 20,
                            x: 0
                        },
                        theme: {
                            fill: 'none',
                            stroke: 'none',
                            r: 0,
                            states: {
                                hover: {
                                    fill: 'none'
                                }
                            }
                        }
                    },
                    series: [{
                        name: 'Total Energy Consumption Breakdown',
                        colorByPoint: true,
                        id: 'Total Energy Consumption Breakdown',
                        data: [
                            [
                                'Nuclear', self.nuc_energy_consumption[0].data
                            ], { // keep it here so the color is rightname: 'fossil Fuel', y: fossil_energy_consumption[0].data, drilldown: "fossil Fuel Energy Consumption Breakdown"
                            }, {
                                name: 'Renewable',
                                y: self.renew_energy_consumption[0].data,
                                drilldown: 'Renewable Energy Consumption Breakdown'
                            },
                            [
                                'International Imports', self.int_import_energy_consumption[0].data
                            ],
                            ['Interstate Im-/Exports', self.int_state_energy_consumption[0].data]
                        ]
                    }, { // breakdown data
                        name: "Fossil Fuel Energy Consumption Breakdown",
                        id: "Fossil Fuel Energy Consumption Breakdown",
                        data: [
                            [
                                "Coal", self.fossil_energy_consumption[0].data
                            ],
                            [
                                'Natural Gas', self.natural_gas_energy_consumption[0].data
                            ],
                            ['Petroleum Products', self.petroleum_energy_consumption[0].data]
                        ]
                    }, {
                        name: "Renewable Energy Consumption Breakdown",
                        id: "Renewable Energy Consumption Breakdown",
                        data: [
                            [
                                'Fuel Ethanol (FE)', self.ethanol_energy_consumption[0].data
                            ],
                            [
                                'Geothermal', self.geothermal_energy_consumption[0].data
                            ],
                            [
                                'Hydropower', self.hydrop_energy_consumption[0].data
                            ],
                            [
                                'Solar', self.solar_energy_consumption[0].data
                            ],
                            [
                                'Wood & Waste', self.woodwaste_energy_consumption[0].data
                            ],
                            ['Wind', self.wind_energy_consumption[0].data]
                        ]
                    }]
                }
            })
        })
    }
}
</script>

Error: Source sample is missing.<style lang="scss"></style>

<template>
<!--<div class="Map" style="border: 1px solid black; width: 700px; float: left"></div>-->
<div id="container" style="width:300px%; height:400px;">
</div>
</template>
