package com.rutgers.cs336.restDB.dao;

import java.io.IOException;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.codehaus.jackson.map.ObjectMapper;

import com.rutgers.cs336.restDB.entity.Restaurant;

public class RestaurantDBservice2 {
	
	private RestaurantDAO2 restaurantDAO2 = null;
	
	ObjectMapper mapper = new ObjectMapper();
	
	public RestaurantDBservice2() {
		try {
			restaurantDAO2 = new RestaurantDAO2();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	public String getRestaurants(HttpServletRequest request){
		Map<String, String> filters = new HashMap<String, String>();
		Enumeration<String> e = request.getParameterNames();
		while(e.hasMoreElements()){
			String param = (String) e.nextElement();
			filters.put(param, request.getParameter(param));
		}
		
		List<Restaurant> restaurants = null;
		try {
			restaurants = restaurantDAO2.filterRestaurants(filters);
			return mapper.writeValueAsString(restaurants);
		} catch (Exception e1) {
			e1.printStackTrace();
		}
		
		return null;
			
	}
		

}
