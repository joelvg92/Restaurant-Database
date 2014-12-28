package com.rutgers.cs336.restDB.constants;

import java.util.HashMap;
import java.util.Map;

public class ColoumnRelationShipManager {
	
	private static Map<String,String> map = new HashMap<String, String>();
	
	public static String getValue(String key){
		if(map.size() == 0){
			populate();
		}
		return map.get(key);
	}
	
	private static void populate(){
		map.put("ID", "=");
		map.put("Name", "like");
		map.put("Address", "like");
		map.put("Phone", "like");
		map.put("Website", "like");
		map.put("Cuisine", "like");
		map.put("DstFrmCty", "<=");
		map.put("Stars", ">=");
		map.put("AvgPrice", "<=");
		map.put("OPEN", ">=");
		map.put("CLOSE", "<=");		
		map.put("Item", "like");
	    map.put("Cost","=");
	}

}
