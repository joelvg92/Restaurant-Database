package com.rutgers.cs336.restDB.database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import com.rutgers.cs336.restDB.constants.APPConstants;

public class DatabaseConnection {
	
	private static DatabaseConnection _instance;
	
	static Connection connection = null; 
	
	String connectionURL = "";
	
	private DatabaseConnection() {
		// TODO Auto-generated constructor stub
	}
	
	public static DatabaseConnection getInstance(){
		if(_instance==null){
			_instance = new DatabaseConnection();
		}
		return _instance;
	}
	
	public static synchronized Connection getConnection() throws Exception{
	    Class.forName(APPConstants.DATABASE_DRIVER).newInstance(); 
		if(connection == null){
	    connection = DriverManager.getConnection(APPConstants.DATABASE_URL, APPConstants.DATABASE_LOGIN, APPConstants.DATABASE_PASSWORD);
		}else if (connection != null && !connection.isValid(0)){
			connection.close();
			connection = DriverManager.getConnection(APPConstants.DATABASE_URL, APPConstants.DATABASE_LOGIN, APPConstants.DATABASE_PASSWORD);
		}		
	    return connection;
	}
	
	public void close(){
		if(connection!=null){
			try {
				connection.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

}
