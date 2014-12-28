package com.rutgers.cs336.restDB.Doquery;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.rutgers.cs336.restDB.dao.RestaurantDBService;
import com.rutgers.cs336.restDB.database.DatabaseConnection;

import java.sql.*;
import java.io.*;

/**
 * Servlet implementation class Doquery
 */
@WebServlet("/Doquery")
public class Doquery extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	private RestaurantDBService restaurantDBService = null;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Doquery() {
        super();
        restaurantDBService = new RestaurantDBService();
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {}
	
	
	
	public void doGet(HttpServletRequest req, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("application/json");
        PrintWriter out=response.getWriter();
		String output = restaurantDBService.getRestaurants(req);
		out.write(output);
	}
}