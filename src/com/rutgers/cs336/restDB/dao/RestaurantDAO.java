package com.rutgers.cs336.restDB.dao;

import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

import sun.swing.MenuItemLayoutHelper.ColumnAlignment;

import com.rutgers.cs336.restDB.constants.ColoumnRelationShipManager;
import com.rutgers.cs336.restDB.database.DatabaseConnection;
import com.rutgers.cs336.restDB.entity.Restaurant;

public class RestaurantDAO {
	
	private Connection connection = null;
	
	public RestaurantDAO() throws Exception {
		connection = DatabaseConnection.getInstance().getConnection();
	}
	
	public List<Restaurant> filterRestaurants(Map<String, String> filters) throws IOException{
		List<Restaurant> restaurants = new ArrayList<Restaurant>();
		Statement stmt=null;
		ResultSet rs= null;
		String query="select * from Restaurants where ";
		String filterset = "";
		int size = filters.size();
		for(Entry<String, String> entry : filters.entrySet()){
			size--;
			filterset = filterset + entry.getKey() + " "+ColoumnRelationShipManager.getValue(entry.getKey()) +" '" + entry.getValue() +"' ";
			if(size>0){
				filterset = filterset + " and ";
			}
		}
		
		query += filterset;
		//System.out.println("Query Generated is  [" + query + " ]");
		
		
		try {
			 stmt=connection.createStatement();
			 rs=stmt.executeQuery(query);
			 while(rs.next())
			   {	
				 Restaurant restaurant = new Restaurant();
				 restaurant.setId(rs.getString("ID"));
				 restaurant.setName(rs.getString("Name"));
			    restaurant.setPhone(rs.getString("Phone"));
				restaurant.setAddress(rs.getString("Address"));
				restaurant.setWebsite(rs.getString("Website"));
			   restaurant.setCuisine(rs.getString("cuisine"));
			   restaurant.setDistFromCity(rs.getInt("DstFrmCty"));
			   restaurant.setRating(rs.getDouble("Stars"));
			   restaurant.setAvgPrice(rs.getInt("AvgPrice"));
			   restaurant.setOpenTime(rs.getTime("OPEN"));
			   restaurant.setCloseTime(rs.getTime("CLOSE"));
			   restaurants.add(restaurant);
			   }
			 
			// System.out.println("Found entries" + restaurants.size());
			 
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}finally{
			try {
				rs.close();
				stmt.close();
			} catch (SQLException e) {
				System.out.println("Exception closing SQL resources " + e.getMessage());
			}
		    
		}
		
		return restaurants;
	}
	
//	public static void main(String[] args) throws Exception {
//		RestaurantDAO dao = new RestaurantDAO();
//		Map<String,String> filters = new HashMap<String, String>();
//		//filters.put("Name", "abc");
//		//filters.put("Cuisine", "Ital");
//		filters.put("DstFrmCty", "10");
//		filters.put("Cuisine", "Italian");
//		dao.filterRestaurants(filters);
//		DatabaseConnection.getInstance().getConnection().close();
//	}

}
