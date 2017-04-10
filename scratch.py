state_codes = [
                    {'state_code': 'AL', 'state_name': 'Alabama'},
                    {'state_code': 'AK', 'state_name': 'Alaska'},
                    {'state_code': 'AL', 'state_name': 'Arizona'},
                    {'state_code': 'AZ', 'state_name': 'Arkansas'},
                    {'state_code': 'AR', 'state_name': 'California'},
                    {'state_code': 'CA', 'state_name': 'Colorado'},
                    {'state_code': 'CO', 'state_name': 'Connecticut'},
                    {'state_code': 'CT', 'state_name': 'Delaware'},
                    {'state_code': 'DC', 'state_name': 'Dist. of Columbia'},
                    {'state_code': 'FL', 'state_name': 'Florida'},
                    {'state_code': 'GA', 'state_name': 'Georgia'},
                    {'state_code': 'HI', 'state_name': 'Hawaii'},
                    {'state_code': 'ID', 'state_name': 'Idaho'},
                    {'state_code': 'IL', 'state_name': 'Illinois'},
                    {'state_code': 'IN', 'state_name': 'Indiana'},
                    {'state_code': 'IA', 'state_name': 'Iowa'},
                    {'state_code': 'KS', 'state_name': 'Kansas'},
                    {'state_code': 'KY', 'state_name': 'Kentucky'},
                    {'state_code': 'LA', 'state_name': 'Louisiana'},
                    {'state_code': 'ME', 'state_name': 'Maine'},
                    {'state_code': 'MD', 'state_name': 'Maryland'},
                    {'state_code': 'MA', 'state_name': 'Massachusetts'},
                    {'state_code': 'MI', 'state_name': 'Michigan'},
                    {'state_code': 'MN', 'state_name': 'Minnesota'},
                    {'state_code': 'MS', 'state_name': 'Mississippi'},
                    {'state_code': 'MO', 'state_name': 'Missouri'},
                    {'state_code': 'MT', 'state_name': 'Montana'},
                    {'state_code': 'NE', 'state_name': 'Nebraska'},
                    {'state_code': 'NV', 'state_name': 'Nevada'},
                    {'state_code': 'NH', 'state_name': 'New Hampshire'},
                    {'state_code': 'NJ', 'state_name': 'New Jersey'},
                    {'state_code': 'NM', 'state_name': 'New Mexico'},
                    {'state_code': 'NY', 'state_name': 'New York'},
                    {'state_code': 'NC', 'state_name': 'North Carolina'},
                    {'state_code': 'ND', 'state_name': 'North Dakota'},
                    {'state_code': 'OH', 'state_name': 'Ohio'},
                    {'state_code': 'OK', 'state_name': 'Oklahoma'},
                    {'state_code': 'OR', 'state_name': 'Oregon'},
                    {'state_code': 'PA', 'state_name': 'Pennsylvania'},
                    {'state_code': 'RI', 'state_name': 'Rhode Island'},
                    {'state_code': 'SC', 'state_name': 'South Carolina'},
                    {'state_code': 'SD', 'state_name': 'South Dakota'},
                    {'state_code': 'TN', 'state_name': 'Tennessee'},
                    {'state_code': 'TX', 'state_name': 'Texas'},
                    {'state_code': 'UT', 'state_name': 'Utah'},
                    {'state_code': 'VT', 'state_name': 'Vermont'},
                    {'state_code': 'WA', 'state_name': 'Washington'},
                    {'state_code': 'WV', 'state_name': 'West Virginia'},
                    {'state_code': 'WI', 'state_name': 'Wisconsin'},
                    {'state_code': 'WY', 'state_name': 'Wyoming'}
]

for info in state_codes:
    new_state = State(info['state_code'], info['state_name'])
    new_state.save()


now = datetime.datetime.now()
state = State.objects.get(state_code='AK')

new_cby = ConsumptionByYear(state = state,
                            state_rank = 99,
                            year = 1960,
                            last_updated = now,
                            total_energy_consumption = 61434,
                            fossil_fuels_total_consumption = 54634,
                            coal_total_consumption = 7189,
                            natural_gas_total_consumption = 2034,
                            petroleum_total_consumption = 45411,
                            nuclear_total_consumption = 0,
                            renewable_energy_total_consumption = 6800,
                            fuel_ethanol_production_losses = 0,
                            fuel_ethanol_total_consumption = 0,
                            geothermal_total_consumption = 0,
                            hydropower_total_consumption = 3120,
                            solar_total_consumption = 0,
                            wood_and_waste_total_consumption = 3681,
                            wind_total_consumption = 0,
                            net_international_imports = 0,
                            net_interstate_imports = 0
                            )
