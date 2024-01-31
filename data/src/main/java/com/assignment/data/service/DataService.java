package com.assignment.data.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assignment.data.model.Chart;
import com.assignment.data.model.Data;
import com.assignment.data.repository.DataRepository;

@Service
public class DataService {
	@Autowired
	private DataRepository dataRepository;

	// get data by id
	public List<Data> getBySector(String sector) {
		return dataRepository.getDataBySector(sector);
	}

	// get data by sector
	public List<Integer> findBySector(String sector) {
		List<Data> data = dataRepository.getDataBySector(sector);
		
		// call method to get count
		List<Integer> list = getList(data);
		return list;
	}

	// method to get total no.of count based on sector
	public List<Integer> getList(List<Data> data) {
		int topic = 0;
		int country = 0;
		int city = 0;
		int pestel = 0;

		for (Data d : data) {
			if (!d.getTopic().isEmpty()) {
				topic = topic + 1;
			}
			if (!d.getCountry().isEmpty()) {
				country = country + 1;
			}
			if (!d.getCity().isEmpty()) {
				city = city + 1;
			}
			if (!d.getPestle().isEmpty()) {
				pestel = pestel + 1;
			}
		}

		List<Integer> list = new ArrayList<>();
		list.add(topic);
		list.add(country);
		list.add(city);
		list.add(pestel);

		return list;
	}

	// method to get chart data
	public List<Chart> getChartData() {
		// sectors
		List<String> list = new ArrayList<String>();
		list.add("Automotive");
		list.add("Construction");
		list.add("Education");
		list.add("Energy");
		list.add("Environment");
		list.add("Financial services");
		list.add("Government");
		list.add("Healthcare");
		list.add("Information Technology");
		list.add("Manufacturing");
		list.add("Mining");
		list.add("Pharmaceuticals");
		list.add("Retail");
		list.add("Science");
		list.add("Security");
		list.add("Support services");
		list.add("Telecoms");
		list.add("Transport");
		list.add("Water");
		
		List<Chart> chartData = new ArrayList<>();

		for (String sector : list) {
			
			List<Data> data = getBySector(sector);
			int likelihood = 0;
			int intensity = 0;
			for (Data d : data) {
				likelihood = likelihood + d.getLikelihood();
				intensity = intensity + d.getIntensity();
			}

			Chart chart = new Chart();
			chart.setName(sector);
			chart.setLiklihood(likelihood);
			chart.setIntensity(intensity);

			chartData.add(chart);
		}

		return chartData;
	}

}
