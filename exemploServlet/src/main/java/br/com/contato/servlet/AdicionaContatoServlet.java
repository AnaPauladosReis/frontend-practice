package br.com.contato.servlet;
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
		String nome = request.getParameter("nome");
		out.println(nome);
		
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