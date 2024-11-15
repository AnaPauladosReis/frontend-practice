package br.com.gcontato.servlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class AdicionaContatoServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
	
	public AdicionaContatoServlet() {
		super();
	}
	
	@Override
	protected void service(HttpServletRequest request,
	                      HttpServletResponse response)
	        throws ServletException, IOException{
		
		PrintWriter out = response.getWriter();
		out.println("<!DOCTYPE html>");
		out.println("<html>");
		out.println("<head>");
		out.println("<title>Dados do Contato</title>");
		out.println("</head>");
		out.println("<body>");
		out.println("<h1>Dados do Contato</h1>");
		out.println("<ul>");
		out.println("<li>Nome: " + request.getParameter("nome") + "</li>");
		out.println("<li>Endereço: " + request.getParameter("endereco") + "</li>");
		out.println("<li>Telefone: " + request.getParameter("telefone") + "</li>");
		out.println("</ul>");
		out.println("</body>");
		out.println("</html>");
		
	}
	
	protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException{

	}
	
	protected void doPost(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException{

	}
	

}